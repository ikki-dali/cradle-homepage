"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

type TransitionType = "default" | "splash";

interface TransitionContextType {
  isTransitioning: boolean;
  transitionType: TransitionType;
  hasNavigated: boolean; // ページ遷移後かどうか
  startTransition: (callback: () => void, type?: TransitionType) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
  transitionType: "default",
  hasNavigated: false,
  startTransition: () => {},
});

export function useTransition() {
  return useContext(TransitionContext);
}

// Provider（状態管理のみ）
export function TransitionProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState<TransitionType>("default");
  const [hasNavigated, setHasNavigated] = useState(false);

  const startTransition = useCallback((callback: () => void, type: TransitionType = "default") => {
    setTransitionType(type);
    setIsTransitioning(true);
    setHasNavigated(true); // ページ遷移したことを記録
    
    const duration = type === "splash" ? 700 : 450;
    
    setTimeout(() => {
      callback();
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, duration);
  }, []);

  return (
    <TransitionContext.Provider value={{ isTransitioning, transitionType, hasNavigated, startTransition }}>
      {children}
      <AnimatePresence>
        {isTransitioning && transitionType === "splash" && <SplashTransitionOverlay />}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}

// ネイビーカラー
const NAVY_COLOR = "#1e3a5f";

// スプラッシュ風トランジション（ロゴクリック用）
function SplashTransitionOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-[150] flex items-center justify-center bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-64 h-32 md:w-80 md:h-40 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
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
  );
}

// コンテンツにブラーをかけてふわっと切り替え（位置は動かさない）
export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const { isTransitioning, transitionType } = useTransition();
  const isDefaultTransition = isTransitioning && transitionType === "default";

  return (
    <motion.div
      animate={isDefaultTransition ? {
        opacity: 0,
      } : {
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
