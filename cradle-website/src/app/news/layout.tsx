import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お知らせ - 最新情報・イベント・サービス更新",
  description:
    "クレイドル株式会社からのお知らせ、イベント情報、サービス更新情報などをお届けします。",
  openGraph: {
    title: "お知らせ | Cradle",
    description: "Cradleからの最新情報・イベント・サービス更新をお届け",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

