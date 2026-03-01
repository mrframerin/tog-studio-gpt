import type { Metadata } from "next";
import type { ReactNode } from "react";

const description =
  "We turn websites into growth engines. Web design, Webflow experts, and AI-powered optimization to help you convert more with the traffic you already have. Based in Mexico City.";

export const metadata: Metadata = {
  metadataBase: new URL("https://yungle.com.mx"),
  title: "Tog | Dev Experts",
  description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    title: "Yungle | Webflow Experts",
    description,
    url: "https://yungle.com.mx",
    images: [
      {
        url: "/images/682c42e160bd6c5e0fdf0bba_Yungle-25-Opengraph--6240df17.webp"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Yungle | Webflow Experts",
    description,
    images: [
      "/images/682c42e160bd6c5e0fdf0bba_Yungle-25-Opengraph--6240df17.webp"
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="w-mod-js"
      suppressHydrationWarning
      data-wf-domain="www.yungle.com.mx"
      data-wf-page="67ec5bee56ec8dfb35026e20"
      data-wf-site="67ec5bee56ec8dfb35026e2b"
    >
      <head>
        <meta name="generator" content="Webflow" />
        <link rel="alternate" hrefLang="x-default" href="/" />
        <link rel="alternate" hrefLang="en" href="/" />
        <link rel="alternate" hrefLang="es-MX" href="https://yungle.com.mx/es-mx" />
        <link
          href="/yungle-cro.webflow.shared.0276af9b5.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html:
              "!(function (o, c) { var n = c.documentElement; n.classList.add('w-mod-js'); ('ontouchstart' in o || (o.DocumentTouch && c instanceof DocumentTouch)) && n.classList.add('w-mod-touch'); })(window, document);"
          }}
        />
        <link
          href="/images/67ec5cef60d1e7fb51af1bf7_Yungle-25-favicon--8fcc65ae.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="/images/67ec5cf2600d76568df52f0f_Yungle-25-webclip--929422dd.png"
          rel="apple-touch-icon"
        />
        <link rel="preconnect" href="https://cdn.prod.website-files.com" crossOrigin="anonymous" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SXJ2YT8DVZ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || []; function gtag(){ dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-SXJ2YT8DVZ');"
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: ".swiper-pagination-bullets.swiper-pagination-horizontal { width: auto; }"
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
