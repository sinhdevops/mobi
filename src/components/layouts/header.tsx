import Image from "next/image";
import { IMAGES } from "@/assets/images";

const Header = () => {
  const HEADERS = [
    { display: "Trang Chủ", hash: "#" },
    { display: "Giá Cước", hash: "#services" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#51baf4]">
          <Image
            src={IMAGES.logo}
            alt="Lắp mạng Mobi Đà Nẵng"
            width={200}
            height={150}
          />
        </div>
        <nav className="hidden md:flex space-x-8">
          {HEADERS.map((headerItems) => (
            <a href={headerItems.hash} key={headerItems.hash}>
              {headerItems.display}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
