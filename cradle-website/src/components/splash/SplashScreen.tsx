"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSplash } from "./SplashContext";

// ネイビーカラー
const NAVY_COLOR = "#1e3a5f";

export default function SplashScreen() {
  const { isSplashVisible, setSplashVisible } = useSplash();

  useEffect(() => {
    if (!isSplashVisible) return;

    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, [isSplashVisible, setSplashVisible]);

  return (
    <AnimatePresence>
      {isSplashVisible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-white"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          <motion.div 
            className="relative w-64 h-32 md:w-80 md:h-40"
            // ゆりかごのように2回だけ揺れる
            animate={{
              rotate: [0, -2.5, 2.5, 0],
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              times: [0, 0.33, 0.66, 1],
              delay: 0.6,
            }}
          >
            {/* ロゴが下から浮き上がってくる */}
            <motion.div
              className="w-full h-full relative flex items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: 0,
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 800 500"
                className="w-full h-full"
              >
                <text 
                  x="50%" 
                  y="280" 
                  textAnchor="middle" 
                  letterSpacing="-5"
                  style={{
                    fontFamily: '"Century Gothic", "Futura", "Helvetica Neue", "Arial", sans-serif',
                    fontWeight: "normal",
                    fontSize: "200px",
                    fill: NAVY_COLOR,
                  }}
                >
                  Cradle
                </text>
                <path 
                  d="M 170 320 Q 400 460 630 320 Q 400 400 170 320 Z" 
                  fill={NAVY_COLOR}
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
