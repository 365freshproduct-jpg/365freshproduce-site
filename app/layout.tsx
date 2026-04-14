import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.auren-greenhouse.com"),
  title: "AUREN Greenhouse Systems",
  description:
    "Premium B2B website for turnkey greenhouse construction with structures from Turkey and Spain and internal systems from Europe.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
