import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 - AIで日本をより強くする",
  description:
    "クレイドル株式会社の会社概要・企業理念。「AIで無駄を削り、日本をより強くする」をミッションに、中小企業のAI導入・DX推進を支援しています。",
  openGraph: {
    title: "会社概要 | Cradle",
    description: "AIで無駄を削り、日本をより強くする。クレイドル株式会社の企業理念と会社情報",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

