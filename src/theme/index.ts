import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

/**
 * NCA theme — "cricket pitch" green & gold.
 * Brand = deep pitch green, Gold = accent.
 * Fonts are wired to CSS variables set by next/font in app/layout.tsx.
 */
const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-heading), sans-serif" },
        body: { value: "var(--font-body), sans-serif" },
      },
      colors: {
        brand: {
          50: { value: "#e9f5ec" },
          100: { value: "#c7e6cf" },
          200: { value: "#9fd4af" },
          300: { value: "#6fbd86" },
          400: { value: "#43a862" },
          500: { value: "#2e8b4f" },
          600: { value: "#1f7a40" },
          700: { value: "#1b5e20" }, // primary
          800: { value: "#154a1a" },
          900: { value: "#0e3413" },
          950: { value: "#072008" },
        },
        gold: {
          50: { value: "#fff8e1" },
          100: { value: "#ffecb3" },
          200: { value: "#ffe082" },
          300: { value: "#ffd54f" },
          400: { value: "#ffca28" },
          500: { value: "#ffc107" }, // accent
          600: { value: "#ffb300" },
          700: { value: "#ffa000" },
          800: { value: "#ff8f00" },
          900: { value: "#ff6f00" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.700}" },
          contrast: { value: "white" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.50}" },
          emphasized: { value: "{colors.brand.600}" },
          focusRing: { value: "{colors.brand.500}" },
        },
        gold: {
          solid: { value: "{colors.gold.500}" },
          contrast: { value: "{colors.brand.900}" },
          fg: { value: "{colors.gold.700}" },
          muted: { value: "{colors.gold.100}" },
          subtle: { value: "{colors.gold.50}" },
          emphasized: { value: "{colors.gold.600}" },
          focusRing: { value: "{colors.gold.500}" },
        },
      },
    },
  },
  globalCss: {
    html: {
      scrollBehavior: "smooth",
      scrollPaddingTop: "80px", // offset for sticky navbar on anchor jumps
    },
    body: {
      bg: "white",
      color: "gray.800",
    },
  },
});

export const system = createSystem(defaultConfig, config);
