"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const navItems = [
  { href: "/services", label: "サービス" },
  { href: "/about", label: "会社概要" },
  { href: "/works", label: "実績・事例" },
  { href: "/news", label: "お知らせ" },
  { href: "/careers", label: "採用情報" },
  { href: "/contact", label: "お問い合わせ" },
];

const legalItems = [
  { href: "/legal", label: "特定商取引法に基づく表記" },
  { href: "/privacy", label: "プライバシーポリシー" },
];

const companyInfo = {
  name: "クレイドル株式会社",
  address: "東京都足立区佐野2-17-6-101",
  tel: "070-2368-0098",
};

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Company Info */}
          <div className="space-y-4">
            <Logo width={100} height={40} />
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>{companyInfo.name}</p>
              <p>{companyInfo.address}</p>
              <p>TEL: {companyInfo.tel}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <nav className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <nav className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
              {legalItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="text-xs text-muted-foreground">
              © 2025 Cradle Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

