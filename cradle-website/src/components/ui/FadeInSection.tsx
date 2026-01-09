"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import { useTransition } from "@/components/layout/PageTransitionProvider";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  /** trueにするとページロード時にすぐアニメーションを開始（ヒーローセクション向け） */
  animateOnMount?: boolean;
}

export function FadeInSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
  animateOnMount = false,
}: FadeInSectionProps) {
  const { hasNavigated } = useTransition();
  
  // 移動距離を大きくして「出てくる」感を強調
  const directionOffset = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
    none: { y: 0, x: 0 },
  };

  const ref = useRef<HTMLDivElement>(null);
  // amount を 0.3 に増やして、要素の30%が見えてからアニメーション開始
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // ページ遷移後：位置は動かさず、フェードとディレイだけ
  if (hasNavigated && animateOnMount) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // 初回アクセス + animateOnMount：下から出てくるアニメーション
  if (animateOnMount) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          ...directionOffset[direction],
        }}
        animate={{
          opacity: 1,
          y: 0,
          x: 0,
        }}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // ページ遷移後のスクロールアニメーション：位置は動かさず、フェードだけ
  if (hasNavigated) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // 初回アクセス + スクロールアニメーション
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        x: 0,
      } : {
        opacity: 0,
        ...directionOffset[direction],
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
