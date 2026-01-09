import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ - AI導入・DXのご相談",
  description:
    "Cradleへのお問い合わせはこちら。AI導入、DX支援、受託開発、ホームページ制作など、まずはお気軽にご相談ください。",
  openGraph: {
    title: "お問い合わせ | Cradle",
    description: "AI導入・DXのご相談はお気軽にどうぞ",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

