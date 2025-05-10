"use client";

import React from "react";

import Benefits from "./_components/benefits";
import WhyChooseUs from "./_components/why-choose-us";
import Services from "./_components/services";
import Image from "next/image";
import { IMAGES } from "@/assets/images";
const App = () => {
  return (
    <div>
      <div className="relative h-screen bg-gradient-to-r from-[#51baf4] to-blue-400">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1528127269322-539801943592"
            alt="Vietnam countryside"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center h-full text-white">
          <Image src={IMAGES.logo} alt="Lắp mạng Mobi Đà Nẵng" />
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
            Lắp Mạng MobiFone Đà Nẵng Giá Rẻ – Tốc độ cao – Hỗ trợ tận nơi
          </h1>
          {/* <p className="text-lg text-center mt-4 max-w-2xl text-white">
            Dịch vụ lắp đặt mạng Mobi tại Đà Nẵng với nhiều gói cước linh hoạt –
            miễn phí lắp đặt, tặng đến 7 tháng sử dụng cho khách đăng ký online
            hoặc chuyển từ nhà mạng khác (FPT, Viettel, VNPT).
          </p> */}
        </div>
      </div>

      <Benefits />
      <WhyChooseUs />
      <Services />
    </div>
  );
};

export default App;
