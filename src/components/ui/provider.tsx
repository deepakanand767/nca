"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { system } from "@/theme";

/**
 * App-wide provider. The site is light-mode only (marketing site), so we force
 * the "light" theme via next-themes to avoid OS dark-mode flashes.
 */
export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        forcedTheme="light"
        enableSystem={false}
      >
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
