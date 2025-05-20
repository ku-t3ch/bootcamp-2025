import type { Metadata } from "next";
import { Kanit, Anta } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const kanit = Kanit({
  weight: ["400", "500", "700"],
  subsets: ["thai", "latin"],
  display: "swap",
});

const anta = Anta({
  variable: "--font-anta",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BootCamp #1 | 2025",
  description:
    "กิจกรรมที่จัดขึ้นเพื่อเสริมสร้างและพัฒนาทักษะทางด้านเทคโนโลยีให้แก่นักเรียนระดับชั้นมัธยมศึกษา พร้อมทั้งเปิดโอกาส ให้นักเรียนได้มีความรู้ความเข้าใจในพื้นฐานทางด้านการเขียนโปรแกรมมากขึ้นรวมถึงแนะแนวทางในการศึกษาต่อทางด้านเทคโนโลยีภายในอนาคตให้แก่นักเรียน",
  icons: "/assets/images/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.className} ${anta.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
