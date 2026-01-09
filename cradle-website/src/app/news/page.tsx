"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { getAllNewsItems, formatDate } from "@/lib/news";
import { motion } from "framer-motion";

// Category to default thumbnail mapping
const categoryThumbnails: Record<string, string> = {
  "お知らせ": "/images/news/default-news.jpg",
  "イベント": "/images/news/default-event.jpg",
  "サービス": "/images/news/default-service.jpg",
};

export default function NewsPage() {
  const newsItems = getAllNewsItems();

  return (
    <>
      {/* Hero */}
      <section 
        className="py-20 md:py-32 transition-colors duration-500"
        style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection animateOnMount delay={0}>
            <div className="max-w-3xl">
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 transition-colors duration-500"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                お知らせ
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                最新のニュース、イベント情報、サービス更新情報をお届けします。
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* News List - Card Layout */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {newsItems.map((item, index) => {
              const thumbnailSrc = categoryThumbnails[item.category] || categoryThumbnails["お知らせ"];
              return (
                <FadeInSection key={item.slug} animateOnMount={index < 6} delay={index < 6 ? 0.1 + (index % 3) * 0.1 : 0}>
                  <Link href={`/news/${item.slug}`}>
                    <motion.article 
                      className="group h-full rounded-xl border overflow-hidden transition-all duration-300"
                      style={{ 
                        borderColor: "var(--theme-card-border, #e5e5e5)",
                        background: "white"
                      }}
                      whileHover={{ 
                        y: -4,
                        boxShadow: "0 12px 40px -12px rgba(0,0,0,0.15)"
                      }}
                    >
                      {/* Thumbnail */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={thumbnailSrc}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <span 
                            className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                            style={{ 
                              background: "rgba(255,255,255,0.9)",
                              color: "var(--theme-primary, #1a1a1a)"
                            }}
                          >
                            {item.category}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-5">
                        <time className="text-sm text-muted-foreground">
                          {formatDate(item.date)}
                        </time>
                        <h2 
                          className="text-lg font-medium mt-2 mb-3 line-clamp-2 transition-colors duration-500"
                          style={{ color: "var(--theme-primary, #1a1a1a)" }}
                        >
                          {item.title}
                        </h2>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {item.excerpt}
                        </p>
                      </div>
                    </motion.article>
                  </Link>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
