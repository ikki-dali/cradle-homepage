"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { useSplash } from "@/components/splash/SplashContext";
import { TransitionLink } from "@/components/ui/TransitionLink";

const navItems = [
  { href: "/services", label: "サービス" },
  { href: "/about", label: "会社概要" },
  { href: "/works", label: "実績・事例" },
  { href: "/news", label: "お知らせ" },
  { href: "/careers", label: "採用情報" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSplashVisible } = useSplash();

  // スプラッシュ表示中はヘッダーを非表示
  if (isSplashVisible) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo width={140} height={56} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <TransitionLink
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </TransitionLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <TransitionLink 
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 transition-colors duration-500 hover:opacity-90"
              style={{ 
                backgroundColor: "var(--theme-primary, #1a1a1a)",
                color: "var(--theme-cta-text, #ffffff)"
              }}
            >
              お問い合わせ
            </TransitionLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label="メニューを開く"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 8 : 0,
                }}
                className="block h-0.5 w-full bg-foreground origin-left"
              />
              <motion.span
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
                className="block h-0.5 w-full bg-foreground"
              />
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -8 : 0,
                }}
                className="block h-0.5 w-full bg-foreground origin-left"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <TransitionLink
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-lg text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </TransitionLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-4"
              >
                <TransitionLink 
                  href="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 transition-colors duration-500 hover:opacity-90"
                  style={{ 
                    backgroundColor: "var(--theme-primary, #1a1a1a)",
                    color: "var(--theme-cta-text, #ffffff)"
                  }}
                >
                    お問い合わせ
                  </TransitionLink>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
