"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Target,
  Sparkles,
  BookOpen,
  Award,
  ChevronRight,
  CheckCircle2,
  Lock,
  Layers,
  BarChart3,
  Users,
  Repeat,
  DollarSign,
  Clock,
  Briefcase,
  Lightbulb,
} from "lucide-react";

export default function Home() {
  const [selectedTier, setSelectedTier] = useState<string>("tier2");

  const partners = [
    { name: "Ford Long Khánh", file: "/images/partners/logo_1.png", alt: "Long Khanh Ford" },
    { name: "Đồng Nai Ford", file: "/images/partners/logo_2.png", alt: "Dong Nai Ford" },
    { name: "Cô Thảo Tôm Càng", file: "/images/partners/logo_3.png", alt: "Co Thao Tom Cang" },
    { name: "SophPower", file: "/images/partners/logo_4.png", alt: "SophPower" },
    { name: "UpTech", file: "/images/partners/logo_5.png", alt: "Uptech" },
    { name: "Happy Book", file: "/images/partners/logo_6.png", alt: "Happy Book" },
    { name: "FunkyStyle", file: "/images/partners/logo_7.png", alt: "Funkystyle" },
    { name: "NTK Group", file: "/images/partners/logo_8.png", alt: "NTK" },
    { name: "TOBI", file: "/images/partners/logo_9.png", alt: "TOBI" },
    { name: "Cal & Đẹp", file: "/images/partners/logo_10.png", alt: "Cal&dep" },
    { name: "Sip N Source", file: "/images/partners/logo_11.png", alt: "Sip N Source" },
    { name: "CoreViral", file: "/images/partners/logo_12.png", alt: "Coreviral" },
  ];

  const engagementModels = [
    {
      id: "tier1",
      tier: "GÓI 01",
      title: "Chẩn Đoán & Khám Sức Khỏe Doanh Nghiệp",
      subtitle: "Strategic Business Makeover Assessment",
      description:
        "Dành cho Chủ doanh nghiệp cảm thấy công ty đang chững lại, chi phí tăng cao nhưng lợi nhuận không tương xứng. Bóc tách chính xác những điểm rò rỉ tiền bạc và nguồn lực đang bị lãng phí.",
      deliverables: [
        "Rà soát toàn diện 3 nguồn tạo ra dòng tiền trong công ty",
        "Tìm ra ít nhất 3 đến 5 cơ hội tăng doanh thu tức thì mà không cần thêm vốn",
        "Bản kế hoạch hành động 90 ngày giúp tinh gọn vận hành và tăng biên lợi nhuận",
      ],
      tag: "Bắt Đầu & Đánh Giá",
      cta: "Đăng Ký Đánh Giá Doanh Nghiệp",
    },
    {
      id: "tier2",
      tier: "GÓI 02",
      title: "Phiên Cố Vấn Bứt Phá Doanh Thu 1-kèm-1",
      subtitle: "Private Breakthrough Deep-Dive",
      description:
        "Buổi làm việc tác chiến trực tiếp 1-1 giữa Tony và Chủ doanh nghiệp. Tái cấu trúc lại bảng giá, tạo lời chào hàng khiến khách không thể từ chối và thiết kế chiến lược liên minh hợp tác có ngay tệp khách mới.",
      deliverables: [
        "Phiên cố vấn chuyên sâu riêng biệt (Nửa ngày hoặc Trọn ngày)",
        "Thiết lập chiến lược giá và gói sản phẩm giá trị cao (High-Ticket)",
        "Xây dựng chính sách cam kết triệt tiêu 100% rủi ro cho người mua",
        "Kích hoạt hệ thống khách hàng cũ quay lại mua thêm và giới thiệu khách mới",
      ],
      tag: "Hiệu Quả & Nhanh Nhất",
      featured: true,
      cta: "Đăng Ký Phiên Làm Việc 1-1",
    },
    {
      id: "tier3",
      tier: "GÓI 03",
      title: "Cố Vấn Chiến Lược Đồng Hành Cấp Cao",
      subtitle: "Executive Boardroom Mentorship",
      description:
        "Tony đóng vai trò Cố vấn Chiến lược Trưởng, đồng hành sát sao cùng Ban Lãnh đạo hàng tháng để hoạch định đường đi, gỡ rối kinh doanh và giám sát hiệu quả thực thi thực tế.",
      deliverables: [
        "Họp chiến lược định kỳ 2 tuần/lần trực tiếp cùng Chủ doanh nghiệp & C-Level",
        "Tái cấu trúc cỗ máy bán hàng & chăm sóc khách hàng tự động",
        "Tư vấn đàm phán hợp đồng lớn, liên minh kinh doanh và mở rộng kênh",
        "Kênh kết nối và tham vấn riêng trực tiếp 24/7 khi có sự vụ phát sinh",
      ],
      tag: "Đồng Hành Hàng Năm",
      cta: "Phỏng Vấn Đồng Hành Dài Hạn",
    },
    {
      id: "tier4",
      tier: "GÓI 04",
      title: "Đối Tác Liên Minh Chia Sẻ Lợi Nhuận",
      subtitle: "Profit Growth Partnership",
      description:
        "Mô hình hợp tác đặc biệt: Tony tham gia trực tiếp vào việc tái cấu trúc và mở rộng kinh doanh, nhận thù lao dựa trên phần doanh thu và lợi nhuận thực tế tăng thêm.",
      deliverables: [
        "Cùng chịu trách nhiệm trên con số tăng trưởng thực tế",
        "Đóng góp mạng lưới đối tác, nguồn lực và hệ thống sẵn có",
        "Chỉ áp dụng cho doanh nghiệp có sản phẩm tốt và cam kết thực thi mạnh",
      ],
      tag: "Hợp Tác Chia Sẻ Lợi Nhuận",
      cta: "Đề Xuất Hợp Tác Tăng Trưởng",
    },
  ];

  const frameworks = [
    {
      title: "3 Đòn Bẩy Tăng Doanh Số Duy Nhất Trong Mọi Ngành",
      subtitle: "Công Thức Tăng Trưởng Cốt Lõi",
      desc: "Mọi doanh nghiệp chỉ có đúng 3 cách để tăng tiền: (1) Tăng lượng khách hàng, (2) Tăng giá trị trung bình mỗi lần mua, (3) Tăng số lần khách quay lại. Chỉ cần tăng 10% ở mỗi phần, doanh thu tổng sẽ tự động tăng 33.1% mà không tốn thêm chi phí nhân sự.",
      icon: TrendingUp,
    },
    {
      title: "Triệt Tiêu Rủi Ro (Risk-Reversal) & Lời Chào Hàng Đỉnh Cao",
      subtitle: "Bí Quyết Chốt Đơn Không Cần Ép Giá",
      desc: "Cách gánh phần lớn rủi ro quyết định thay cho khách hàng bằng lời cam kết chắc nịch. Khi khách hàng không còn sợ bị thiệt hại, quyết định mua hàng diễn ra ngay lập tức và bạn không bao giờ phải giảm giá cạnh tranh.",
      icon: ShieldCheck,
    },
    {
      title: "Khai Thác Tài Sản Ẩn & Liên Minh Chiến Lược",
      subtitle: "Có Thêm Khách Hàng Mà Không Cần Đốt Tiền Quảng Cáo",
      desc: "Khai thác tệp khách hàng tiềm năng khổng lồ từ các doanh nghiệp đối tác không cạnh tranh. Tận dụng niềm tin sẵn có của họ để bán chéo sản phẩm với chi phí thu hút khách hàng gần như bằng 0.",
      icon: Users,
    },
    {
      title: "Cỗ Máy Bán Hàng & Chăm Sóc Tự Vận Hành",
      subtitle: "Giải Phóng Chủ Doanh Nghiệp Khỏi Sự Vụ Vận Hành",
      desc: "Thiết lập quy trình chuẩn hóa và ứng dụng công cụ thông minh để đội ngũ tự động chốt đơn, nhắc lịch, chăm sóc khách cũ mà không cần chủ doanh nghiệp phải có mặt giám sát 24/7.",
      icon: Zap,
    },
  ];

  const businessPainPoints = [
    {
      title: "Doanh số tăng nhưng tiền mặt và lợi nhuận không thấy đâu",
      desc: "Chi phí mặt bằng, nhân sự, quảng cáo ngốn gần hết biên lợi nhuận gộp.",
    },
    {
      title: "Chủ doanh nghiệp bị kẹt cứng trong vòng xoáy sự vụ",
      desc: "Không dám đi vắng vì hễ rời mắt là nhân viên làm sai, khách hàng phàn nàn.",
    },
    {
      title: "Bế tắc vì chi phí quảng cáo ngày càng đắt đỏ",
      desc: "Càng chạy quảng cáo càng lỗ, nhưng ngừng quảng cáo là lập tức hết khách mới.",
    },
    {
      title: "Khách chỉ mua một lần rồi biến mất mãi mãi",
      desc: "Không có hệ thống chăm sóc để khai thác lại mỏ vàng từ chính khách hàng cũ.",
    },
  ];

  const stats = [
    { value: "100+ Tỷ", label: "Doanh Thu Đã Tối Ưu & Tạo Ra Cho Khách Hàng" },
    { value: "100+", label: "Chủ Doanh Nghiệp Đã Được Cố Vấn Trực Tiếp" },
    { value: "18+", label: "Ngành Nghề Thực Tế (B2B, Bán Lẻ, Dịch Vụ, Sản Xuất)" },
    { value: "35%+", label: "Tỷ Lệ Tối Ưu Biên Lợi Nhuận Ròng Trung Bình" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8] selection:bg-[#c9a84c]/30 selection:text-[#f5f0e8]">
      {/* Top Banner Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0a0a0a] via-[#c9a84c] to-[#0a0a0a]" />

      {/* Navigation (Sticky Luxury Glassmorphism) */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0a0a]/90 border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#c9a84c] group-hover:shadow-[0_0_15px_rgba(201,168,76,0.5)] transition-all">
              <Image
                src="/images/tony-avatar.jpg"
                alt="Tony Portrait"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.2em] uppercase text-base text-[#f5f0e8] font-bold">
                TONY
              </span>
              <span className="text-[10px] tracking-[0.22em] text-[#c9a84c] uppercase font-mono">
                Cố Vấn Tăng Trưởng Doanh Nghiệp
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.16em] text-[#f5f0e8]/80 font-medium">
            <a href="#thuc-trang" className="hover:text-[#c9a84c] transition-colors">
              Điểm Nghẽn
            </a>
            <a href="#triet-ly" className="hover:text-[#c9a84c] transition-colors">
              Đòn Bẩy Tăng Trưởng
            </a>
            <a href="#mo-hinh" className="hover:text-[#c9a84c] transition-colors">
              Gói Cố Vấn
            </a>
            <a href="#ve-tony" className="hover:text-[#c9a84c] transition-colors">
              Về Tony
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#dang-ky"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-[0.15em] bg-[#c9a84c] text-[#0a0a0a] hover:bg-[#dfc26a] hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all"
            >
              <span>Đăng Ký Cố Vấn</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* FULL-BLEED CINEMATIC HERO BANNER (Abraham.com Exact Layout & Atmosphere) */}
      <section className="relative min-h-[640px] lg:min-h-[740px] flex items-center overflow-hidden border-b border-[#1c1c1c] bg-[#0a0a0a]">
        {/* Full-bleed Background Image with Tony Portrait on Right */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-cinematic.jpg"
            alt="Tony - Strategic Growth Advisor Background"
            fill
            priority
            className="object-cover object-[70%_center] lg:object-right filter contrast-[1.05] brightness-95"
          />
          {/* Deep Dark Gradient Overlay on Left for 100% Crisp Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 lg:via-[#0a0a0a]/75 to-transparent to-70%" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-16 sm:py-24">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Gold Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/40 bg-[#0a0a0a]/80 backdrop-blur-md text-[#c9a84c] text-xs uppercase tracking-[0.24em] mb-6 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#c9a84c]" />
              <span>CỐ VẤN TĂNG TRƯỞNG & BỨT PHÁ DOANH THU THỰC CHIẾN</span>
            </div>

            {/* Main Grand Headline (Serif + Italic Gold) */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.12] text-[#f5f0e8] mb-6 drop-shadow-lg">
              Bạn Đang Ở Gần Một Cú <br className="hidden sm:inline" />
              <span className="italic gold-gradient-text">Bứt Phá Doanh Thu</span> Hơn Bạn Nghĩ.
            </h1>

            {/* Subtitle / Philosophy */}
            <p className="text-base sm:text-lg md:text-xl text-[#f5f0e8]/85 leading-relaxed mb-10 font-light max-w-2xl">
              Hầu hết các doanh nghiệp đang ngồi trên một <strong className="text-[#f5f0e8] font-medium">mỏ vàng gồm 3 đến 10 lần doanh thu tiềm ẩn</strong> mà không hề hay biết. 
              Tony đồng hành giúp bạn tìm ra chính xác những chỗ tiền đang ẩn nấp và kích hoạt chúng ngay lập tức.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href="#dang-ky"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded text-xs font-bold uppercase tracking-[0.2em] bg-[#c9a84c] text-[#0a0a0a] hover:bg-[#dfc26a] shadow-[0_0_25px_rgba(201,168,76,0.35)] hover:shadow-[0_0_35px_rgba(201,168,76,0.55)] transition-all cursor-pointer"
              >
                <span>ỨNG TUYỂN CỐ VẤN CHIẾN LƯỢC</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#triet-ly"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded text-xs font-semibold uppercase tracking-[0.2em] border border-[#444] text-[#f5f0e8] hover:border-[#c9a84c] hover:text-[#c9a84c] bg-[#0a0a0a]/70 backdrop-blur-md transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>KHÁM PHÁ PHƯƠNG PHÁP</span>
              </a>
            </div>

            {/* Trust Assurance */}
            <div className="flex items-center gap-3 text-xs text-[#f5f0e8]/60 font-light">
              <ShieldCheck className="w-4 h-4 text-[#c9a84c]" />
              <span>Cam kết làm việc trực tiếp 1-1 & Bảo mật thông tin kinh doanh 100% (NDA).</span>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORITY STATS BAR */}
      <section className="border-b border-[#1c1c1c] bg-[#080808] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c9a84c] mb-1">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-[0.12em] text-[#f5f0e8]/60 max-w-[210px] leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Business Pain Points */}
      <section id="thuc-trang" className="py-20 border-b border-[#1c1c1c] bg-[#0d0d0d]/70">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c9a84c] font-medium block mb-3">
              Thực Trạng Doanh Nghiệp
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] leading-tight">
              Có phải bạn đang đối mặt với{" "}
              <span className="italic text-[#c9a84c]">những cái bẫy này?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessPainPoints.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded bg-[#121212] border border-[#222] hover:border-[#c9a84c]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#c9a84c]/10 text-[#c9a84c] font-mono text-xs flex items-center justify-center font-bold mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-semibold text-[#f5f0e8] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#f5f0e8]/65 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Core Growth Levers */}
      <section id="triet-ly" className="py-24 border-b border-[#1c1c1c] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#c9a84c] font-medium block mb-3">
                Phương Pháp Luận Cố Vấn
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#f5f0e8] leading-tight">
                4 Đòn Bẩy Giúp{" "}
                <span className="italic gold-gradient-text">Bứt Phá Lợi Nhuận</span>
              </h2>
            </div>
            <p className="text-sm text-[#f5f0e8]/70 max-w-md leading-relaxed font-light">
              Không lý thuyết suông, không dùng thuật ngữ kỹ thuật phức tạp. Tất cả đều là giải pháp kinh doanh thực chiến có thể đo lường trực tiếp trên sổ sách kế toán.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {frameworks.map((fw, idx) => {
              const Icon = fw.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded bg-[#101010] border border-[#222] hover:border-[#c9a84c]/50 transition-all relative group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#c9a84c] font-mono block mb-1">
                        {fw.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl text-[#f5f0e8] mb-3">{fw.title}</h3>
                      <p className="text-sm text-[#f5f0e8]/75 leading-relaxed font-light">{fw.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models (Tiered Advisory) */}
      <section id="mo-hinh" className="py-24 border-b border-[#1c1c1c] bg-[#0c0c0c]/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c9a84c] font-medium block mb-3">
              Mô Hình Hợp Tác
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#f5f0e8] leading-tight">
              4 Hình Thức <span className="italic gold-gradient-text">Cố Vấn Tác Chiến</span>
            </h2>
            <p className="mt-4 text-[#f5f0e8]/70 text-base leading-relaxed font-light">
              Tùy thuộc vào quy mô doanh thu hiện tại và bài toán cấp bách mà doanh nghiệp của bạn đang cần tháo gỡ.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {engagementModels.map((model) => (
              <div
                key={model.id}
                className={`p-8 sm:p-10 rounded border flex flex-col justify-between transition-all ${
                  model.featured
                    ? "bg-[#14120e] border-[#c9a84c]/70 shadow-[0_0_30px_rgba(201,168,76,0.15)] relative"
                    : "bg-[#101010] border-[#262626] hover:border-[#c9a84c]/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#c9a84c] font-semibold">
                      {model.tier}
                    </span>
                    <span
                      className={`text-[10px] uppercase tracking-[0.18em] px-3 py-1 rounded-full font-semibold ${
                        model.featured
                          ? "bg-[#c9a84c] text-[#0a0a0a]"
                          : "border border-[#333] text-[#f5f0e8]/70"
                      }`}
                    >
                      {model.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f0e8] mb-1">{model.title}</h3>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#c9a84c] mb-6 font-medium">
                    {model.subtitle}
                  </p>

                  <p className="text-sm text-[#f5f0e8]/75 leading-relaxed mb-8 font-light">
                    {model.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-[#222] mb-8">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-[#f5f0e8]/60 font-semibold block mb-2">
                      Quyền Lợi & Hạng Mục Cụ Thể:
                    </span>
                    {model.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-[#f5f0e8]/85 font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#dang-ky"
                  className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded text-xs font-bold uppercase tracking-[0.2em] transition-all ${
                    model.featured
                      ? "bg-[#c9a84c] text-[#0a0a0a] hover:bg-[#dfc26a] shadow-[0_0_20px_rgba(201,168,76,0.3)]"
                      : "border border-[#3a3530] text-[#f5f0e8] hover:border-[#c9a84c] hover:text-[#c9a84c] bg-[#161616]"
                  }`}
                >
                  <span>{model.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Tony Section */}
      <section id="ve-tony" className="py-24 border-b border-[#1c1c1c]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Portrait Card */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] rounded-2xl border border-[#c9a84c]/50 bg-[#161616] p-2 relative shadow-[0_0_35px_rgba(201,168,76,0.15)] group overflow-hidden">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/tony-avatar.jpg"
                    alt="Tony"
                    fill
                    className="object-cover object-top filter contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-75" />
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-xs text-[#f5f0e8]/80 italic leading-relaxed">
                      "Thành công của doanh nghiệp đo bằng tỷ suất lợi nhuận thực tế và mức độ tự do của chính bạn."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography & Approach */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c9a84c] font-medium block mb-3">
                Hồ Sơ Cố Vấn
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#f5f0e8] mb-6 leading-tight">
                Người Đồng Hành Chiến Lược Cho{" "}
                <span className="italic gold-gradient-text">Các Chủ Doanh Nghiệp Thực Chiến</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#f5f0e8]/75 leading-relaxed font-light mb-8">
                <p>
                  Tony không phải là một diễn giả nói chuyện truyền cảm hứng, cũng không cung cấp những bản báo cáo dày cộp chỉ để cất vào ngăn kéo.
                </p>
                <p>
                  Tony làm việc trực tiếp với Chủ doanh nghiệp như một người bạn đồng hành cấp cao: bóc tách chính xác chỗ rò rỉ tiền, tái cấu trúc bảng giá, thiết lập lại đội ngũ bán hàng và kích hoạt những nguồn doanh thu bị bỏ quên.
                </p>
                <p>
                  Mọi giải pháp đều được thiết kế đơn giản, dễ triển khai cho cả những doanh nghiệp hoàn toàn không rành về công nghệ.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#222]">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#c9a84c] shrink-0" />
                  <span className="text-xs text-[#f5f0e8]/80 uppercase tracking-wider">
                    Đo lường bằng kết quả & dòng tiền thực tế
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#c9a84c] shrink-0" />
                  <span className="text-xs text-[#f5f0e8]/80 uppercase tracking-wider">
                    Cam kết bảo mật tuyệt đối thông tin kinh doanh (NDA)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application / Contact Form */}
      <section id="dang-ky" className="py-24 border-b border-[#1c1c1c] bg-[#0d0d0d] relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c9a84c] font-medium block mb-3">
              Đăng Ký Trao Đổi Cố Vấn
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#f5f0e8] leading-tight">
              Khám Sức Khỏe & <span className="italic gold-gradient-text">Bứt Phá Doanh Thu</span>
            </h2>
            <p className="mt-4 text-sm text-[#f5f0e8]/70 max-w-xl mx-auto leading-relaxed font-light">
              Điền thông tin bên dưới để đăng ký buổi trao đổi sơ bộ 30 phút cùng Tony và đội ngũ trợ lý chiến lược.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded bg-[#111] border border-[#2a2520] shadow-2xl relative">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Cảm ơn bạn! Thông tin đã được gửi tới Tony. Trợ lý chiến lược sẽ liên hệ xác nhận lịch trao đổi trong vòng 24 giờ.");
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#f5f0e8]/70 mb-2 font-medium">
                    Họ và Tên Chủ Doanh Nghiệp *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn A"
                    className="w-full px-4 py-3.5 rounded bg-[#0a0a0a] border border-[#2d2d2d] text-[#f5f0e8] text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#f5f0e8]/70 mb-2 font-medium">
                    Số Điện Thoại / Zalo *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0901 234 567"
                    className="w-full px-4 py-3.5 rounded bg-[#0a0a0a] border border-[#2d2d2d] text-[#f5f0e8] text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#f5f0e8]/70 mb-2 font-medium">
                    Tên Doanh Nghiệp / Lĩnh Vực Hoạt Động *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Công ty X - Sản xuất / Bán lẻ / Dịch vụ"
                    className="w-full px-4 py-3.5 rounded bg-[#0a0a0a] border border-[#2d2d2d] text-[#f5f0e8] text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#f5f0e8]/70 mb-2 font-medium">
                    Doanh Thu Trung Bình Hàng Tháng
                  </label>
                  <select
                    className="w-full px-4 py-3.5 rounded bg-[#0a0a0a] border border-[#2d2d2d] text-[#f5f0e8] text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                  >
                    <option value="under500">Dưới 500 triệu / tháng</option>
                    <option value="500to2b">Từ 500 triệu - 2 tỷ / tháng</option>
                    <option value="2bto5b">Từ 2 tỷ - 5 tỷ / tháng</option>
                    <option value="above5b">Trên 5 tỷ / tháng</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-[#f5f0e8]/70 mb-2 font-medium">
                  Hình thức Cố vấn bạn muốn tìm hiểu
                </label>
                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="w-full px-4 py-3.5 rounded bg-[#0a0a0a] border border-[#2d2d2d] text-[#f5f0e8] text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                >
                  <option value="tier1">Gói 01: Chẩn Đoán & Khám Sức Khỏe Doanh Nghiệp (Makeover Assessment)</option>
                  <option value="tier2">Gói 02: Phiên Cố Vấn Bứt Phá Doanh Thu 1-kèm-1 (Breakthrough Deep-Dive)</option>
                  <option value="tier3">Gói 03: Cố Vấn Chiến Lược Đồng Hành Cấp Cao (Executive Mentorship)</option>
                  <option value="tier4">Gói 04: Đối Tác Liên Minh Chia Sẻ Lợi Nhuận (Profit Growth Partnership)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-[#f5f0e8]/70 mb-2 font-medium">
                  Vấn đề hoặc mục tiêu lớn nhất bạn muốn giải quyết trong 3-6 tháng tới?
                </label>
                <textarea
                  rows={4}
                  placeholder="Ví dụ: Muốn tăng giá bán mà không mất khách, giảm bớt sự phụ thuộc vào quảng cáo, muốn xây dựng đội ngũ tự vận hành..."
                  className="w-full px-4 py-3.5 rounded bg-[#0a0a0a] border border-[#2d2d2d] text-[#f5f0e8] text-sm focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded text-xs font-bold uppercase tracking-[0.25em] bg-[#c9a84c] text-[#0a0a0a] hover:bg-[#dfc26a] shadow-[0_0_25px_rgba(201,168,76,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Gửi Thông Tin Đăng Ký Trao Đổi</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#f5f0e8]/50 pt-2 font-light">
                <Lock className="w-3.5 h-3.5 text-[#c9a84c]" />
                <span>Toàn bộ thông tin doanh nghiệp được bảo mật 100% theo tiêu chuẩn bảo mật NDA.</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Executive Footer */}
      <footer className="py-16 bg-[#070707] text-[#8a8070]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#c9a84c]/60">
                  <Image
                    src="/images/tony-avatar.jpg"
                    alt="Tony Avatar"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <span className="font-serif tracking-[0.2em] uppercase text-sm text-[#f5f0e8] font-bold">
                  TONY STRATEGIC ADVISORY
                </span>
              </div>
              <p className="text-xs text-[#f5f0e8]/60 leading-relaxed max-w-sm">
                Đồng hành cùng các Chủ doanh nghiệp tìm kiếm dòng tiền ẩn, tối ưu biên lợi nhuận và xây dựng cỗ máy kinh doanh tự vận hành bền vững.
              </p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#f5f0e8] font-semibold block mb-4">
                Danh Mục Cố Vấn
              </span>
              <ul className="space-y-2.5 text-xs text-[#f5f0e8]/70 font-light">
                <li>
                  <a href="#thuc-trang" className="hover:text-[#c9a84c] transition-colors">
                    Điểm Nghẽn Doanh Nghiệp
                  </a>
                </li>
                <li>
                  <a href="#triet-ly" className="hover:text-[#c9a84c] transition-colors">
                    4 Đòn Bẩy Tăng Trưởng
                  </a>
                </li>
                <li>
                  <a href="#mo-hinh" className="hover:text-[#c9a84c] transition-colors">
                    4 Gói Hợp Tác Cố Vấn
                  </a>
                </li>
                <li>
                  <a href="#dang-ky" className="hover:text-[#c9a84c] transition-colors">
                    Đăng Ký Đánh Giá
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#f5f0e8] font-semibold block mb-4">
                Cam Kết & Bảo Mật
              </span>
              <ul className="space-y-2.5 text-xs text-[#f5f0e8]/70 font-light">
                <li>Thỏa thuận bảo mật thông tin (NDA)</li>
                <li>Nguyên tắc cố vấn & đạo đức nghề nghiệp</li>
                <li>Chính sách bảo mật dữ liệu khách hàng</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between text-xs text-[#f5f0e8]/40 gap-4 font-light">
            <p>© {new Date().getFullYear()} Tony Advisory. All rights reserved.</p>
            <p className="font-mono text-[11px] text-[#c9a84c]/80">
              Chiến Lược Tăng Trưởng Thực Chiến
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
