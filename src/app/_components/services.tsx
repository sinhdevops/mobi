function Services() {
  return (
    <div className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0D47A1]">
          Bảng Giá Gói Cước Internet
        </h2>

        {/* Bảng Gộp 1 Cột */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="bg-[#1976D2] text-white p-4 grid grid-cols-4 font-semibold text-sm md:text-base">
            <div>Gói Cước</div>
            <div>Tốc Độ</div>
            <div className="text-center">Giá</div>
            <div className="text-center">Thiết Bị</div>
            {/* <div>Khuyến Mãi</div> */}
          </div>
          {[
            {
              name: "6WiFi 1",
              months: 6,
              speed: "300 Mbps",
              price: "150.000đ", // 900.000 / 6
              devices: "1 IP DNAT",
            },
            {
              name: "6WiFi 2",
              months: 6,
              speed: "400 Mbps",
              price: "180.000đ", // 1.080.000 / 6
              devices: "1 IP DNAT",
            },
            {
              name: "6WiFi 3",
              months: 6,
              speed: "500 Mbps",
              price: "210.000đ", // 1.260.000 / 6
              devices: "1 IP DNAT",
            },
          ].map((pkg, index) => {
            const bonus = pkg.months === 6 ? 2 : 4;
            const total = pkg.months + bonus;
            return (
              <div
                key={index}
                className="grid grid-cols-4 p-4 border-b last:border-b-0 hover:bg-yellow-50 transition-all duration-300 text-sm md:text-base bg-yellow-50/50"
              >
                <div className="font-bold text-gray-800">{`${pkg.months} tháng - ${pkg.name}`}</div>
                <div>{pkg.speed}</div>
                <div className="text-red-500 font-bold text-center">
                  {pkg.price}/ tháng
                </div>
                <div className="text-center">{pkg.devices}</div>
                {/* <div className="text-green-700 font-medium">{`Tặng ${bonus} tháng (Tổng ${total})`}</div> */}
              </div>
            );
          })}
        </div>

        {/* Box Ưu Đãi */}
        <div className="mt-12 bg-gradient-to-r from-yellow-400 to-yellow-200 p-8 rounded-xl shadow-xl text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            🎁 ƯU ĐÃI ĐẶC BIỆT CHỈ CÓ TẠI ĐÂY!
          </h3>
          <p className="mb-3 text-2xl font-bold text-green-800">
            🎉 LẮP ĐẶT HOÀN TOÀN <span className="underline">MIỄN PHÍ!</span>
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            🔥 Đăng ký <strong>6 tháng</strong> – Tặng ngay{" "}
            <strong>2 tháng</strong>
            <br />
            🔥 Đăng ký <strong>12 tháng</strong> – Tặng ngay{" "}
            <strong>4 tháng</strong>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
