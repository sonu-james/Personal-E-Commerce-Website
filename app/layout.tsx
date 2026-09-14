import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luna Fashion",
  description: "Women's fashion e-commerce website",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
