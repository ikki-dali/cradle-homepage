"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with theme support */}
      <div 
        className="absolute inset-0 transition-all duration-700"
        style={{ background: "var(--theme-hero-bg, linear-gradient(180deg, #ffffff 0%, #fafafa 100%))" }}
      />
      
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large blob - top right */}
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-25 blur-[100px]"
          style={{ background: "var(--theme-primary, #1a1a1a)" }}
          animate={{
            x: [0, 80, -40, 60, 0],
            y: [0, -60, 40, -30, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Large blob - bottom left */}
        <motion.div
          className="absolute -bottom-48 -left-48 w-[700px] h-[700px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "var(--theme-accent, #666666)" }}
          animate={{
            x: [0, -60, 80, -40, 0],
            y: [0, 80, -40, 60, 0],
            scale: [1, 1.15, 1.05, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Medium blob - center left */}
        <motion.div
          className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
          style={{ background: "var(--theme-primary, #1a1a1a)" }}
          animate={{
            x: [0, 100, 50, 120, 0],
            y: [0, -80, 60, -40, 0],
            scale: [1, 0.8, 1.1, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Medium blob - center right */}
        <motion.div
          className="absolute top-1/3 -right-10 w-[350px] h-[350px] rounded-full opacity-20 blur-[90px]"
          style={{ background: "var(--theme-accent-light, #999999)" }}
          animate={{
            x: [0, -80, 40, -60, 0],
            y: [0, 60, -80, 40, 0],
            scale: [1, 1.2, 0.85, 1.1, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        
        {/* Small blob - top center */}
        <motion.div
          className="absolute top-20 left-1/3 w-[300px] h-[300px] rounded-full opacity-10 blur-[70px]"
          style={{ background: "var(--theme-primary, #1a1a1a)" }}
          animate={{
            x: [0, 60, -40, 80, 0],
            y: [0, 40, -60, 30, 0],
            scale: [1, 1.3, 0.9, 1.15, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        
        {/* Small blob - bottom center */}
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] rounded-full opacity-15 blur-[60px]"
          style={{ background: "var(--theme-accent, #666666)" }}
          animate={{
            x: [0, -50, 70, -30, 0],
            y: [0, -70, 50, -40, 0],
            scale: [1, 0.9, 1.2, 1.05, 1],
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
                // #region agent log
                onTouchStart={() => fetch('http://127.0.0.1:7242/ingest/17b1b96c-62ed-4008-bccc-39725b733670',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'HeroSection.tsx:159',message:'Contact button touchStart',data:{event:'touchStart',button:'contact'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{})}
                onTouchEnd={() => fetch('http://127.0.0.1:7242/ingest/17b1b96c-62ed-4008-bccc-39725b733670',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'HeroSection.tsx:160',message:'Contact button touchEnd',data:{event:'touchEnd',button:'contact'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{})}
                onHoverStart={() => fetch('http://127.0.0.1:7242/ingest/17b1b96c-62ed-4008-bccc-39725b733670',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'HeroSection.tsx:161',message:'Contact button hoverStart',data:{event:'hoverStart',button:'contact'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B'})}).catch(()=>{})}
                onHoverEnd={() => fetch('http://127.0.0.1:7242/ingest/17b1b96c-62ed-4008-bccc-39725b733670',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'HeroSection.tsx:162',message:'Contact button hoverEnd',data:{event:'hoverEnd',button:'contact'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B'})}).catch(()=>{})}
                // #endregion
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
                // #region agent log
                onTouchStart={() => fetch('http://127.0.0.1:7242/ingest/17b1b96c-62ed-4008-bccc-39725b733670',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'HeroSection.tsx:180',message:'Services button touchStart',data:{event:'touchStart',button:'services'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{})}
                onTouchEnd={() => fetch('http://127.0.0.1:7242/ingest/17b1b96c-62ed-4008-bccc-39725b733670',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'HeroSection.tsx:181',message:'Services button touchEnd',data:{event:'touchEnd',button:'services'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{})}
                onHoverStart={() => fetch('http://127.0.0.1:7242/ingest/17b1b96c-62ed-4008-bccc-39725b733670',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'HeroSection.tsx:182',message:'Services button hoverStart',data:{event:'hoverStart',button:'services'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B'})}).catch(()=>{})}
                onHoverEnd={() => fetch('http://127.0.0.1:7242/ingest/17b1b96c-62ed-4008-bccc-39725b733670',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'HeroSection.tsx:183',message:'Services button hoverEnd',data:{event:'hoverEnd',button:'services'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B'})}).catch(()=>{})}
                // #endregion
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
