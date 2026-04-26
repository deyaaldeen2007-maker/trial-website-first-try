import type { ReactNode } from "react";
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { getSiteUrl, site } from "@/lib/site";

import "./globals.css";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  keywords: ["Deya Al Drabee", "Medical Student", "Researcher", "Academic Website", "Writing", "Talks"],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: site.name,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: site.socialImage.src,
        width: site.socialImage.width,
        height: site.socialImage.height,
        alt: site.socialImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.socialImage.src],
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${displayFont.variable} ${bodyFont.variable} bg-canvas font-body text-text antialiased`}>
        <a
          href="#content"
          className="sr-only absolute left-4 top-4 z-50 rounded-full border border-line bg-canvas px-4 py-2 text-sm text-text focus:not-sr-only"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Nav />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
