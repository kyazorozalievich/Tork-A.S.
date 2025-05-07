import ReferencesPage from "@/component/pages/references/ReferencesPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "References | Our Gas Filling Projects & Clients",
  description:
    "Explore our portfolio of successful gas filling station installations and satisfied clients. We deliver trusted solutions for LPG and industrial gas systems worldwide.",
  keywords: [
    "gas filling references",
    "LPG projects",
    "client portfolio gas systems",
    "industrial gas installations",
    "trusted gas equipment",
    "gas refueling case studies",
    "successful gas filling projects",
  ],
  openGraph: {
    title: "References | Our Gas Filling Projects & Clients",
    description:
      "Take a look at our past projects and client success stories in the field of gas filling technology. Proven quality and performance in every installation.",
    url: "https://lpgvending.com/references",
    siteName: "Gas Filling Systems",
    images: [
      {
        url: "https://torkas.com/wp-content/uploads/2024/05/cropped-Tork_LOGO_kisa.jpg",
        width: 1200,
        height: 630,
        alt: "Gas filling project references",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => <ReferencesPage />;
export default page;
