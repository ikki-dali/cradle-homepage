"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SplashContextType {
  isSplashVisible: boolean;
  setSplashVisible: (visible: boolean) => void;
}

const SplashContext = createContext<SplashContextType>({
  isSplashVisible: false,
  setSplashVisible: () => {},
});

export function useSplash() {
  return useContext(SplashContext);
}

export function SplashProvider({ children }: { children: ReactNode }) {
  // サーバー・クライアント初回で一致させるためにfalseで開始
  const [isSplashVisible, setIsSplashVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // クライアントサイドでマウント後にのみ実行
    setHasMounted(true);

    // Check if splash was already seen in this session
    const hasSeenSplash = sessionStorage.getItem("cradle_splash_seen");
    if (!hasSeenSplash) {
      // 初回訪問時のみスプラッシュを表示
      setIsSplashVisible(true);
    }
  }, []);

  const setSplashVisible = (visible: boolean) => {
    setIsSplashVisible(visible);
    if (!visible) {
      sessionStorage.setItem("cradle_splash_seen", "true");
    }
  };

  // childrenは常にレンダリング（Hydration一致のため）
  // スプラッシュの表示はhasMounted && isSplashVisibleで制御
  return (
    <SplashContext.Provider value={{ isSplashVisible: hasMounted && isSplashVisible, setSplashVisible }}>
      {children}
    </SplashContext.Provider>
  );
}
