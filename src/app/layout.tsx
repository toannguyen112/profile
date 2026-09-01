import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tony | Cố Vấn Tăng Trưởng & Bứt Phá Doanh Thu Cho Doanh Nghiệp",
  description:
    "Đồng hành cùng Chủ doanh nghiệp tìm kiếm dòng tiền ẩn, nhân đôi lợi nhuận và xây dựng cỗ máy kinh doanh tự vận hành mà không cần phình to bộ máy.",
  keywords: [
    "Cố vấn doanh nghiệp",
    "Tăng trưởng doanh thu",
    "Tối ưu lợi nhuận",
    "Chiến lược kinh doanh",
    "Tony Cố Vấn",
    "Giải phóng lãnh đạo",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${cormorant.variable} ${montserrat.variable} dark bg-[#0a0a0a] text-[#f5f0e8] scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8] selection:bg-[#c9a84c]/30 selection:text-[#f5f0e8] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

