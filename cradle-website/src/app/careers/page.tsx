"use client";

import Link from "next/link";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
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
                採用情報
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                一緒に「AIで日本を強くする」仲間を募集しています。
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection animateOnMount delay={0.5}>
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 
                className="text-2xl font-medium mb-6 transition-colors duration-500"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                採用に関するお問い合わせ
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Cradleでは、AIの力で日本の中小企業を強くするという
                <br className="hidden sm:inline" />
                ミッションに共感してくださる方を募集しています。
                <br />
                <br />
                採用に関するご質問やご応募は、
                <br className="hidden sm:inline" />
                下記よりお気軽にお問い合わせください。
              </p>
              <Button 
                asChild 
                size="lg"
                className="transition-colors duration-500"
                style={{ 
                  background: "var(--theme-primary, #1a1a1a)",
                  color: "var(--theme-cta-text, #ffffff)"
                }}
              >
                <Link href="/contact">採用に関するお問い合わせ</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Values */}
      <section 
        className="py-20 md:py-32 transition-colors duration-500"
        style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 
              className="text-2xl sm:text-3xl font-medium mb-12 text-center transition-colors duration-500"
              style={{ color: "var(--theme-primary, #1a1a1a)" }}
            >
              大切にしている価値観
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "伴走する姿勢",
                description:
                  "お客様の課題を自分事として捉え、成果が出るまで一緒に走り続けます。",
              },
              {
                title: "学び続ける",
                description:
                  "技術は日々進化しています。常に最新の知識を取り入れ、お客様に最適な提案ができるよう努めます。",
              },
              {
                title: "誠実であること",
                description:
                  "できることはできる、できないことはできないと正直に伝え、信頼関係を築きます。",
              },
            ].map((value, index) => (
              <FadeInSection key={value.title} delay={index * 0.1}>
                <div 
                  className="bg-white p-6 md:p-8 rounded-lg transition-all duration-500"
                  style={{ borderColor: "var(--theme-card-border, #e5e5e5)", borderWidth: "1px" }}
                >
                  <h3 
                    className="text-lg font-medium mb-3 transition-colors duration-500"
                    style={{ color: "var(--theme-primary, #1a1a1a)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
