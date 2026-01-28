import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services";
import { ServicePageClient } from "./ServicePageClient";

// 動的メタデータ生成：サービスごとにtitle/descriptionを設定
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "サービスが見つかりません" };
  }

  return {
    title: `${service.title} - ${service.lead}`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Cradle`,
      description: service.description,
    },
  };
}

// 静的生成用：すべてのサービスページをビルド時に生成
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}
