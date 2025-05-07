import ContactPage from "@/component/pages/contact/ContactPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | Gas Cylinder Filling Systems",
  description:
    "Get in touch with our team for inquiries about gas filling machines, technical support, or partnership opportunities. We're here to help with all your LPG and industrial gas system needs.",
  keywords: [
    "contact gas equipment company",
    "get in touch LPG machines",
    "support gas filling systems",
    "inquiries gas refueling equipment",
    "LPG machine contact",
    "industrial gas contact",
  ],
  openGraph: {
    title: "Contact Us | Gas Cylinder Filling Systems",
    description:
      "Reach out to us for expert advice on gas cylinder filling machines and industrial gas refueling solutions. Fast response and professional support.",
    url: "https://lpgvending.com/contact",
    siteName: "Gas Filling Systems",
    images: [
      {
        url: "https://torkas.com/wp-content/uploads/2024/05/cropped-Tork_LOGO_kisa.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Gas Filling Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => <ContactPage />;
export default page;
