"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { CTASection } from "@/components/sections/CTASection";
import { Service, services } from "@/lib/services";

interface ServicePageClientProps {
  service: Service;
}

export function ServicePageClient({ service }: ServicePageClientProps) {
  // Find prev/next services for navigation
  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService =
    currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <>
      {/* Hero Section */}
      <section
        className="py-20 md:py-32 transition-colors duration-500 relative overflow-hidden"
        style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "var(--theme-primary, #1a1a1a)", filter: "blur(100px)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection animateOnMount delay={0}>
              <div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  サービス一覧に戻る
                </Link>
                <span
                  className="text-sm font-medium mb-2 block"
                  style={{ color: "var(--theme-accent, #666666)" }}
                >
                  Service
                </span>
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 transition-colors duration-500"
                  style={{ color: "var(--theme-primary, #1a1a1a)" }}
                >
                  {service.title}
                </h1>
                <p className="text-xl text-foreground/90 mb-4">{service.lead}</p>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {service.fullDescription}
                </p>
              </div>
            </FadeInSection>
            <FadeInSection animateOnMount delay={0.2}>
              <motion.div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{ background: "var(--theme-primary, #1a1a1a)" }}
                />
              </motion.div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2
                className="text-2xl sm:text-3xl font-medium mb-4"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                主な支援内容
              </h2>
              <p className="text-muted-foreground">
                お客様の課題に合わせた最適なソリューションを提供します
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <FadeInSection key={feature} delay={index * 0.1}>
                <motion.div
                  className="p-6 rounded-xl border transition-all duration-300"
                  style={{
                    borderColor: "var(--theme-card-border, #e5e5e5)",
                    background: "white",
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 40px -12px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: "var(--theme-section-alt-bg, #f5f5f5)",
                    }}
                  >
                    <svg
                      className="w-6 h-6"
                      style={{ color: "var(--theme-accent, #666666)" }}
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
                  </div>
                  <h3 className="font-medium text-foreground">{feature}</h3>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section
        className="py-20 md:py-32 transition-colors duration-500"
        style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <div>
                <h2
                  className="text-2xl sm:text-3xl font-medium mb-8"
                  style={{ color: "var(--theme-primary, #1a1a1a)" }}
                >
                  こんな方におすすめ
                </h2>
                <ul className="space-y-4">
                  {service.targetAudience.map((audience, index) => (
                    <motion.li
                      key={audience}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: "var(--theme-primary, #1a1a1a)",
                        }}
                      >
                        <svg
                          className="w-4 h-4 text-white"
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
                      </div>
                      <span className="text-foreground/90">{audience}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div
                className="p-8 rounded-2xl"
                style={{ background: "white" }}
              >
                <h3
                  className="text-xl font-medium mb-6"
                  style={{ color: "var(--theme-primary, #1a1a1a)" }}
                >
                  導入効果
                </h3>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: "var(--theme-accent, #666666)",
                        }}
                      />
                      <span className="text-foreground/90">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2
                className="text-2xl sm:text-3xl font-medium mb-4"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                ご依頼の流れ
              </h2>
              <p className="text-muted-foreground">
                まずはお気軽にご相談ください
              </p>
            </div>
          </FadeInSection>

          {/* Desktop Flow - Horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line - positioned based on circle size */}
              <div 
                className="absolute left-0 right-0 h-1"
                style={{ 
                  background: "var(--theme-card-border, #e5e5e5)",
                  top: service.flow.length <= 5 ? "64px" : "52px"
                }}
              />
              
              <div 
                className="grid gap-3 items-stretch"
                style={{ 
                  gridTemplateColumns: `repeat(${service.flow.length}, minmax(0, 1fr))`,
                }}
              >
                {service.flow.map((step, index) => {
                  // ステップ数に応じてサイズを調整
                  const isCompact = service.flow.length > 5;
                  const circleSize = isCompact ? "w-[104px] h-[104px]" : "w-[120px] h-[120px]";
                  const numberSize = isCompact ? "text-2xl" : "text-3xl";
                  const arrowTop = isCompact ? "52px" : "60px";
                  const cardHeight = isCompact ? "200px" : "220px";
                  
                  return (
                    <FadeInSection key={step.step} delay={index * 0.08} className="h-full">
                      <div className="relative h-full flex flex-col">
                        {/* Step Circle with Number */}
                        <div className="flex justify-center mb-6">
                          <motion.div
                            className={`relative z-10 ${circleSize} rounded-full flex flex-col items-center justify-center text-white shadow-xl`}
                            style={{
                              background: `linear-gradient(135deg, var(--theme-primary, #1a1a1a) 0%, var(--theme-accent, #444444) 100%)`,
                            }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-[10px] opacity-70 mb-0.5">STEP</span>
                            <span className={`${numberSize} font-bold`}>{step.step}</span>
                          </motion.div>
                          
                          {/* Arrow to next step */}
                          {index < service.flow.length - 1 && (
                            <motion.div
                              className="absolute -right-1 transform -translate-y-1/2 z-20"
                              style={{ top: arrowTop }}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                              viewport={{ once: true }}
                            >
                              <svg
                                className={isCompact ? "w-6 h-6" : "w-7 h-7"}
                                style={{ color: "var(--theme-primary, #1a1a1a)" }}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                              </svg>
                            </motion.div>
                          )}
                        </div>
                        
                        {/* Content Card */}
                        <motion.div
                          className={`${isCompact ? "p-4" : "p-5"} rounded-2xl text-center flex flex-col`}
                          style={{
                            background: "var(--theme-section-alt-bg, #f5f5f5)",
                            height: cardHeight,
                          }}
                          whileHover={{ y: -4, boxShadow: "0 12px 40px -12px rgba(0,0,0,0.15)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <h3
                            className={`${isCompact ? "text-base" : "text-lg"} font-medium mb-2`}
                            style={{ color: "var(--theme-primary, #1a1a1a)" }}
                          >
                            {step.title}
                          </h3>
                          <p className={`${isCompact ? "text-xs" : "text-sm"} text-muted-foreground leading-relaxed flex-1 overflow-hidden`}>
                            {step.description}
                          </p>
                          <div className="mt-3 flex-shrink-0">
                            <span
                              className="inline-block text-xs font-medium rounded-full"
                              style={{ 
                                background: "var(--theme-primary, #1a1a1a)",
                                color: "white",
                                padding: isCompact ? "5px 12px" : "6px 16px",
                                minWidth: "70px",
                              }}
                            >
                              {step.duration || "－"}
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </FadeInSection>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Flow - Vertical */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical Connection Line */}
              <div 
                className="absolute left-6 top-0 bottom-0 w-0.5"
                style={{ background: "var(--theme-card-border, #e5e5e5)" }}
              />
              
              <div className="space-y-6">
                {service.flow.map((step, index) => (
                  <FadeInSection key={step.step} delay={index * 0.1}>
                    <div className="relative flex gap-6">
                      {/* Step Circle */}
                      <div className="relative z-10 flex-shrink-0">
                        <motion.div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                          style={{
                            background: `linear-gradient(135deg, var(--theme-primary, #1a1a1a) 0%, var(--theme-accent, #444444) 100%)`,
                          }}
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          {step.step}
                        </motion.div>
                        
                        {/* Arrow down to next step */}
                        {index < service.flow.length - 1 && (
                          <motion.div
                            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                            initial={{ opacity: 0, y: -5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2, duration: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <svg
                              className="w-5 h-5"
                              style={{ color: "var(--theme-primary, #1a1a1a)" }}
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z" />
                            </svg>
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Content Card */}
                      <motion.div
                        className="flex-1 p-5 rounded-xl"
                        style={{
                          background: "var(--theme-section-alt-bg, #f5f5f5)",
                        }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3
                          className="text-lg font-medium mb-2"
                          style={{ color: "var(--theme-primary, #1a1a1a)" }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {step.description}
                        </p>
                        <span
                          className="inline-block text-xs font-medium rounded-full"
                          style={{ 
                            background: "var(--theme-primary, #1a1a1a)",
                            color: "white",
                            padding: "4px 12px",
                            minWidth: "70px",
                          }}
                        >
                          {step.duration || "－"}
                        </span>
                      </motion.div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-20 md:py-32 transition-colors duration-500"
        style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2
                className="text-2xl sm:text-3xl font-medium mb-4"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                よくあるご質問
              </h2>
            </div>
          </FadeInSection>

          <div className="space-y-4">
            {service.faq.map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <FAQItem question={item.question} answer={item.answer} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="py-16 border-t" style={{ borderColor: "var(--theme-card-border, #e5e5e5)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {prevService && (
              <Link href={`/services/${prevService.slug}`} className="group">
                <motion.div
                  className="p-6 rounded-xl border transition-all duration-300"
                  style={{
                    borderColor: "var(--theme-card-border, #e5e5e5)",
                    background: "white",
                  }}
                  whileHover={{
                    x: -4,
                    boxShadow: "0 12px 40px -12px rgba(0,0,0,0.1)",
                  }}
                >
                  <span className="text-sm text-muted-foreground">前のサービス</span>
                  <div className="flex items-center gap-2 mt-1">
                    <svg
                      className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                      style={{ color: "var(--theme-accent, #666666)" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    <span
                      className="font-medium"
                      style={{ color: "var(--theme-primary, #1a1a1a)" }}
                    >
                      {prevService.title}
                    </span>
                  </div>
                </motion.div>
              </Link>
            )}
            {nextService && (
              <Link
                href={`/services/${nextService.slug}`}
                className={`group ${!prevService ? "md:col-start-2" : ""}`}
              >
                <motion.div
                  className="p-6 rounded-xl border transition-all duration-300 text-right"
                  style={{
                    borderColor: "var(--theme-card-border, #e5e5e5)",
                    background: "white",
                  }}
                  whileHover={{
                    x: 4,
                    boxShadow: "0 12px 40px -12px rgba(0,0,0,0.1)",
                  }}
                >
                  <span className="text-sm text-muted-foreground">次のサービス</span>
                  <div className="flex items-center justify-end gap-2 mt-1">
                    <span
                      className="font-medium"
                      style={{ color: "var(--theme-primary, #1a1a1a)" }}
                    >
                      {nextService.title}
                    </span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      style={{ color: "var(--theme-accent, #666666)" }}
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
                </motion.div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}

// FAQ Item Component with Accordion
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <motion.details
      className="group rounded-xl overflow-hidden"
      style={{ background: "white" }}
    >
      <summary
        className="flex items-center justify-between p-6 cursor-pointer list-none"
      >
        <span
          className="font-medium pr-4"
          style={{ color: "var(--theme-primary, #1a1a1a)" }}
        >
          {question}
        </span>
        <motion.svg
          className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180"
          style={{ color: "var(--theme-accent, #666666)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </summary>
      <div className="px-6 pb-6">
        <p className="text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </motion.details>
  );
}

