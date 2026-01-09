"use client";

import { FadeInSection } from "@/components/ui/FadeInSection";

const sections = [
  {
    title: "はじめに",
    content: `本利用規約（以下、「本規約」といいます。）は、クレイドル株式会社（以下、「当社」といいます。）の提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。本サービスを利用される方（以下、「利用者」といいます。）には、本規約に従って本サービスを利用していただくことが必要です。`,
  },
  {
    title: "適用範囲",
    content: `本規約は、利用者が本サービスを利用する際の一切の行為に適用されます。`,
  },
  {
    title: "利用者の同意",
    content: `利用者は、本サービスを利用することにより、本規約に同意したものとみなされます。本規約に同意できない場合、利用者は本サービスの利用を中止してください。`,
  },
  {
    title: "個人情報保護方針",
    content: `当社は、個人情報保護理念と自ら定めた行動規範に基づき、社会的使命を十分に認識し、本人の権利の保護、個人情報に関する法規制等を遵守致します。また、以下に示す方針を具現化するための個人情報保護マネジメントシステムを構築し、最新のIT技術の動向、社会的要請の変化、経営環境の変動等を常に認識しながら、その継続的改善に、全社を挙げて取り組むことをここに宣言致します。

（１）当社は、事業の目的に適切な個人情報の取得・利用及び提供を行い、特定された利用目的の達成に必要な範囲を超えた個人情報の取扱いを行ないません。また、そのための措置を講じます。

（２）当社は個人情報の取扱いに関する法令、国が定める指針その他の規範を遵守致します。

（３）当社は個人情報の漏えい、滅失、き損などのリスクに対しては、合理的な安全対策を講じて防止する規程、体制を構築し、継続的に向上させていきます。また、万一の際には速やかに是正措置を講じます。

（４）当社は個人情報取扱いに関する苦情及び相談に対しては、迅速かつ誠実に対応致します。

（５）個人情報保護マネジメントシステムは、当社を取り巻く環境の変化と実情を踏まえ、適時・適切に見直して継続的に改善をはかっていきます。`,
  },
  {
    title: "個人情報の利用目的",
    content: `当社にご提供いただいた個人情報は、以下の目的で利用いたします。なお、別途利用目的について同意いただいた場合には、その利用目的の範囲内で利用させていただきます。（利用目的の達成に必要な範囲内で、当社より委託先に提供することがあります）

（１）お客様に関する個人情報
AI・DX支援、法人リスキリング支援、受託開発、ホームページ制作等のサービスの提供、情報提供等のため

（２）当社に対するお問い合わせを頂いた方に関する個人情報
お問い合わせ対応、その管理、関連資料の送付等のため

（３）当社従業者に関する個人情報
人事労務管理、業務管理、健康管理、セキュリティ管理等のため

（４）当社従業者及びその扶養親族に関する個人番号及び特定個人情報
法令等で定められた個人番号関係事務及び「行政手続きにおける特定の個人を識別するための番号の利用等に関する法律」（マイナンバー法）に定める関連事務等のため

（５）採用応募に関する個人情報
採用業務のため`,
  },
  {
    title: "禁止行為",
    content: `利用者は、本サービスの利用にあたり、以下の行為を禁止します。

（１）法令または公序良俗に反する行為
（２）犯罪行為に関連する行為
（３）当社、他の利用者、または第三者の権利を侵害する行為
（４）当社の運営を妨害する行為
（５）本サービスに関連して、虚偽の情報を提供する行為
（６）その他、当社が不適切と判断する行為`,
  },
  {
    title: "著作権等知的財産権",
    content: `本サービス上で提供される情報、画像、テキスト等の知的財産権は、当社または第三者に帰属します。利用者は、これらの知的財産権を侵害する行為を禁止します。`,
  },
  {
    title: "免責事項",
    content: `当社は、本サービスの提供に関して、利用者に対して一切の保証を行いません。利用者が本サービスを利用して損害を被った場合、当社は一切の責任を負わないものとします。また、当社は、利用者による本サービスの利用によって生じた第三者との間の紛争について、一切関与せず、その責任を負わないものとします。`,
  },
  {
    title: "利用規約の変更",
    content: `当社は、利用者に通知することなく、本規約を変更することがあります。本規約の変更は、当社が変更後の利用規約を本サービス上で公開した時点から効力を生じるものとします。利用者は、定期的に本規約を確認するものとし、本規約の変更に同意できない場合、直ちに本サービスの利用を中止してください。`,
  },
  {
    title: "準拠法および管轄裁判所",
    content: `本規約の解釈にあたっては、日本の法令を準拠法とします。また、本サービスに関して紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。`,
  },
  {
    title: "お問い合わせ窓口",
    content: `個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。

クレイドル株式会社
住所：東京都足立区佐野2-17-6-101
電話番号：03-5697-8686
メールアドレス：info@crdl.co.jp`,
  },
];

export default function PrivacyPage() {
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
                プライバシーポリシー・利用規約
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                個人情報保護方針およびサービス利用規約
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection animateOnMount delay={0.1}>
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h2
                    className="text-xl sm:text-2xl font-medium transition-colors duration-500"
                    style={{ color: "var(--theme-primary, #1a1a1a)" }}
                  >
                    {section.title}
                  </h2>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Last Updated */}
          <FadeInSection animateOnMount delay={0.2}>
            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                最終更新日：2025年1月9日
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}

