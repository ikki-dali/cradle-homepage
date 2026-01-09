'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      
      {/* 背景の抽象的なアニメーション（AI感を消し、有機的な動きに） */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <motion.div 
          className="absolute top-[20%] left-[20%] w-[30rem] h-[30rem] bg-gray-100 rounded-full blur-[100px]"
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[20%] right-[20%] w-[40rem] h-[40rem] bg-slate-50 rounded-full blur-[120px]"
          animate={{ 
            x: [0, -70, 70, 0],
            y: [0, 70, -70, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* キャッチコピー */}
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-8 leading-[1.4] md:leading-[1.2] tracking-normal text-slate-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ fontFeatureSettings: '"palt"' }}
          >
            構想から定着まで。<br />
            本気で伴走する<br />
            <span className="inline-block relative">
              AI導入パートナー。
              <motion.svg 
                className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-6 text-gray-200"
                viewBox="0 0 100 10" 
                preserveAspectRatio="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
              >
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
              </motion.svg>
            </span>
          </motion.h1>

          {/* サブコピー */}
          <motion.p 
            className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Cradleは、「何から始めればいいかわからない」という企業に寄り添い、<br className="hidden md:inline" />
            AI導入の構想から社内定着まで、成果が出るまで徹底的に伴走いたします。
          </motion.p>

          {/* CTAボタン */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link 
              href="/contact" 
              className="group relative px-8 py-4 bg-gray-900 text-white rounded-full font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10">無料で相談する</span>
              <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
            <Link 
              href="/services" 
              className="group px-8 py-4 bg-transparent border border-gray-200 text-gray-600 rounded-full font-medium hover:border-gray-400 hover:text-gray-900 transition-all hover:bg-gray-50"
            >
              サービスを見る
            </Link>
          </motion.div>
        </div>
      </div>

      {/* スクロールダウン誘導 */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gray-200 overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-gray-400"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
