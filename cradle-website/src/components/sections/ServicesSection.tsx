"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { motion } from "framer-motion";
import { services } from "@/lib/services";

const serviceIcons: Record<string, React.ReactNode> = {
  "ai-dx": (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  reskilling: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  development: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  website: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
};

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
              サービス
            </h2>
            <p className="mt-4 text-muted-foreground">
              お客様の課題に合わせた最適なソリューションを提供します
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <FadeInSection key={service.id} delay={index * 0.1}>
              <Link href={`/services/${service.slug}`}>
                <motion.div
                  className="group h-full rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden"
                  style={{
                    borderColor: "var(--theme-card-border, #e5e5e5)",
                    background: "white",
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 40px -12px rgba(0,0,0,0.15)",
                  }}
                >
                  {/* Service Image */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    {/* Icon overlay */}
                    <motion.div
                      className="absolute bottom-4 left-4 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        color: "var(--theme-icon-color, #1a1a1a)",
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {serviceIcons[service.id]}
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 
                      className="text-lg md:text-xl font-medium mb-2 transition-colors"
                      style={{ color: "var(--theme-primary, #1a1a1a)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div
                      className="inline-flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2"
                      style={{ color: "var(--theme-accent, #666666)" }}
                    >
                      詳しく見る
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                    </div>
                  </div>
                  {/* Bottom accent bar on hover */}
                  <div 
                    className="h-1 w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: "var(--theme-primary, #1a1a1a)" }}
                  />
                </motion.div>
              </Link>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: "var(--theme-primary, #666666)" }}
            >
              サービス一覧を見る
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
      </div>
    </section>
  );
}
