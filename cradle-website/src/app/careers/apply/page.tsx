"use client";

import { useState } from "react";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  phone: string;
  applicationType: string;
  desiredPosition: string;
  selfIntroduction: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  applicationType?: string;
}

const applicationTypes = [
  { id: "new-graduate", label: "新卒採用" },
  { id: "mid-career", label: "中途採用" },
  { id: "intern", label: "インターン" },
  { id: "part-time", label: "アルバイト" },
  { id: "other", label: "その他" },
];

export default function CareersApplyPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    applicationType: "",
    desiredPosition: "",
    selfIntroduction: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください";
    }
    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "有効なメールアドレスを入力してください";
    }
    if (!formData.applicationType) {
      newErrors.applicationType = "応募区分を選択してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwdwKzFPUIqbeRovFLZRSXb5BIZ9lGPwPmcqnZJ4erYKL-UXg0UTs3AZ1FygGKtVCxu/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, formType: "career" }),
        }
      );

      // no-corsモードではresponseの中身は読めないが、送信自体は成功
      setIsSubmitted(true);
    } catch (error) {
      console.error("送信エラー:", error);
      alert("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 md:py-32 min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection animateOnMount delay={0}>
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <svg
                  className="w-16 h-16 mx-auto transition-colors duration-500"
                  style={{ color: "var(--theme-accent, #22c55e)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h1
                className="text-2xl sm:text-3xl font-medium mb-4 transition-colors duration-500"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                ご応募を受け付けました
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                ご応募いただきありがとうございます。
                <br />
                内容を確認の上、担当者よりご連絡させていただきます。
                <br />
                今しばらくお待ちくださいませ。
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    );
  }

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
                採用エントリー
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cradleで一緒に働きませんか？
                <br className="hidden sm:inline" />
                新卒・中途・インターンなど、どなたでもご応募いただけます。
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection animateOnMount delay={0.3}>
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">
                    お名前
                    <span className="text-destructive ml-1">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="山田 太郎"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    メールアドレス
                    <span className="text-destructive ml-1">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    電話番号
                    <span className="text-muted-foreground text-xs ml-2">任意</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="090-0000-0000"
                  />
                </div>

                {/* Application Type */}
                <div className="space-y-2">
                  <Label htmlFor="applicationType">
                    応募区分
                    <span className="text-destructive ml-1">*</span>
                  </Label>
                  <select
                    id="applicationType"
                    name="applicationType"
                    value={formData.applicationType}
                    onChange={handleChange}
                    className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                      errors.applicationType ? "border-destructive" : "border-input"
                    }`}
                    style={{ color: formData.applicationType ? "inherit" : "#9ca3af" }}
                  >
                    <option value="">選択してください</option>
                    {applicationTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.applicationType && (
                    <p className="text-sm text-destructive">{errors.applicationType}</p>
                  )}
                </div>

                {/* Desired Position */}
                <div className="space-y-2">
                  <Label htmlFor="desiredPosition">
                    希望職種
                    <span className="text-muted-foreground text-xs ml-2">任意</span>
                  </Label>
                  <Input
                    id="desiredPosition"
                    name="desiredPosition"
                    type="text"
                    value={formData.desiredPosition}
                    onChange={handleChange}
                    placeholder="エンジニア、コンサルタント など"
                  />
                </div>

                {/* Self Introduction */}
                <div className="space-y-2">
                  <Label htmlFor="selfIntroduction">
                    自己PR・志望動機
                    <span className="text-muted-foreground text-xs ml-2">任意</span>
                  </Label>
                  <Textarea
                    id="selfIntroduction"
                    name="selfIntroduction"
                    value={formData.selfIntroduction}
                    onChange={handleChange}
                    placeholder="あなたの経験やスキル、Cradleで働きたい理由などをご自由にお書きください"
                    rows={8}
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto px-12 transition-colors duration-500"
                    style={{
                      background: "var(--theme-primary, #1a1a1a)",
                      color: "var(--theme-cta-text, #ffffff)"
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "送信中..." : "応募する"}
                  </Button>
                </div>
              </form>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Note */}
      <section
        className="py-20 md:py-32 transition-colors duration-500"
        style={{ background: "var(--theme-section-alt-bg, #f5f5f5)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl font-medium mb-6">
                ご不明な点がございましたら
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                採用に関するご質問は、お気軽にお問い合わせください。
              </p>
              <p
                className="text-2xl sm:text-3xl font-medium mb-4 transition-colors duration-500"
                style={{ color: "var(--theme-primary, #1a1a1a)" }}
              >
                070-2368-0098
              </p>
              <p className="text-sm text-muted-foreground">
                受付時間: 平日 9:00〜18:00
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
