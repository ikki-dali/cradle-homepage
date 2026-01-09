"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// パーティクルの設定
const particles = [
  { id: 1, size: 4, x: "10%", y: "20%", duration: 15, delay: 0 },
  { id: 2, size: 6, x: "20%", y: "60%", duration: 18, delay: 2 },
  { id: 3, size: 3, x: "30%", y: "30%", duration: 12, delay: 1 },
  { id: 4, size: 5, x: "70%", y: "25%", duration: 20, delay: 3 },
  { id: 5, size: 4, x: "80%", y: "70%", duration: 16, delay: 0.5 },
  { id: 6, size: 7, x: "85%", y: "40%", duration: 14, delay: 2.5 },
  { id: 7, size: 3, x: "15%", y: "80%", duration: 17, delay: 1.5 },
  { id: 8, size: 5, x: "50%", y: "15%", duration: 19, delay: 4 },
  { id: 9, size: 4, x: "60%", y: "75%", duration: 13, delay: 0.8 },
  { id: 10, size: 6, x: "40%", y: "50%", duration: 21, delay: 3.5 },
  { id: 11, size: 3, x: "25%", y: "45%", duration: 16, delay: 2.2 },
  { id: 12, size: 5, x: "75%", y: "55%", duration: 18, delay: 1.8 },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with theme support */}
      <div 
        className="absolute inset-0 transition-all duration-700"
        style={{ background: "var(--theme-hero-bg, linear-gradient(180deg, #ffffff 0%, #fafafa 100%))" }}
      />
      
      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--theme-primary, #1a1a1a)" }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--theme-accent, #666666)" }}
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full opacity-15 blur-2xl"
          style={{ background: "var(--theme-accent-light, #999999)" }}
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.x,
              top: particle.y,
              background: "var(--theme-primary, #1a1a1a)",
              opacity: 0.15,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, -10, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
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
              <motion.svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <motion.path
                  d="M0 6 Q 75 12 150 6 Q 225 0 300 6"
                  fill="none"
                  stroke="var(--theme-primary, currentColor)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ 
                    duration: 2.0, 
                    delay: 1.0,
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
