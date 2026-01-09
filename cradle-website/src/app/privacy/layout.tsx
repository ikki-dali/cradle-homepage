import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー・利用規約",
  description:
    "クレイドル株式会社のプライバシーポリシーおよび利用規約ページです。個人情報保護方針、利用目的、サービス利用条件などを記載しています。",
  openGraph: {
    title: "プライバシーポリシー・利用規約 | Cradle",
    description: "クレイドル株式会社の個人情報保護方針およびサービス利用規約",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

