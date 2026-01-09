import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { getNewsItem, getAllNewsItems, formatDate } from "@/lib/news";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const newsItems = getAllNewsItems();
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const newsItem = getNewsItem(slug);

  if (!newsItem) {
    return {
      title: "記事が見つかりません | Cradle",
    };
  }

  return {
    title: `${newsItem.title} | Cradle`,
    description: newsItem.excerpt,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const newsItem = getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <time>{formatDate(newsItem.date)}</time>
                <span className="px-2 py-0.5 bg-secondary rounded text-xs">
                  {newsItem.category}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">
                {newsItem.title}
              </h1>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {newsItem.content.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed mb-6 whitespace-pre-line"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Back Link */}
              <div className="mt-16 pt-8 border-t border-border">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  お知らせ一覧に戻る
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}

