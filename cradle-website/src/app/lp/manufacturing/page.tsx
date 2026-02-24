import type { Metadata } from "next";
import { Suspense } from "react";
import { ManufacturingLPClient } from "./ManufacturingLPClient";

export const metadata: Metadata = {
  title: "製造業のAI活用事例 | 助成金で研修費用75%カバー | Cradle",
  description:
    "在庫管理・見積作成・受発注の自動化など、製造業でのAI活用事例をご紹介。人材開発支援助成金を活用すれば、社員1人あたり最大50万円の助成。研修費用の75%が戻ってきます。",
  openGraph: {
    title: "製造業のAI活用事例 | 助成金で研修費用75%カバー | Cradle",
    description:
      "製造業の手作業をAIで自動化。助成金を活用すれば研修費用の75%が国から助成されます。",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ManufacturingLPPage() {
  return (
    <Suspense>
      <ManufacturingLPClient />
    </Suspense>
  );
}
