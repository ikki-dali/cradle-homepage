import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, GraduationCap, Code, Monitor } from "lucide-react";
import ScrollFadeIn from "@/components/layout/ScrollFadeIn";

const services = [
  {
    title: "AI・DX支援",
    description: "現状分析から導入、定着まで一気通貫で支援します。",
    icon: Brain,
    href: "/services#dx",
  },
  {
    title: "法人リスキリング支援",
    description: "「AIを使いこなす」ための実践的な研修を提供します。",
    icon: GraduationCap,
    href: "/services#reskilling",
  },
  {
    title: "受託開発",
    description: "業務効率化ツールやシステムをオーダーメイドで開発。",
    icon: Code,
    href: "/services#dev",
  },
  {
    title: "ホームページ制作",
    description: "集客とビジネスの成長につながるWebサイトを制作。",
    icon: Monitor,
    href: "/services#web",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
            <p className="text-gray-600">提供サービス</p>
          </div>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollFadeIn key={service.title} className={`delay-[${index * 100}ms]`}>
              <Link href={service.href} className="block group h-full">
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="mb-2">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    <div className="flex items-center text-sm font-medium text-gray-900 mt-4 group-hover:underline">
                      詳しく見る <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

