"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSplash } from "@/components/splash/SplashContext";

export function HeroSection() {
  const { isSplashVisible } = useSplash();

  // スプラッシュが表示中はアニメーションを待機させる
  // スプラッシュが消えてからアニメーション開始
  const shouldAnimate = !isSplashVisible;
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with theme support */}
      <div 
        className="absolute inset-0 transition-all duration-700"
        style={{ background: "var(--theme-hero-bg, linear-gradient(180deg, #ffffff 0%, #fafafa 100%))" }}
      />
      
      {/* Animated Gradient Blobs - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {/* Large blob - top right */}
        <motion.div
          className="blob-animated absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-25 blur-[100px]"
          style={{ background: "var(--theme-primary, #1a1a1a)", willChange: "transform", transform: "translateZ(0)" }}
          animate={{
            x: [0, 80, -40, 60, 0],
            y: [0, -60, 40, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Large blob - bottom left */}
        <motion.div
          className="blob-animated absolute -bottom-48 -left-48 w-[700px] h-[700px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "var(--theme-accent, #666666)", willChange: "transform", transform: "translateZ(0)" }}
          animate={{
            x: [0, -60, 80, -40, 0],
            y: [0, 80, -40, 60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Medium blob - center left */}
        <motion.div
          className="blob-animated absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
          style={{ background: "var(--theme-primary, #1a1a1a)", willChange: "transform", transform: "translateZ(0)" }}
          animate={{
            x: [0, 100, 50, 120, 0],
            y: [0, -80, 60, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Medium blob - center right */}
        <motion.div
          className="blob-animated absolute top-1/3 -right-10 w-[350px] h-[350px] rounded-full opacity-20 blur-[90px]"
          style={{ background: "var(--theme-accent-light, #999999)", willChange: "transform", transform: "translateZ(0)" }}
          animate={{
            x: [0, -80, 40, -60, 0],
            y: [0, 60, -80, 40, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Small blob - top center */}
        <motion.div
          className="blob-animated absolute top-20 left-1/3 w-[300px] h-[300px] rounded-full opacity-10 blur-[70px]"
          style={{ background: "var(--theme-primary, #1a1a1a)", willChange: "transform", transform: "translateZ(0)" }}
          animate={{
            x: [0, 60, -40, 80, 0],
            y: [0, 40, -60, 30, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Small blob - bottom center */}
        <motion.div
          className="blob-animated absolute bottom-1/4 right-1/3 w-[250px] h-[250px] rounded-full opacity-15 blur-[60px]"
          style={{ background: "var(--theme-accent, #666666)", willChange: "transform", transform: "translateZ(0)" }}
          animate={{
            x: [0, -50, 70, -30, 0],
            y: [0, -70, 50, -40, 0],
          }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Catchcopy */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight"
          >
            構想から定着まで。
            <br />
            <span
              className="relative inline-block"
              style={{ color: "var(--theme-primary, inherit)" }}
            >
              本気で伴走するAI導入<span className="whitespace-nowrap">パートナー。</span>
              {/* 下線アニメーションだけスプラッシュ後に開始 */}
              <motion.svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                initial={{ opacity: 0 }}
                animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <motion.path
                  d="M0 6 Q 75 12 150 6 Q 225 0 300 6"
                  fill="none"
                  stroke="var(--theme-primary, currentColor)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={shouldAnimate ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.3,
                    ease: "easeInOut"
                  }}
                  style={{ opacity: 0.3 }}
                />
              </motion.svg>
            </span>
          </motion.h1>

          {/* Sub copy */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Cradleは、「何から始めればいいかわからない」という企業に寄り添い、
            AI導入の構想から社内定着まで、導入して終わりではなく、
            使いこなせるようになるまで徹底的に伴走いたします。
            研修から開発まで、何でもご相談ください。
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <motion.button
                className="px-8 py-4 rounded-full font-medium text-white transition-all shadow-lg hover:shadow-xl"
                style={{ background: "var(--theme-primary, #1a1a1a)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                お問い合わせ
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button
                className="px-8 py-4 rounded-full font-medium transition-all border-2"
                style={{
                  borderColor: "var(--theme-primary, #1a1a1a)",
                  color: "var(--theme-primary, #1a1a1a)"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                サービスを見る
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.span 
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--theme-accent, #666666)" }}
        >
          Scroll
        </motion.span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1"
          style={{ borderColor: "var(--theme-accent, #666666)" }}
        >
          <motion.div
            className="w-1.5 h-2.5 rounded-full"
            style={{ background: "var(--theme-primary, #1a1a1a)" }}
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Decorative curved line at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-16 md:h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 Q720,0 1440,100"
            fill="none"
            stroke="var(--theme-card-border, #e5e5e5)"
            strokeWidth="1"
          />
        </svg>
      </div>
    </section>
  );
}
