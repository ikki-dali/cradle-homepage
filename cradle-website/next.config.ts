import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages用の設定
  output: "standalone",
  
  // 画像最適化（Cloudflare Pagesでは無効化）
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
