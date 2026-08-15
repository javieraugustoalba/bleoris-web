import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";

import { seoConfig } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

import "./globals.css";

const homeMetadata = createPageMetadata("home");

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.baseUrl),
  ...homeMetadata,
  applicationName: siteConfig.name,
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/brand/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f8f9fc",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="bg-canvas font-sans text-ink antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
