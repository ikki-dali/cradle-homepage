"use client";

import { FadeInSection } from "@/components/ui/FadeInSection";

const legalInfo = [
  { label: "販売者名", value: "クレイドル株式会社" },
  { label: "代表責任者", value: "竹越茜" },
  { label: "住所", value: "東京都足立区佐野2-17-6-101" },
  { label: "電話番号", value: "080-9986-2741" },
  { label: "メールアドレス", value: "info@crdl.co.jp" },
  { label: "販売URL", value: "https://crdl.co.jp", isLink: true },
  { label: "支払方法", value: "銀行振込またはクレジットカード" },
  {
    label: "支払い時期",
    value: `・クレジットカード決済：ご注文時
・銀行振込：ご注文後3日以内`,
  },
  {
    label: "販売価格",
    value: `商品・サービス毎に販売価格を表示（税別）
カード決済手数料は代金に含む
申込方法：ホームページ記載の販売ページからカートシステムにて購入、もしくはメールを使用`,
  },
  {
    label: "代金以外の必要金額",
    value:
      "銀行振込に関する手数料、カード決済による分割払いの手数料は購入者の負担となります。",
  },
  {
    label: "サービス提供時期",
    value: `・チケット・ダウンロード商品の場合、カード決済の場合は当日中に、銀行振込みの場合は、入金確認後2営業日以内にチケットコードもしくはダウンロードURLを通知します。

・プログラミングツール作成の場合は実装の工数、要件、システム連動の有無等諸条件によって納期が変動するため、納期は見積もりに表記した期日に準じます。

・ホームページ等の受注制作の場合は素材・テキストデータを受領後、反映内容確定した時点で1ヶ月以内が目安となりますが、開業スケジュール等の変更、実装機能や記載内容の大幅修正・変更等が発生した場合は双方協議の上で納期を決定いたします。
（詳しくは別途ご案内いたします）`,
  },
  {
    label: "サービス提供方法",
    value: `・各種サポートのチケットについては、購入処理が完了後お客様に購入情報及びQRコードが記載されているメールが届きますので、保管のうえ弊社訪問作業実施時に提示してください。

・データのダウンロード販売については、決済後通知するURLよりダウンロードする方式となります。

・ホームページ制作・受託開発等については、納品物の引き渡しまたはサーバーへの公開をもって提供完了といたします。`,
  },
  {
    label: "返品・キャンセルについて",
    value: `・データの破損、欠陥があるなどの場合を除き返品には対応できません。

・ホームページ制作着手後、納品後のお客様のご都合によるキャンセルの返金は対応していません。

・前払い制のチケットの有効期限は購入後１年間となります。
購入後は有効期限前後に関わらずいかなる場合もキャンセル、返品には応じておりません。`,
  },
  {
    label: "クーリングオフについて",
    value:
      "通信販売はクーリングオフの適用対象外となります。ご注文前に内容をよくご確認の上、お申し込みください。",
  },
  {
    label: "表現に関する注意書き",
    value:
      "ダウンロード商品に示された表現や再現性には個人差があり、必ずしも利益や効果を保証したものではございません。",
  },
];

export default function LegalPage() {
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
                特定商取引法に基づく表記
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                特定商取引法第11条に基づく表示事項
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Legal Info Table */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection animateOnMount delay={0.1}>
            <div
              className="bg-white rounded-lg overflow-hidden transition-all duration-500"
              style={{
                borderColor: "var(--theme-card-border, #e5e5e5)",
                borderWidth: "1px",
              }}
            >
              <dl className="divide-y divide-border">
                {legalInfo.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 p-4 sm:p-6"
                  >
                    <dt className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="sm:col-span-3 text-foreground whitespace-pre-wrap">
                      {item.isLink ? (
                        <a
                          href={item.value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}

