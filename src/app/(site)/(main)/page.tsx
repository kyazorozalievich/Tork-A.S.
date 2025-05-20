import MainPage from "@/component/pages/main/MainPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LPG Vending Machines | Automated Gas Cylinder Filling Systems",
  description:
    "Discover innovative LPG vending machines for automated gas cylinder refilling. Designed for safety, efficiency, and 24/7 self-service gas distribution. Ideal for commercial and industrial use.",
  keywords: [
    "LPG vending machines",
    "automated gas refilling",
    "self-service gas stations",
    "LPG dispenser",
    "gas cylinder vending",
    "24/7 gas refilling",
    "smart gas filling solutions",
    "LPG automation",
  ],
  openGraph: {
    title: "LPG Vending Machines | Automated Gas Cylinder Filling Systems",
    description:
      "Explore advanced LPG vending machines for fully automated, 24/7 gas cylinder refueling. Safe, efficient, and perfect for modern gas distribution.",
    url: "https://lpgvending.com",
    siteName: "LPG Vending Systems",
    images: [
      {
        url: "https://torkas.com/wp-content/uploads/2024/05/cropped-Tork_LOGO_kisa.jpg",
        width: 1200,
        height: 630,
        alt: "Automated LPG vending machine",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => <MainPage />;
export default page;
