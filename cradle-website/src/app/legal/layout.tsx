import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description:
    "クレイドル株式会社の特定商取引法に基づく表記ページです。販売者情報、支払方法、返品・キャンセルについてなどを記載しています。",
  openGraph: {
    title: "特定商取引法に基づく表記 | Cradle",
    description: "クレイドル株式会社の特定商取引法に基づく表記",
  },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

