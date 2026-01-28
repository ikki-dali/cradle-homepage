"use client";

import { FadeInSection } from "@/components/ui/FadeInSection";
import { CTASection } from "@/components/sections/CTASection";

const companyInfo = [
  { label: "会社名", value: "クレイドル株式会社" },
  { label: "所在地", value: "東京都足立区佐野2-17-6-101" },
  { label: "設立", value: "2017年" },
  { label: "代表者", value: "竹越茜" },
  { label: "電話番号", value: "070-2368-0098" },
  {
    label: "事業内容",
    value: "AI・DX支援、法人リスキリング支援、受託開発、ホームページ制作",
  },
];

const missionText = `「やらなくてもいいこと」に、どれだけの時間が奪われているか。

日本の中小企業は、技術も経験も持っている。
しかし、その力が十分に発揮されていない。
書類作成、手作業、非効率な業務——
やるべきことに集中できない環境が、日々、会社を弱くしている。

私たちCradleは、AIの力で無駄を削り、やるべきことだけが残る会社をつくります。

Cradleは英語で「ゆりかご」を意味します。
ゆりかごは、大切なものを受け止め、守り、育てる場所。
しかし、いつまでもそこに留めておく場所ではありません。
十分に育ったら、外の世界へ送り出す。
それがゆりかごの本当の役割です。

私たちも同じです。
最初は、手に余る仕事を全て引き受けます。
AIの導入も、業務改善も、何から始めればいいかわからないことも。
しかし、そこがゴールではありません。

一緒に走りながら、少しずつ力をつけてもらう。
AIを自らの手で使いこなし、自分たちで戦える会社になってもらう。
私たちの手を離れても、時代の流れに耐えられる強さを持った会社になってもらう。
それが、Cradleの目指す姿です。

そうして強くなった会社が、一社、また一社と増えていけば、日本はもっと強くなる。
私たちは、その未来を信じています。`;

export default function AboutPage() {
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
                会社概要
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cradleは、AIの力で日本の中小企業を強くするパートナーです。
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeInSection animateOnMount delay={0.5}>
              <div className="text-center mb-12">
                <span 
                  className="text-sm tracking-wider uppercase transition-colors duration-500"
                  style={{ color: "var(--theme-accent, #666666)" }}
                >
                  Mission
                </span>
              </div>
            </FadeInSection>

            <FadeInSection animateOnMount delay={0.6}>
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center leading-tight mb-16 transition-colors duration-500"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                AIで無駄を削り、
                <br />
                日本をより強くする。
              </h2>
            </FadeInSection>

            <FadeInSection>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {missionText.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section 
        className="py-20 md:py-32 transition-colors duration-500"
        style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 
              className="text-2xl sm:text-3xl font-medium mb-12 transition-colors duration-500"
              style={{ color: "var(--theme-primary, #1a1a1a)" }}
            >
              会社情報
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div 
              className="bg-white rounded-lg overflow-hidden transition-all duration-500"
              style={{ borderColor: "var(--theme-card-border, #e5e5e5)", borderWidth: "1px" }}
            >
              <dl className="divide-y divide-border">
                {companyInfo.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 p-4 sm:p-6"
                  >
                    <dt className="text-sm text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="sm:col-span-2 text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
