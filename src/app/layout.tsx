import "@/styles/reset.css";
import "@/styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "swiper/css/bundle";
import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "우대왕",
  description: "우대왕 최고의 맛",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
