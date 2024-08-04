import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./noscript.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yuslinan :: fullstack development",
  description: "Desarrollo y despliegue de aplicaciones web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
