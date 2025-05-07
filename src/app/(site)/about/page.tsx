import AboutPage from "@/component/pages/about/AboutPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Gas Cylinder Filling Equipment Experts",
  description:
    "Learn more about our mission to deliver advanced gas filling machines and safe refueling systems. With years of expertise, we provide top-quality LPG and industrial gas solutions.",
  keywords: [
    "about gas filling company",
    "LPG machine experts",
    "industrial gas systems",
    "company information",
    "safe gas refueling technology",
    "gas filling equipment manufacturer",
  ],
  openGraph: {
    title: "About Us | Gas Cylinder Filling Equipment Experts",
    description:
      "We specialize in designing and delivering cutting-edge gas filling machines for LPG, propane, and industrial gases. Learn more about our expertise and vision.",
    url: "https://lpgvending.com/about",
    siteName: "Gas Filling Systems",
    images: [
      {
        url: "https://torkas.com/wp-content/uploads/2024/05/cropped-Tork_LOGO_kisa.jpg",
        width: 1200,
        height: 630,
        alt: "Company logo of gas filling systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => <AboutPage />;
export default page;
