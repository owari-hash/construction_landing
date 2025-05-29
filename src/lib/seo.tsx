import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogUrl?: string;
  robots?: string;
  alternates?: { href: string; hreflang: string }[];
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
    images?: { url: string; alt: string }[];
  };
  twitter?: {
    card?: string;
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: string;
  };
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage,
  ogUrl,
  robots = "index, follow",
  alternates,
  openGraph,
  twitter,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content={robots} />

      {/* Open Graph tags */}
      <meta property="og:title" content={openGraph?.title || title} />
      <meta
        property="og:description"
        content={openGraph?.description || description}
      />
      <meta property="og:type" content={openGraph?.type || "website"} />
      <meta property="og:url" content={openGraph?.url || ogUrl} />
      {openGraph?.images?.map((image, index) => (
        <meta key={index} property="og:image" content={image.url} />
      )) ||
        (ogImage && <meta property="og:image" content={ogImage} />)}

      {/* Twitter Card tags */}
      <meta
        name="twitter:card"
        content={twitter?.card || "summary_large_image"}
      />
      {twitter?.site && <meta name="twitter:site" content={twitter.site} />}
      {twitter?.creator && (
        <meta name="twitter:creator" content={twitter.creator} />
      )}
      <meta name="twitter:title" content={twitter?.title || title} />
      <meta
        name="twitter:description"
        content={twitter?.description || description}
      />
      {twitter?.image && <meta name="twitter:image" content={twitter.image} />}

      {/* Alternates for internationalization */}
      {alternates?.map((alt, index) => (
        <link
          key={index}
          rel="alternate"
          hrefLang={alt.hreflang}
          href={alt.href}
        />
      ))}
    </Head>
  );
};

export default SEO;
