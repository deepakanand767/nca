"use client";

import { Text, type TextProps } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

interface CountUpProps extends TextProps {
  end: number;
  suffix?: string;
  duration?: number; // ms
}

/** Counts up from 0 to `end` the first time it scrolls into view. */
export function CountUp({ end, suffix = "", duration = 1600, ...rest }: CountUpProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <Text ref={ref} {...rest}>
      {value}
      {suffix}
    </Text>
  );
}
