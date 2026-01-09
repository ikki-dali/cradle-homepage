"use client";

import { TransitionLink } from "@/components/ui/TransitionLink";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showLink?: boolean;
}

export function Logo({
  className = "",
  width = 120,
  height = 48,
  showLink = true,
}: LogoProps) {
  const logoSvg = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 800 500"
      width={width}
      height={height}
      className={`transition-colors duration-500 ${className}`}
      style={{ color: "var(--theme-primary, #000000)" }}
    >
      <text 
        x="50%" 
        y="280" 
        textAnchor="middle" 
        letterSpacing="-5"
        style={{
          fontFamily: '"Century Gothic", "Futura", "Helvetica Neue", "Arial", sans-serif',
          fontWeight: "normal",
          fontSize: "200px",
          fill: "currentColor",
        }}
      >
        Cradle
      </text>
      <path 
        d="M 170 320 Q 400 460 630 320 Q 400 400 170 320 Z" 
        fill="currentColor"
      />
    </svg>
  );

  if (showLink) {
    return (
      <TransitionLink href="/" className="block" transitionType="splash">
        {logoSvg}
      </TransitionLink>
    );
  }

  return logoSvg;
}
