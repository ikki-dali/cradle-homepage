"use client";

import { useEffect, useState } from "react";
import { useSplash } from "./SplashContext";

// ネイビーカラー
const NAVY_COLOR = "#1e3a5f";

export default function SplashScreen() {
  const { isSplashVisible, setSplashVisible } = useSplash();
  const [isExiting, setIsExiting] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // マウント状態を管理
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // スプラッシュ表示中はbodyのスクロールを無効にする
  useEffect(() => {
    // マウント前またはスプラッシュ表示中はスクロール無効
    if (!hasMounted || isSplashVisible) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [hasMounted, isSplashVisible]);

  // 2.4秒後にexitアニメーション開始
  useEffect(() => {
    if (!isSplashVisible) return;

    const timer = setTimeout(() => {
      setIsExiting(true);
      // exitアニメーション完了後に非表示
      setTimeout(() => {
        setSplashVisible(false);
      }, 600);
    }, 2400);

    return () => clearTimeout(timer);
  }, [isSplashVisible, setSplashVisible]);

  // SSR時・JS実行前は常に表示（シャッターが閉じた状態）
  // マウント後はisSplashVisibleで制御
  const shouldShow = !hasMounted || isSplashVisible;

  // スプラッシュが完全に終了したらDOMから削除
  if (hasMounted && !isSplashVisible && !isExiting) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-white splash-container ${
        isExiting ? "splash-exit" : ""
      }`}
      style={{
        visibility: shouldShow ? "visible" : "hidden",
        pointerEvents: shouldShow ? "auto" : "none",
      }}
    >
      <div className="relative w-64 h-32 md:w-80 md:h-40 splash-cradle">
        <div className="w-full h-full relative flex items-center justify-center splash-fadeup">
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
                fontFamily:
                  '"Century Gothic", "Futura", "Helvetica Neue", "Arial", sans-serif',
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
        </div>
      </div>
    </div>
  );
}
