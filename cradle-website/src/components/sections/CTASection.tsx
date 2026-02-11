"use client";

import Link from "next/link";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section 
      className="py-20 md:py-32 relative overflow-hidden transition-all duration-700"
      style={{ background: "var(--theme-cta-bg, #1a1a1a)" }}
    >
      {/* Animated background pattern - blobs hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="hidden md:block blob-animated absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--theme-cta-text, #ffffff)", willChange: "transform", transform: "translateZ(0)" }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hidden md:block blob-animated absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--theme-cta-text, #ffffff)", willChange: "transform", transform: "translateZ(0)" }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--theme-cta-text, #ffffff) 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }}
        />
      </div>

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
              まずはお気軽にご相談ください
            </motion.h2>
            <motion.p 
              className="mb-10 leading-relaxed opacity-70"
              style={{ color: "var(--theme-cta-text, #ffffff)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              「何から始めればいいかわからない」という段階からでも大丈夫です。
              御社の課題をお聞かせください。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/contact">
                <motion.button
                  className="px-10 py-4 rounded-full font-medium transition-all border-2"
                  style={{
                    borderColor: "var(--theme-cta-text, #ffffff)",
                    color: "var(--theme-cta-text, #ffffff)",
                    background: "transparent"
                  }}
                  whileHover={{
                    scale: 1.05,
                    background: "var(--theme-cta-text, #ffffff)",
                    color: "var(--theme-primary, #1a1a1a)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  お問い合わせ
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
