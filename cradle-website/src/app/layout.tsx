import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TransitionProvider, PageTransitionProvider } from "@/components/layout/PageTransitionProvider";
import { SplashProvider } from "@/components/splash/SplashContext";
import SplashScreen from "@/components/splash/SplashScreen";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crdl.co.jp"),
  title: {
    default: "Cradle | 構想から定着まで。本気で伴走するAI導入パートナー",
    template: "%s | Cradle",
  },
  description:
    "Cradleは、「何から始めればいいかわからない」という企業に寄り添い、AI導入の構想から社内定着まで、導入して終わりではなく、使いこなせるようになるまで徹底的に伴走いたします。",
  keywords: [
    "AI導入",
    "DX支援",
    "AI研修",
    "リスキリング",
    "受託開発",
    "ホームページ制作",
    "業務効率化",
    "中小企業",
    "東京",
    "クレイドル",
  ],
  authors: [{ name: "クレイドル株式会社" }],
  creator: "クレイドル株式会社",
  publisher: "クレイドル株式会社",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Cradle | 構想から定着まで。本気で伴走するAI導入パートナー",
    description:
      "Cradleは、「何から始めればいいかわからない」という企業に寄り添い、AI導入の構想から社内定着まで徹底的に伴走いたします。",
    type: "website",
    locale: "ja_JP",
    siteName: "Cradle",
    url: "https://crdl.co.jp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cradle | 構想から定着まで。本気で伴走するAI導入パートナー",
    description: "AI導入の構想から社内定着まで徹底的に伴走いたします。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Consoleの認証コードがあれば追加
    // google: "your-google-verification-code",
  },
};

// 構造化データ（JSON-LD）
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "クレイドル株式会社",
  alternateName: "Cradle",
  url: "https://crdl.co.jp",
  logo: "https://crdl.co.jp/logo.png",
  description:
    "AI導入の構想から社内定着まで、導入して終わりではなく、使いこなせるようになるまで徹底的に伴走いたします。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "佐野2-17-6-101",
    addressLocality: "足立区",
    addressRegion: "東京都",
    postalCode: "121-0053",
    addressCountry: "JP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+81-80-9986-2741",
    contactType: "customer service",
    availableLanguage: "Japanese",
  },
  sameAs: [],
  foundingDate: "2017",
  founder: {
    "@type": "Person",
    name: "竹越茜",
  },
  areaServed: "JP",
  serviceType: [
    "AI導入支援",
    "DX支援",
    "法人リスキリング支援",
    "受託開発",
    "ホームページ制作",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <ThemeProvider>
          <SplashProvider>
            <SplashScreen />
            <TransitionProvider>
              <Header />
              <PageTransitionProvider>
                <main className="min-h-screen pt-16 md:pt-20">{children}</main>
                <Footer />
              </PageTransitionProvider>
            </TransitionProvider>
          </SplashProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
