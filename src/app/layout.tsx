import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Tork A.Ş.",
  description: "Tork A.Ş. is a leader in automated gas cylinder equipment that provides safety, reliability and convenience. Our technologies meet the highest quality standards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
