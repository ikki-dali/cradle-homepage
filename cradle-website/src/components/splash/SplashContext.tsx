"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SplashContextType {
  isSplashVisible: boolean;
  setSplashVisible: (visible: boolean) => void;
}

const SplashContext = createContext<SplashContextType>({
  isSplashVisible: true,
  setSplashVisible: () => {},
});

export function useSplash() {
  return useContext(SplashContext);
}

export function SplashProvider({ children }: { children: ReactNode }) {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if splash was already seen in this session
    const hasSeenSplash = sessionStorage.getItem("cradle_splash_seen");
    if (hasSeenSplash) {
      setIsSplashVisible(false);
    }
    setIsInitialized(true);
  }, []);

  const setSplashVisible = (visible: boolean) => {
    setIsSplashVisible(visible);
    if (!visible) {
      sessionStorage.setItem("cradle_splash_seen", "true");
    }
  };

  // Don't render children until we've checked sessionStorage
  if (!isInitialized) {
    return null;
  }

  return (
    <SplashContext.Provider value={{ isSplashVisible, setSplashVisible }}>
      {children}
    </SplashContext.Provider>
  );
}
