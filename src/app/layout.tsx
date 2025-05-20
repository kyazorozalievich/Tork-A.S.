import type { Metadata } from "next";
import "./globals.scss";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Tork A.Ş.",
    template: "%s | Tork A.Ş.",
  },
  description:
    "Tork A.Ş. is a leader in automated gas cylinder filling equipment, offering safety, reliability, and efficiency for LPG and industrial gas systems worldwide.",
  keywords: [
    "Tork A.Ş.",
    "gas cylinder equipment",
    "LPG filling systems",
    "industrial gas technology",
    "automated gas machines",
    "propane refueling solutions",
    "gas filling stations",
  ],
  openGraph: {
    title: "Tork A.Ş.",
    description:
      "Explore Tork A.Ş.'s advanced gas cylinder filling technologies. Trusted solutions for LPG and industrial gas refueling.",
    url: "https://lpgvending.com",
    siteName: "Tork A.Ş.",
    images: [
      {
        url: "https://torkas.com/wp-content/uploads/2024/05/cropped-Tork_LOGO_kisa.jpg",
        width: 1200,
        height: 630,
        alt: "Tork A.Ş. Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LTGB3W0QZC"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LTGB3W0QZC');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
