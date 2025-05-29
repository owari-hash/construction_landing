import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Legoblock.mn - Дулааны алдагдалгүй, хурдан барилгын шийдэл",
  description:
    "Legoblock.mn нь Монгол орны эрс тэс уур амьсгалд төгс тохирох, дулаан тусгаарлах өндөр үзүүлэлттэй, хямд өртгөөр хурдан угсрагдах полистрол (EPS) лего блок үйлдвэрлэдэг үндэсний үйлдвэр.",
  keywords:
    "барилга, лего блок, полистрол, EPS, дулаан тусгаарлагч, эрчим хүч хэмнэлт, монгол",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
