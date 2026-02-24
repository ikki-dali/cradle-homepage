import type { Metadata } from "next";
import { Suspense } from "react";
import { RealEstateLPClient } from "./RealEstateLPClient";

export const metadata: Metadata = {
  title: "不動産業界のAI活用事例 | Cradle",
  description:
    "反響対応の自動化、追客の最適化、物件提案の自動化など、不動産業界でのAI活用事例をご紹介します。営業1人あたりの成約数1.5倍を実現した方法とは。",
  openGraph: {
    title: "不動産業界のAI活用事例 | Cradle",
    description:
      "反響対応の自動化、追客の最適化、物件提案の自動化など、不動産業界でのAI活用事例をご紹介します。",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RealEstateLPPage() {
  return (
    <Suspense>
      <RealEstateLPClient />
    </Suspense>
  );
}
