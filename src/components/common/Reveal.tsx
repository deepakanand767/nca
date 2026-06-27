"use client";

import { Box, type BoxProps } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

interface RevealProps extends BoxProps {
  /** delay in seconds before the entrance animation runs */
  delay?: number;
}

/**
 * Fades + slides its children into view the first time they enter the viewport.
 * Pure IntersectionObserver — no animation library needed.
 */
export function Reveal({ children, delay = 0, ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      opacity={inView ? 1 : 0}
      transform={inView ? "translateY(0)" : "translateY(28px)"}
      transition={`opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`}
      willChange="opacity, transform"
      {...rest}
    >
      {children}
    </Box>
  );
}
