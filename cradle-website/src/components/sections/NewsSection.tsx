"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { motion } from "framer-motion";

// Category to default thumbnail mapping
const categoryThumbnails: Record<string, string> = {
  "お知らせ": "/images/news/default-news.jpg",
  "イベント": "/images/news/default-event.jpg",
  "サービス": "/images/news/default-service.jpg",
};

// Sample news data - will be replaced with actual data from MDX files
const newsItems = [
  {
    slug: "website-renewal",
    title: "ホームページをリニューアルしました",
    date: "2025.01.09",
    category: "お知らせ",
    thumbnail: null, // Uses default based on category
  },
  {
    slug: "ai-seminar-202501",
    title: "【開催報告】AI活用セミナーを開催しました",
    date: "2025.01.08",
    category: "イベント",
    thumbnail: null,
  },
  {
    slug: "new-service-reskilling",
    title: "法人向けリスキリング支援サービスを開始しました",
    date: "2025.01.07",
    category: "サービス",
    thumbnail: null,
  },
];

export function NewsSection() {
  return (
    <section className="py-20 md:py-32 bg-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
              お知らせ
            </h2>
            <Link
              href="/news"
              className="text-sm transition-colors inline-flex items-center gap-2"
              style={{ color: "var(--theme-primary, #666666)" }}
            >
              一覧を見る
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </FadeInSection>

        <div className="space-y-0 divide-y" style={{ borderColor: "var(--theme-card-border, #e5e5e5)" }}>
          {newsItems.map((item, index) => {
            const thumbnailSrc = item.thumbnail || categoryThumbnails[item.category] || categoryThumbnails["お知らせ"];
            return (
              <FadeInSection key={item.slug} delay={index * 0.1}>
                <Link
                  href={`/news/${item.slug}`}
                  className="block py-6 group -mx-4 px-4 transition-all"
                >
                  <motion.div 
                    className="flex items-center gap-4 sm:gap-6"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={thumbnailSrc}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1 text-sm text-muted-foreground">
                        <time>{item.date}</time>
                        <span 
                          className="px-2 py-0.5 rounded-full text-xs font-medium"
                          style={{ 
                            background: "var(--theme-card-hover, #f5f5f5)",
                            color: "var(--theme-primary, #1a1a1a)"
                          }}
                        >
                          {item.category}
                        </span>
                      </div>
                      <h3 
                        className="transition-colors truncate sm:whitespace-normal"
                        style={{ color: "var(--theme-primary, #1a1a1a)" }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <svg
                      className="w-5 h-5 flex-shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </Link>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
