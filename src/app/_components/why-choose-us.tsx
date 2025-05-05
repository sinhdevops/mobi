import { MdPayments, MdSupportAgent, MdAppRegistration } from "react-icons/md";

function WhyChooseUs() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Tại Sao Chọn Chúng Tôi?
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex flex-col items-center text-center">
            <MdPayments className="text-5xl text-[#51baf4] mb-4" />
            <h3 className="text-xl font-bold mb-2">Không Đặt Cọc</h3>
            <p className="text-gray-600">Thanh toán linh hoạt</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MdSupportAgent className="text-5xl text-[#51baf4] mb-4" />
            <h3 className="text-xl font-bold mb-2">Hỗ Trợ Nhanh</h3>
            <p className="text-gray-600">24/7 support</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MdAppRegistration className="text-5xl text-[#51baf4] mb-4" />
            <h3 className="text-xl font-bold mb-2">Đăng Ký Dễ Dàng</h3>
            <p className="text-gray-600">Thủ tục đơn giản</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
