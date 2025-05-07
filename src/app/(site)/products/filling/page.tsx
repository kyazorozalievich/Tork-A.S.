import RefillsPage from "@/component/pages/products/filling/FillingPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gas Refilling Machines | LPG & Industrial Gas Filling Systems",
  description:
    "Browse our selection of high-performance gas refilling machines for LPG, propane, and industrial gas cylinders. Reliable, safe, and automated gas filling systems.",
  keywords: [
    "gas refilling machines",
    "LPG filling systems",
    "propane gas machines",
    "industrial gas equipment",
    "automatic gas dispensers",
    "cylinder refilling technology",
    "safe gas filling solutions",
  ],
  openGraph: {
    title: "Gas Refilling Machines | LPG & Industrial Gas Filling Systems",
    description:
      "Discover advanced gas refilling machines for LPG, propane, and industrial gases. Engineered for accuracy, safety, and efficiency.",
    url: "https://lpgvending.com/products/filling",
    siteName: "Gas Filling Systems",
    images: [
      {
        url: "https://torkas.com/wp-content/uploads/2024/05/cropped-Tork_LOGO_kisa.jpg",
        width: 1200,
        height: 630,
        alt: "Gas refilling machine in use",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => <RefillsPage />;
export default page;
