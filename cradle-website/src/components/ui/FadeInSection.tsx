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
  const ref = useRef<HTMLDivElement>(null);
  // amount を 0.3 に増やして、要素の30%が見えてからアニメーション開始
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // 移動距離を大きくして「出てくる」感を強調
  const directionOffset = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
    none: { y: 0, x: 0 },
  };

  // SSR/クライアント初回で同じ値を返すようにする
  // animateOnMountの場合は即座にアニメーション開始、それ以外はisInViewに依存
  const shouldAnimate = animateOnMount || isInView;

  // ページ遷移後は位置移動なし（フェードのみ）
  const usePositionAnimation = !hasNavigated;

  // 初期状態の計算
  const initialState = {
    opacity: 0,
    ...(usePositionAnimation ? directionOffset[direction] : {}),
  };

  // アニメーション後の状態
  const animatedState = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  // トランジション設定
  const transitionConfig = {
    duration: hasNavigated ? 0.5 : duration,
    delay,
    ease: hasNavigated ? "easeOut" : [0.25, 0.1, 0.25, 1],
  };

  // 常に同じJSX構造を返す（Hydration Error対策）
  // 条件分岐はprops内で行い、DOM構造は変えない
  return (
    <motion.div
      ref={animateOnMount ? undefined : ref}
      initial={initialState}
      animate={shouldAnimate ? animatedState : initialState}
      transition={transitionConfig}
      className={className}
    >
      {children}
    </motion.div>
  );
}
