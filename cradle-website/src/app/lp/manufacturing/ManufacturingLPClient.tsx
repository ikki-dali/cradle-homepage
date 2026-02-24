"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { motion } from "framer-motion";

const subsidyPoints = [
  {
    metric: "75%",
    label: "経費助成率",
    description: "中小企業の場合、研修にかかった費用の75%が国から助成されます。",
  },
  {
    metric: "50万円",
    label: "1人あたり最大",
    description: "研修時間に応じて、社員1人あたり最大50万円の経費助成を受けられます。",
  },
  {
    metric: "960円/h",
    label: "賃金助成",
    description: "研修中の賃金も、1時間あたり960円が別途助成されます。",
  },
];

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "在庫管理がExcel頼みで限界",
    description: "月末の棚卸しに丸一日。在庫数の不一致が日常的に発生し、欠品や過剰在庫で利益を圧迫している。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "見積作成に時間がかかりすぎる",
    description: "過去の見積を探して、材料費を調べて、手計算で…。1件の見積に30分以上かかり、対応スピードで他社に負ける。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "ベテランの知識が属人化している",
    description: "「あの人に聞かないとわからない」が日常。退職・異動でノウハウが消失するリスクを常に抱えている。",
  },
];

const results = [
  {
    metric: "70%",
    label: "在庫管理工数を削減",
    description: "AIがリアルタイムで在庫を自動集計。棚卸しの手間を大幅に圧縮し、欠品・過剰在庫を防止。",
  },
  {
    metric: "1/5",
    label: "見積作成時間を短縮",
    description: "過去データと材料単価をAIが自動参照。条件入力だけで見積書を即座に生成。",
  },
  {
    metric: "80%",
    label: "属人化業務を標準化",
    description: "ベテランの判断ロジックをAIで体系化。誰でも同じ品質で業務を遂行できる体制に。",
  },
];

const solutions = [
  {
    number: "01",
    title: "在庫管理の自動化",
    description: "入出庫データをAIがリアルタイムで集計・分析。適正在庫を自動で算出し、発注タイミングも通知します。月末の棚卸しに丸一日かけていた時間を大幅に削減できます。",
    before: "Excel手入力、月末に丸一日かけて棚卸し",
    after: "AIがリアルタイム管理、発注も自動通知",
  },
  {
    number: "02",
    title: "見積書の自動生成",
    description: "過去の見積実績と最新の材料単価データベースをAIが自動参照。条件を入力するだけで、適正価格の見積書を即座に生成します。対応スピードで競合に勝てるようになります。",
    before: "過去データを手で検索、30分以上かけて手計算",
    after: "条件入力だけで過去実績ベースの見積を即生成",
  },
  {
    number: "03",
    title: "受発注業務の効率化",
    description: "FAX・メール・電話で届く注文内容をAIが自動で読み取り、基幹システムに自動入力。転記ミスゼロ、二重入力ゼロを実現します。",
    before: "FAX・メールの注文を手入力で転記",
    after: "AIがデータ自動読み取り、転記ミスゼロに",
  },
  {
    number: "04",
    title: "ナレッジの見える化",
    description: "ベテラン社員の頭の中にしかないノウハウを、AIを使って業務マニュアル・判断基準として体系化。誰でもアクセスでき、新人教育の時間も大幅に短縮します。",
    before: "ベテランの頭の中にしかないノウハウ",
    after: "AIで体系化、誰でもアクセス可能に",
  },
];

const flow = [
  {
    step: 1,
    title: "無料ヒアリング",
    description: "貴社の業務フロー、現在の課題をお聞かせください。助成金の活用可否もこの場で確認します。",
    duration: "30分",
  },
  {
    step: 2,
    title: "診断レポート＋研修プランのご提示",
    description: "どの業務にAIを入れれば最も効果が出るか、具体的にレポート化。助成金申請に必要な研修計画も同時に策定します。",
    duration: "1週間以内",
  },
  {
    step: 3,
    title: "助成金申請サポート",
    description: "人材開発支援助成金の申請書類の作成をサポート。面倒な手続きは弊社にお任せください。",
    duration: "2〜3週間",
  },
  {
    step: 4,
    title: "研修実施＋導入開始",
    description: "実際の業務を題材にした実践型AI研修を実施。研修後、業務への本格導入を段階的に進めます。",
    duration: "1〜2ヶ月",
  },
];

const TIMEREX_URL = "https://timerex.net/s/ikki_y_5717/26105ec5/";

export function ManufacturingLPClient() {
  const searchParams = useSearchParams();

  useEffect(() => {
    sessionStorage.setItem("cradle_splash_seen", "true");
    document.body.style.overflow = "";
    document.body.style.touchAction = "";
  }, []);

  useEffect(() => {
    const company = searchParams.get("company") || undefined;
    const tel = searchParams.get("tel") || undefined;
    const email = searchParams.get("email") || undefined;

    fetch("/api/lp-notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page: "/lp/manufacturing",
        referrer: document.referrer || null,
        userAgent: navigator.userAgent,
        company,
        tel,
        email,
      }),
    }).catch(() => {});
  }, [searchParams]);

  return (
    <>
      {/* Hero — 助成金フック */}
      <section
        className="py-20 md:py-32 relative overflow-hidden transition-all duration-700"
        style={{ background: "var(--theme-hero-bg, linear-gradient(180deg, #ffffff 0%, #fafafa 100%))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection animateOnMount delay={0}>
            <div className="max-w-3xl mx-auto text-center">
              <span
                className="inline-block text-sm tracking-wider uppercase font-medium mb-6"
                style={{ color: "var(--theme-accent, #666666)" }}
              >
                製造業のAI活用 × 助成金活用
              </span>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6 transition-colors duration-500"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                AI研修の費用、
                <br />
                <span className="relative">
                  75%が戻ってきます
                  <span
                    className="absolute bottom-0 left-0 w-full h-1 rounded-full opacity-30"
                    style={{ background: "var(--theme-primary, #1a1a1a)" }}
                  />
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                国の「人材開発支援助成金」を活用すれば、
                <br className="hidden sm:inline" />
                社員向けAI研修の費用の<strong>75%</strong>が助成されます。
              </p>
              <p className="text-sm text-muted-foreground/70 mb-10">
                ※ 令和8年度までの期間限定制度です
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={TIMEREX_URL} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="px-8 py-4 rounded-full font-medium text-white transition-all shadow-lg hover:shadow-xl"
                    style={{ background: "var(--theme-primary, #1a1a1a)" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    助成金の活用可否を無料で確認する
                  </motion.button>
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 助成金の具体額 */}
      <section
        className="py-20 md:py-32 transition-colors duration-500"
        style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span
                className="text-sm tracking-wider uppercase font-medium"
                style={{ color: "var(--theme-accent, #666666)" }}
              >
                Subsidy
              </span>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-medium mt-4"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                人材開発支援助成金
                <br className="sm:hidden" />
                （リスキリング支援コース）
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                事業展開やDX推進を予定している中小企業が、社員にAI・デジタルスキルの研修を
                受けさせる場合に活用できる国の助成金制度です。
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {subsidyPoints.map((point, index) => (
              <FadeInSection key={point.label} delay={index * 0.1}>
                <div className="text-center">
                  <motion.div
                    className="text-5xl sm:text-6xl font-medium mb-2"
                    style={{ color: "var(--theme-primary, #1a1a1a)" }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    {point.metric}
                  </motion.div>
                  <div
                    className="text-sm font-medium mb-3"
                    style={{ color: "var(--theme-primary, #1a1a1a)" }}
                  >
                    {point.label}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {point.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.4}>
            <div className="mt-12 text-center">
              <div
                className="inline-block rounded-xl border p-6 text-left max-w-lg"
                style={{
                  borderColor: "var(--theme-card-border, #e5e5e5)",
                  background: "white",
                }}
              >
                <h3
                  className="text-sm font-medium mb-3"
                  style={{ color: "var(--theme-primary, #1a1a1a)" }}
                >
                  例）社員5名にAI研修を実施した場合
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>研修費用（5名 × 40万円）</span>
                    <span className="font-medium" style={{ color: "var(--theme-primary, #1a1a1a)" }}>200万円</span>
                  </div>
                  <div className="flex justify-between">
                    <span>経費助成（75%）</span>
                    <span className="font-medium text-emerald-600">-150万円</span>
                  </div>
                  <div
                    className="border-t pt-2 flex justify-between font-medium"
                    style={{
                      borderColor: "var(--theme-card-border, #e5e5e5)",
                      color: "var(--theme-primary, #1a1a1a)",
                    }}
                  >
                    <span>実質負担</span>
                    <span>50万円</span>
                  </div>
                  <p className="text-xs text-muted-foreground/70 pt-1">
                    ※ 別途、研修時間に応じた賃金助成（960円/h × 人数）もあります
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                こんなお悩み、ありませんか？
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {painPoints.map((point, index) => (
              <FadeInSection key={point.title} delay={index * 0.1}>
                <div
                  className="h-full rounded-xl border p-6 transition-all duration-300"
                  style={{
                    borderColor: "var(--theme-card-border, #e5e5e5)",
                    background: "white",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: "var(--theme-section-alt-bg, #f5f5f5)",
                      color: "var(--theme-primary, #1a1a1a)",
                    }}
                  >
                    {point.icon}
                  </div>
                  <h3
                    className="text-lg font-medium mb-2"
                    style={{ color: "var(--theme-primary, #1a1a1a)" }}
                  >
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section
        className="py-20 md:py-32 transition-colors duration-500"
        style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span
                className="text-sm tracking-wider uppercase font-medium"
                style={{ color: "var(--theme-accent, #666666)" }}
              >
                Results
              </span>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-medium mt-4"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                AI研修後に実現した成果
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {results.map((result, index) => (
              <FadeInSection key={result.label} delay={index * 0.1}>
                <div className="text-center">
                  <motion.div
                    className="text-5xl sm:text-6xl font-medium mb-2"
                    style={{ color: "var(--theme-primary, #1a1a1a)" }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    {result.metric}
                  </motion.div>
                  <div
                    className="text-sm font-medium mb-3"
                    style={{ color: "var(--theme-primary, #1a1a1a)" }}
                  >
                    {result.label}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {result.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Detail */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span
                className="text-sm tracking-wider uppercase font-medium"
                style={{ color: "var(--theme-accent, #666666)" }}
              >
                Solutions
              </span>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-medium mt-4"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                AI研修で身につく、具体的なスキル
              </h2>
            </div>
          </FadeInSection>

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <FadeInSection key={solution.number} delay={index * 0.1}>
                <div
                  className="rounded-xl border p-6 md:p-8 transition-all duration-300"
                  style={{
                    borderColor: "var(--theme-card-border, #e5e5e5)",
                    background: "white",
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div
                      className="text-4xl font-medium opacity-20 shrink-0"
                      style={{ color: "var(--theme-primary, #1a1a1a)" }}
                    >
                      {solution.number}
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl font-medium mb-3"
                        style={{ color: "var(--theme-primary, #1a1a1a)" }}
                      >
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {solution.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div
                          className="rounded-lg p-4"
                          style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
                        >
                          <div className="text-xs text-muted-foreground mb-1">Before</div>
                          <div className="text-sm font-medium" style={{ color: "var(--theme-primary, #1a1a1a)" }}>
                            {solution.before}
                          </div>
                        </div>
                        <div
                          className="rounded-lg p-4 border-2"
                          style={{ borderColor: "var(--theme-primary, #1a1a1a)" }}
                        >
                          <div className="text-xs mb-1" style={{ color: "var(--theme-accent, #666666)" }}>After</div>
                          <div className="text-sm font-medium" style={{ color: "var(--theme-primary, #1a1a1a)" }}>
                            {solution.after}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section
        className="py-20 md:py-32 transition-colors duration-500"
        style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span
                className="text-sm tracking-wider uppercase font-medium"
                style={{ color: "var(--theme-accent, #666666)" }}
              >
                Flow
              </span>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-medium mt-4"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                ご相談から研修開始までの流れ
              </h2>
            </div>
          </FadeInSection>

          <div className="max-w-2xl mx-auto">
            {flow.map((item, index) => (
              <FadeInSection key={item.step} delay={index * 0.15}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium text-white shrink-0"
                      style={{ background: "var(--theme-primary, #1a1a1a)" }}
                    >
                      {item.step}
                    </div>
                    {index < flow.length - 1 && (
                      <div
                        className="w-px flex-1 mt-2"
                        style={{ background: "var(--theme-card-border, #e5e5e5)" }}
                      />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        className="text-lg font-medium"
                        style={{ color: "var(--theme-primary, #1a1a1a)" }}
                      >
                        {item.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 md:py-32 relative overflow-hidden transition-all duration-700"
        style={{ background: "var(--theme-cta-bg, #1a1a1a)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeInSection>
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6"
                style={{ color: "var(--theme-cta-text, #ffffff)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                まずは30分、お話しさせてください
              </motion.h2>
              <motion.p
                className="mb-4 leading-relaxed opacity-70"
                style={{ color: "var(--theme-cta-text, #ffffff)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                「うちは助成金の対象になるのか？」
                <br className="hidden sm:inline" />
                「どの業務にAIを入れれば効果が出るのか？」
                <br className="hidden sm:inline" />
                無料診断で具体的にお答えします。
              </motion.p>
              <motion.p
                className="mb-10 text-sm leading-relaxed opacity-50"
                style={{ color: "var(--theme-cta-text, #ffffff)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                ※ 無理な営業は一切いたしません
              </motion.p>
              <motion.div
                className="flex flex-col gap-4 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a href={TIMEREX_URL} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="px-10 py-4 rounded-full font-medium transition-all border-2"
                    style={{
                      borderColor: "var(--theme-cta-text, #ffffff)",
                      color: "var(--theme-cta-text, #ffffff)",
                      background: "transparent",
                    }}
                    whileHover={{
                      scale: 1.05,
                      background: "var(--theme-cta-text, #ffffff)",
                      color: "var(--theme-primary, #1a1a1a)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    無料相談の日程を選ぶ
                  </motion.button>
                </a>
                <Link href="/contact">
                  <span
                    className="text-sm underline underline-offset-4 opacity-60 hover:opacity-100 transition-opacity"
                    style={{ color: "var(--theme-cta-text, #ffffff)" }}
                  >
                    日程が合わない場合はこちらからご連絡ください
                  </span>
                </Link>
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
