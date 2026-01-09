// News data - In production, this would be loaded from MDX files or a CMS
export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: "website-renewal",
    title: "ホームページをリニューアルしました",
    date: "2025-01-09",
    category: "お知らせ",
    excerpt:
      "この度、クレイドル株式会社のホームページをリニューアルいたしました。",
    content: `この度、クレイドル株式会社のホームページをリニューアルいたしました。

新しいホームページでは、当社のサービス内容やミッションをより分かりやすくお伝えできるよう、デザインと構成を一新いたしました。

今後とも、お客様に寄り添ったサービスを提供してまいります。
引き続きよろしくお願いいたします。`,
  },
  {
    slug: "ai-seminar-202501",
    title: "【開催報告】AI活用セミナーを開催しました",
    date: "2025-01-08",
    category: "イベント",
    excerpt:
      "1月8日に開催したAI活用セミナーには、多くの方にご参加いただきました。",
    content: `1月8日に開催したAI活用セミナーには、多くの方にご参加いただきました。

セミナーでは、中小企業におけるAI活用の具体的な事例や、導入時のポイントについてお話しさせていただきました。

参加者の皆様からは、
・「具体的な事例が参考になった」
・「何から始めればいいか分かった」
・「自社でも取り組んでみたい」
といったお声をいただきました。

今後も定期的にセミナーを開催してまいりますので、ご興味のある方はお気軽にお問い合わせください。`,
  },
  {
    slug: "new-service-reskilling",
    title: "法人向けリスキリング支援サービスを開始しました",
    date: "2025-01-07",
    category: "サービス",
    excerpt:
      "社員のAIスキル向上を支援する、法人向けリスキリング支援サービスを開始いたしました。",
    content: `社員のAIスキル向上を支援する、法人向けリスキリング支援サービスを開始いたしました。

AIは導入するだけでは成果が出ません。社員が使いこなせて初めて、業務効率化や生産性向上につながります。

当サービスでは、
・経営層向けAI戦略研修
・管理職向け業務改善研修
・現場向け実践AIツール研修

など、それぞれのレベルに合わせた研修プログラムをご用意しています。

詳細は「サービス」ページをご覧いただくか、お気軽にお問い合わせください。`,
  },
];

export function getNewsItem(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}

export function getAllNewsItems(): NewsItem[] {
  return newsItems.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).replace(/\//g, ".");
}

