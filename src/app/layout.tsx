import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.fullName} | Professional Cricket Coaching in Nangal`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  keywords: [
    "cricket academy",
    "Nangal cricket academy",
    "NCA",
    "cricket coaching Nangal",
    "cricket classes Punjab",
    "batting coaching",
    "bowling coaching",
  ],
  openGraph: {
    title: `${siteConfig.fullName} | Where Champions Are Made`,
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.fullName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#1b5e20",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
