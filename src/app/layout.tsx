import { Roboto, PT_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SEO from "@/lib/seo";

const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const ptSerif = PT_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageTitle =
    "Legoblock.mn - Дулааны алдагдалгүй, хурдан барилгын шийдэл";
  const pageDescription =
    "Legoblock.mn нь Монгол орны эрс тэс уур амьсгалд төгс тохирох, дулаан тусгаарлах өндөр үзүүлэлттэй, хямд өртгөөр хурдан угсрагдах полистрол (EPS) лего блок үйлдвэрлэдэг үндэсний үйлдвэр.";
  const pageUrl = "https://construction-landing-sigma.vercel.app/";
  const pageImage =
    "https://construction-landing-sigma.vercel.app/images/hero-building.svg";

  return (
    <html lang="mn" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <SEO
          title={pageTitle}
          description={pageDescription}
          canonical={pageUrl}
          ogUrl={pageUrl}
          ogImage={pageImage}
          openGraph={{
            title: pageTitle,
            description: pageDescription,
            url: pageUrl,
            type: "website",
            images: [{ url: pageImage, alt: "Legoblock.mn Hero Image" }],
          }}
          twitter={{
            card: "summary_large_image",
            site: "@legoblockmn", // Replace with your Twitter handle
            creator: "@legoblockmn", // Replace with your Twitter handle
            title: pageTitle,
            description: pageDescription,
            image: pageImage,
          }}
        />
      </head>
      <body
        className={`${roboto.variable} ${ptSerif.variable} antialiased min-h-screen`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
