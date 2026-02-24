import { NextRequest, NextResponse } from "next/server";

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || "";
const LINE_NOTIFY_TOKEN = process.env.LINE_NOTIFY_TOKEN || "";

// 同一IPからの連続通知を防ぐ簡易レート制限（メモリ内、再起動でリセット）
const recentNotifications = new Map<string, number>();
const RATE_LIMIT_MINUTES = 30;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { page, referrer, company, tel, email } = body;

    // IPアドレス取得
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // レート制限チェック：同一IPから30分以内の再通知を防止
    const cacheKey = `${ip}-${page}-${company || ""}`;
    const lastNotified = recentNotifications.get(cacheKey);
    const now = Date.now();

    if (lastNotified && now - lastNotified < RATE_LIMIT_MINUTES * 60 * 1000) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    recentNotifications.set(cacheKey, now);

    // 古いエントリをクリーンアップ
    for (const [key, time] of recentNotifications) {
      if (now - time > RATE_LIMIT_MINUTES * 60 * 1000) {
        recentNotifications.delete(key);
      }
    }

    const timestamp = new Date().toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
    });

    // 会社情報があるかどうかでヘッダーを変える
    const hasCompanyInfo = company || tel || email;
    const headerText = hasCompanyInfo
      ? `${company || "不明な企業"}がLPを閲覧しました`
      : "LP閲覧通知（企業情報なし）";

    const message = [
      headerText,
      `ページ: ${page || "不明"}`,
      `日時: ${timestamp}`,
      company ? `会社名: ${company}` : null,
      tel ? `電話番号: ${tel}` : null,
      email ? `メール: ${email}` : null,
      referrer ? `参照元: ${referrer}` : null,
      `IP: ${ip}`,
    ]
      .filter(Boolean)
      .join("\n");

    // Slack用のブロック構築
    const slackBlocks: Record<string, unknown>[] = [];

    // ヘッダー
    slackBlocks.push({
      type: "header",
      text: {
        type: "plain_text",
        text: hasCompanyInfo ? `${company || "不明な企業"}` : "新規LP閲覧",
        emoji: true,
      },
    });

    // 会社情報（メインコンテンツ）
    if (hasCompanyInfo) {
      const contactLines = [];
      if (tel) contactLines.push(`*TEL:*  ${tel}`);
      if (email) contactLines.push(`*Mail:*  ${email}`);

      slackBlocks.push({
        type: "section",
        text: {
          type: "mrkdwn",
          text: contactLines.join("\n"),
        },
      });
    }

    // 区切り線
    slackBlocks.push({ type: "divider" });

    // 詳細情報（コンパクトに）
    slackBlocks.push({
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: `${page || "/lp/realestate"}  |  ${timestamp}  |  ${referrer || "直接アクセス"}`,
        },
      ],
    });

    const promises: Promise<Response>[] = [];

    // Slack通知
    if (SLACK_WEBHOOK_URL) {
      promises.push(
        fetch(SLACK_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: message,
            blocks: slackBlocks,
          }),
        })
      );
    }

    // LINE Notify通知
    if (LINE_NOTIFY_TOKEN) {
      promises.push(
        fetch("https://notify-api.line.me/api/notify", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${LINE_NOTIFY_TOKEN}`,
          },
          body: new URLSearchParams({ message: `\n${message}` }),
        })
      );
    }

    await Promise.allSettled(promises);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
