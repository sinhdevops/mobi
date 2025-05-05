import { IMAGES } from "@/assets/images";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative h-screen bg-gradient-to-r from-[#51baf4] to-blue-400">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1528127269322-539801943592"
          alt="Vietnam countryside"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center h-full text-white">
        <Image src={IMAGES.logo} alt="logo" />
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Internet Tốc Độ Cao Đà Nẵng
        </h1>
        <a href="#sign-in-now" className="flex gap-4">
          <button className="bg-white text-[#51baf4] px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition">
            Đăng Ký Ngay
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
