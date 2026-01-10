"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section 
        className="py-20 md:py-32 transition-colors duration-500"
        style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection animateOnMount delay={0}>
            <div className="max-w-3xl">
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 transition-colors duration-500"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                サービス
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                お客様の課題に合わせた最適なソリューションを提供します。
                導入して終わりではなく、成果が出るまで徹底的に伴走いたします。
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <FadeInSection
                key={service.id}
                animateOnMount={index < 2}
                delay={index < 2 ? 0.3 + index * 0.15 : 0}
              >
                <Link href={`/services/${service.slug}`} className="block group">
                <div
                  id={service.id}
                  className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <motion.div 
                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div 
                        className="absolute inset-0 opacity-20 transition-opacity duration-300 group-hover:opacity-10"
                      style={{ background: "var(--theme-primary, #1a1a1a)" }}
                    />
                    {/* Number overlay */}
                    <div className="absolute top-6 left-6">
                        <span className="text-6xl font-bold opacity-30 text-white">
                        0{index + 1}
                      </span>
                    </div>
                      {/* View More Button */}
                      <div className="absolute bottom-6 right-6">
                        <motion.div
                          className="w-14 h-14 rounded-full flex items-center justify-center text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: "rgba(0,0,0,0.5)" }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.div>
                      </div>
                  </motion.div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <span 
                      className="text-sm transition-colors duration-500"
                      style={{ color: "var(--theme-accent, #666666)" }}
                    >
                      Service 0{index + 1}
                    </span>
                    <h2 
                        className="text-2xl sm:text-3xl font-medium mt-2 mb-6 transition-colors duration-500 group-hover:opacity-70"
                      style={{ color: "var(--theme-primary, #1a1a1a)" }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-lg text-foreground/90 mb-4">
                      {service.lead}
                    </p>
                      <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>
                    
                      {/* Features Preview */}
                    <div 
                        className="rounded-lg p-6 transition-colors duration-500 mb-6"
                        style={{
                          background: "var(--theme-section-alt-bg, #f5f5f5)",
                        }}
                    >
                      <h3 className="text-sm font-medium mb-4 text-muted-foreground">
                        主な支援内容
                      </h3>
                      <ul className="space-y-3">
                          {service.features.slice(0, 3).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-foreground/90"
                          >
                            <svg
                              className="w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-500"
                                style={{
                                  color: "var(--theme-accent, #666666)",
                                }}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      </div>

                      {/* View Details Link */}
                      <div
                        className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                        style={{ color: "var(--theme-primary, #1a1a1a)" }}
                      >
                        詳しく見る
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
