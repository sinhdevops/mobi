import { FaTools, FaRocket, FaWifi, FaGift } from "react-icons/fa";

function Benefits() {
  const benefits = [
    {
      icon: <FaTools />,
      title: "Lắp Đặt Miễn Phí",
      desc: "Không phí khởi tạo",
    },
    { icon: <FaRocket />, title: "Tốc Độ Cao", desc: "Kết nối ổn định" },
    { icon: <FaWifi />, title: "Modem Miễn Phí", desc: "Thiết bị hiện đại" },
    { icon: <FaGift />, title: "WiFi Phụ", desc: "Tặng kèm bộ mở rộng" },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="text-[#51baf4] text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits;
