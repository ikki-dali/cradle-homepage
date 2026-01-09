import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "実績・事例 - AI導入・DX支援の成功事例",
  description:
    "Cradleが手がけたAI導入・DX支援、受託開発、ホームページ制作などの実績・事例をご紹介。様々な業界での成功事例をご覧ください。",
  openGraph: {
    title: "実績・事例 | Cradle",
    description: "AI導入・DX支援の成功事例をご紹介",
  },
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

