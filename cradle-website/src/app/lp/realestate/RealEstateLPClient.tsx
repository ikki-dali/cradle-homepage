"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { motion } from "framer-motion";

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "反響対応が遅れて他社に取られる",
    description: "ポータルサイトからの問い合わせに気づくのが遅く、返信する頃には他社で内見予約済み。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "追客リストが溜まる一方",
    description: "過去の問い合わせリストは増え続けるが、手が回らず放置。見込み客を逃し続けている。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "物件情報の更新に追われる",
    description: "SUUMO、HOME'S、自社サイト…同じ情報を何度も手入力。掲載ミスや更新漏れが日常的に発生。",
  },
];

const results = [
  {
    metric: "5倍",
    label: "反響対応スピード",
    description: "AIが問い合わせ内容を即座に分析し、最適な返信を自動生成。24時間365日、即時対応を実現。",
  },
  {
    metric: "1.5倍",
    label: "営業1人あたりの成約数",
    description: "追客の自動化と物件マッチングにより、営業が本当に注力すべきお客様に集中できる環境を構築。",
  },
  {
    metric: "80%",
    label: "事務作業の削減",
    description: "物件情報の一括更新、契約書類の自動生成、帳票作成の自動化で、事務作業を大幅に圧縮。",
  },
];

const solutions = [
  {
    number: "01",
    title: "反響の即時自動対応",
    description: "ポータルサイトからの問い合わせをAIがリアルタイムで検知。お客様の希望条件を分析し、最適な物件情報を添えた返信を自動で送信します。営業時間外でも即座に対応できるため、他社への流出を防ぎます。",
    before: "問い合わせから返信まで平均3時間",
    after: "平均30秒で自動返信",
  },
  {
    number: "02",
    title: "AIによる物件マッチング",
    description: "お客様の希望条件（エリア、間取り、予算、こだわり）をAIが分析し、最適な物件を自動でリストアップ。「このお客様にはこの物件」という提案を、データに基づいて瞬時に行います。",
    before: "営業の経験と勘に依存",
    after: "AIが最適物件を即座にリストアップ",
  },
  {
    number: "03",
    title: "追客タイミングの最適化",
    description: "「今このお客様に連絡すべき」をAIが自動で判定。メールの開封状況、物件ページの閲覧履歴、過去のやり取りから最適な追客タイミングと提案物件を通知します。",
    before: "追客リストを上から順に電話",
    after: "AIが優先度と最適タイミングを自動通知",
  },
  {
    number: "04",
    title: "物件情報の一括管理・更新",
    description: "一度入力すれば、SUUMO・HOME'S・自社サイトなど複数のポータルサイトへ同時に反映。物件情報の更新漏れや掲載ミスをなくし、常に最新の情報を発信できます。",
    before: "各サイトに1件ずつ手入力",
    after: "1回の入力で全サイトに自動反映",
  },
];

const flow = [
  {
    step: 1,
    title: "無料ヒアリング",
    description: "貴社の営業フロー、現在の課題、ご要望をお聞かせください。",
    duration: "30分",
  },
  {
    step: 2,
    title: "診断レポートのご提示",
    description: "どの業務にAIを入れれば最も効果が出るか、具体的にレポートとしてまとめます。",
    duration: "1週間以内",
  },
  {
    step: 3,
    title: "導入・運用開始",
    description: "御社の業務に合わせてカスタマイズし、段階的に導入を進めます。",
    duration: "1〜2ヶ月",
  },
];

const TIMEREX_URL = "https://timerex.net/s/ikki_y_5717/26105ec5/";

export function RealEstateLPClient() {
  const searchParams = useSearchParams();

  // LPページではスプラッシュを即スキップ
  useEffect(() => {
    sessionStorage.setItem("cradle_splash_seen", "true");
    document.body.style.overflow = "";
    document.body.style.touchAction = "";
  }, []);

  useEffect(() => {
    const company = searchParams.get("company") || undefined;
    const tel = searchParams.get("tel") || undefined;
    const email = searchParams.get("email") || undefined;

    fetch("/api/lp-notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page: "/lp/realestate",
        referrer: document.referrer || null,
        userAgent: navigator.userAgent,
        company,
        tel,
        email,
      }),
    }).catch(() => {
      // 通知失敗してもユーザー体験に影響なし
    });
  }, [searchParams]);

  return (
    <>
      {/* Hero */}
      <section
        className="py-20 md:py-32 relative overflow-hidden transition-all duration-700"
        style={{ background: "var(--theme-hero-bg, linear-gradient(180deg, #ffffff 0%, #fafafa 100%))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection animateOnMount delay={0}>
            <div className="max-w-3xl mx-auto text-center">
              <span
                className="inline-block text-sm tracking-wider uppercase font-medium mb-6"
                style={{ color: "var(--theme-accent, #666666)" }}
              >
                不動産業界のAI活用事例
              </span>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6 transition-colors duration-500"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                反響対応を自動化し、
                <br />
                成約数1.5倍を実現した方法
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                「反響が来ても対応が追いつかない」「追客したいけど手が回らない」
                <br className="hidden sm:inline" />
                そんな課題をAIで解決した、不動産会社様の事例をご紹介します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={TIMEREX_URL} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="px-8 py-4 rounded-full font-medium text-white transition-all shadow-lg hover:shadow-xl"
                    style={{ background: "var(--theme-primary, #1a1a1a)" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    無料で相談してみる
                  </motion.button>
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                こんなお悩み、ありませんか？
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {painPoints.map((point, index) => (
              <FadeInSection key={point.title} delay={index * 0.1}>
                <div
                  className="h-full rounded-xl border p-6 transition-all duration-300"
                  style={{
                    borderColor: "var(--theme-card-border, #e5e5e5)",
                    background: "white",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: "var(--theme-section-alt-bg, #f5f5f5)",
                      color: "var(--theme-primary, #1a1a1a)",
                    }}
                  >
                    {point.icon}
                  </div>
                  <h3
                    className="text-lg font-medium mb-2"
                    style={{ color: "var(--theme-primary, #1a1a1a)" }}
                  >
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section
        className="py-20 md:py-32 transition-colors duration-500"
        style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span
                className="text-sm tracking-wider uppercase font-medium"
                style={{ color: "var(--theme-accent, #666666)" }}
              >
                Results
              </span>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-medium mt-4"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                AI導入で実現した成果
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {results.map((result, index) => (
              <FadeInSection key={result.label} delay={index * 0.1}>
                <div className="text-center">
                  <motion.div
                    className="text-5xl sm:text-6xl font-medium mb-2"
                    style={{ color: "var(--theme-primary, #1a1a1a)" }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    {result.metric}
                  </motion.div>
                  <div
                    className="text-sm font-medium mb-3"
                    style={{ color: "var(--theme-primary, #1a1a1a)" }}
                  >
                    {result.label}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {result.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Detail */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span
                className="text-sm tracking-wider uppercase font-medium"
                style={{ color: "var(--theme-accent, #666666)" }}
              >
                Solutions
              </span>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-medium mt-4"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                具体的に何ができるのか
              </h2>
            </div>
          </FadeInSection>

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <FadeInSection key={solution.number} delay={index * 0.1}>
                <div
                  className="rounded-xl border p-6 md:p-8 transition-all duration-300"
                  style={{
                    borderColor: "var(--theme-card-border, #e5e5e5)",
                    background: "white",
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div
                      className="text-4xl font-medium opacity-20 shrink-0"
                      style={{ color: "var(--theme-primary, #1a1a1a)" }}
                    >
                      {solution.number}
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl font-medium mb-3"
                        style={{ color: "var(--theme-primary, #1a1a1a)" }}
                      >
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {solution.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div
                          className="rounded-lg p-4"
                          style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
                        >
                          <div className="text-xs text-muted-foreground mb-1">Before</div>
                          <div className="text-sm font-medium" style={{ color: "var(--theme-primary, #1a1a1a)" }}>
                            {solution.before}
                          </div>
                        </div>
                        <div
                          className="rounded-lg p-4 border-2"
                          style={{ borderColor: "var(--theme-primary, #1a1a1a)" }}
                        >
                          <div className="text-xs mb-1" style={{ color: "var(--theme-accent, #666666)" }}>After</div>
                          <div className="text-sm font-medium" style={{ color: "var(--theme-primary, #1a1a1a)" }}>
                            {solution.after}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section
        className="py-20 md:py-32 transition-colors duration-500"
        style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span
                className="text-sm tracking-wider uppercase font-medium"
                style={{ color: "var(--theme-accent, #666666)" }}
              >
                Flow
              </span>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-medium mt-4"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                ご相談から導入までの流れ
              </h2>
            </div>
          </FadeInSection>

          <div className="max-w-2xl mx-auto">
            {flow.map((item, index) => (
              <FadeInSection key={item.step} delay={index * 0.15}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium text-white shrink-0"
                      style={{ background: "var(--theme-primary, #1a1a1a)" }}
                    >
                      {item.step}
                    </div>
                    {index < flow.length - 1 && (
                      <div
                        className="w-px flex-1 mt-2"
                        style={{ background: "var(--theme-card-border, #e5e5e5)" }}
                      />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        className="text-lg font-medium"
                        style={{ color: "var(--theme-primary, #1a1a1a)" }}
                      >
                        {item.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 md:py-32 relative overflow-hidden transition-all duration-700"
        style={{ background: "var(--theme-cta-bg, #1a1a1a)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection>
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6"
                style={{ color: "var(--theme-cta-text, #ffffff)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                まずは30分、お話しさせてください
              </motion.h2>
              <motion.p
                className="mb-4 leading-relaxed opacity-70"
                style={{ color: "var(--theme-cta-text, #ffffff)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                貴社の業務に合わせて「どこにAIを入れれば最も効果が出るか」を
                <br className="hidden sm:inline" />
                具体的にお伝えする無料診断を行っております。
              </motion.p>
              <motion.p
                className="mb-10 text-sm leading-relaxed opacity-50"
                style={{ color: "var(--theme-cta-text, #ffffff)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                ※ 無理な営業は一切いたしません
              </motion.p>
              <motion.div
                className="flex flex-col gap-4 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a href={TIMEREX_URL} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="px-10 py-4 rounded-full font-medium transition-all border-2"
                    style={{
                      borderColor: "var(--theme-cta-text, #ffffff)",
                      color: "var(--theme-cta-text, #ffffff)",
                      background: "transparent",
                    }}
                    whileHover={{
                      scale: 1.05,
                      background: "var(--theme-cta-text, #ffffff)",
                      color: "var(--theme-primary, #1a1a1a)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    無料相談の日程を選ぶ
                  </motion.button>
                </a>
                <Link href="/contact">
                  <span
                    className="text-sm underline underline-offset-4 opacity-60 hover:opacity-100 transition-opacity"
                    style={{ color: "var(--theme-cta-text, #ffffff)" }}
                  >
                    日程が合わない場合はこちらからご連絡ください
                  </span>
                </Link>
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
