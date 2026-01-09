import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サービス - AI・DX支援、法人リスキリング、受託開発",
  description:
    "Cradleが提供するサービス一覧。AI・DX支援、法人リスキリング支援、受託開発、ホームページ制作など、企業のデジタル変革を総合的にサポートします。",
  openGraph: {
    title: "サービス | Cradle",
    description: "AI・DX支援から受託開発まで、企業のデジタル変革を総合的にサポート",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

