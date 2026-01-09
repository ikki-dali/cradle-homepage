"use client";

import Link from "next/link";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { Button } from "@/components/ui/button";

export default function WorksPage() {
  return (
    <>
      {/* Hero */}
      <section 
        className="py-20 md:py-32 transition-colors duration-500"
        style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection animateOnMount delay={0}>
            <div className="max-w-3xl">
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 transition-colors duration-500"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                実績・事例
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                これまでにご支援させていただいたお客様の事例をご紹介します。
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection animateOnMount delay={0.3}>
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <svg
                  className="w-16 h-16 mx-auto transition-colors duration-500"
                  style={{ color: "var(--theme-accent, #666666)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h2 
                className="text-2xl font-medium mb-4 transition-colors duration-500"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                Coming Soon
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                実績・事例は準備中です。
                <br />
                随時追加していきますので、しばらくお待ちください。
              </p>
              <Button 
                asChild 
                variant="outline"
                className="transition-colors duration-500"
                style={{ 
                  borderColor: "var(--theme-primary, #1a1a1a)",
                  color: "var(--theme-primary, #1a1a1a)"
                }}
              >
                <Link href="/contact">お問い合わせはこちら</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
