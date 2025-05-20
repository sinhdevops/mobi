const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Về Chúng Tôi</h3>
            <p className="text-gray-400">
              Cung cấp dịch vụ internet tốc độ cao tại Đà Nẵng
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liên Hệ</h3>
            <p className="text-gray-400">Hotline: 0325610016 / 0702252678</p>
            <p className="text-gray-400">Email: lesinh3005@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Theo Dõi</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576088849937&locale=vi_VN"
                className="text-gray-400 hover:text-white"
                target="_blank"
              >
                Facebook
              </a>
              <a
                href="https://zalo.me/0325610016"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                Zalo
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          © 2025 Em Sinh Kay. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
