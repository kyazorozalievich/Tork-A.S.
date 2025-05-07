import StationPage from "@/component/pages/products/station/StationPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gas Filling Stations | Modular LPG & Industrial Gas Stations",
  description:
    "Discover modular gas filling station solutions for LPG, propane, and industrial gases. Our stations are designed for safety, efficiency, and easy installation.",
  keywords: [
    "gas filling stations",
    "modular LPG stations",
    "industrial gas stations",
    "LPG station equipment",
    "portable gas refilling stations",
    "propane filling infrastructure",
    "safe gas refueling solutions",
  ],
  openGraph: {
    title: "Gas Filling Stations | Modular LPG & Industrial Gas Stations",
    description:
      "Explore high-performance modular gas filling stations for efficient and safe LPG and industrial gas refueling. Trusted technology and scalable solutions.",
    url: "https://lpgvending.com/products/station",
    siteName: "Gas Filling Systems",
    images: [
      {
        url: "https://torkas.com/wp-content/uploads/2024/05/cropped-Tork_LOGO_kisa.jpg",
        width: 1200,
        height: 630,
        alt: "Modular gas filling station",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => <StationPage />;
export default page;
