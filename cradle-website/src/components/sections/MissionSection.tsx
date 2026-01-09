"use client";

import Link from "next/link";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { motion } from "framer-motion";

export function MissionSection() {
  return (
    <section 
      className="py-20 md:py-32 relative overflow-hidden transition-all duration-500"
      style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--theme-primary, #1a1a1a)" }}
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--theme-accent, #666666)" }}
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <span 
                className="text-sm tracking-wider uppercase font-medium"
                style={{ color: "var(--theme-primary, #666666)" }}
              >
                Mission
              </span>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center leading-tight">
              <span style={{ color: "var(--theme-primary, inherit)" }}>
                AIで無駄を削り、
              </span>
              <br />
              <span className="relative inline-block">
                日本をより強くする。
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 rounded-full opacity-50"
                  style={{ background: "var(--theme-accent, #666666)" }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="mt-12 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                「やらなくてもいいこと」に、どれだけの時間が奪われているか。
              </p>
              <p>
                日本の中小企業は、技術も経験も持っている。
                しかし、その力が十分に発揮されていない。
                書類作成、手作業、非効率な業務——
                やるべきことに集中できない環境が、日々、会社を弱くしている。
              </p>
              <p>
                私たちCradleは、AIの力で無駄を削り、やるべきことだけが残る会社をつくります。
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="mt-10 text-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm transition-colors hover:gap-3"
                style={{ color: "var(--theme-primary, #666666)" }}
              >
                続きを読む
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
      </div>
    </section>
  );
}
