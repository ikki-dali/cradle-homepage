import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services";
import { ServicePageClient } from "./ServicePageClient";

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
