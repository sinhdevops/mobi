"use client";

import React from "react";

import Benefits from "./_components/benefits";
import WhyChooseUs from "./_components/why-choose-us";
import Services from "./_components/services";
import Hero from "./_components/hero";
import { NextSeo } from "next-seo";

const App = () => {
  return (
    <div>
      <NextSeo
        title="Lắp Wifi Giá Rẻ Đà Nẵng - MobiFiber Chính Hãng"
        description="Đăng ký lắp wifi Mobi Đà Nẵng nhanh chóng, chỉ từ 150k/tháng. Tặng thêm tháng sử dụng, hỗ trợ kỹ thuật tận nơi."
        canonical="https://www.lapmangmobi.store/"
      />
      <Hero />
      <Benefits />
      <WhyChooseUs />
      <Services />
      {/* <ContactForm /> */}
    </div>
  );
};

export default App;
