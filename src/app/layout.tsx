import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "E Commerce",
  description: "FIND CLOTHES THAT MATCHES YOUR STYLE",
  openGraph: {
    title: "E Commerce",
    description: "FIND CLOTHES THAT MATCHES YOUR STYLE",
    images: [
      {
        width: 800,
        height: 600,
        url: "/meta-img.png",
        alt: "meta-img",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
