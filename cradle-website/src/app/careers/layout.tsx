import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "採用情報 - 一緒に日本を強くする仲間を募集",
  description:
    "クレイドル株式会社の採用情報。AIで日本の中小企業を強くする仲間を募集しています。募集職種や企業文化をご紹介します。",
  openGraph: {
    title: "採用情報 | Cradle",
    description: "一緒に日本を強くする仲間を募集しています",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

