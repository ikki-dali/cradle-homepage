"use client";

import { useRouter } from "next/navigation";
import { ReactNode, MouseEvent, CSSProperties } from "react";
import { useTransition } from "@/components/layout/PageTransitionProvider";

type TransitionType = "default" | "splash";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  transitionType?: TransitionType;
}

export function TransitionLink({
  href,
  children,
  className = "",
  style,
  onClick,
  transitionType = "default",
}: TransitionLinkProps) {
  const router = useRouter();
  const { startTransition } = useTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();
    
    startTransition(() => {
      router.push(href);
    }, transitionType);
  };

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}
