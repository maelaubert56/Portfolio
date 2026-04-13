import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { I18nProvider } from "@/i18n/provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maël Aubert — Développeur JavaScript",
  description:
    "Portfolio de Maël Aubert, développeur JavaScript spécialisé React, Next.js & Node.js.",
  metadataBase: new URL("https://maelaubert.fr"),
  openGraph: {
    title: "Maël Aubert — Développeur JavaScript",
    description:
      "Portfolio de Maël Aubert, développeur JavaScript spécialisé React, Next.js & Node.js.",
    url: "https://maelaubert.fr",
    siteName: "Maël Aubert",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maël Aubert — Développeur JavaScript",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maël Aubert — Développeur JavaScript",
    description:
      "Portfolio de Maël Aubert, développeur JavaScript spécialisé React, Next.js & Node.js.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t==null&&!window.matchMedia('(prefers-color-scheme: light)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
