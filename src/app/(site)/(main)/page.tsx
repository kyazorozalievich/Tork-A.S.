import MainPage from "@/component/pages/main/MainPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gas Cylinder Filling Equipment | Gas Filling Machines",
  description:
    "Explore advanced gas cylinder filling machines and equipment designed for safe and efficient gas refueling. Discover reliable technology and solutions for LPG, propane, and industrial gas systems.",
  keywords: [
    "gas filling machines",
    "gas cylinder equipment",
    "LPG filling",
    "propane gas refueling",
    "industrial gas solutions",
    "gas refilling systems",
    "automatic gas dispensers",
  ],
  openGraph: {
    title: "Gas Cylinder Filling Equipment | Gas Filling Machines",
    description:
      "Discover cutting-edge gas cylinder filling machines for LPG, propane, and industrial applications. Reliable, efficient, and safe refueling technology.",
    url: "https://lpgvending.com",
    siteName: "Gas Filling Systems",
    images: [
      {
        url: "https://torkas.com/wp-content/uploads/2024/05/cropped-Tork_LOGO_kisa.jpg", 
        width: 1200,
        height: 630,
        alt: "Gas filling machine in operation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => <MainPage />;
export default page;
