import { IInternet } from "@/@types/common";

function InternetService({
  data,
  isMesh = false,
  title,
}: {
  isMesh?: boolean;
  data: IInternet[];
  title: string;
}) {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#0D47A1]">
        {title}
      </h2>

      {/* Bảng Gộp 1 Cột */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
        <div className="bg-[#1976D2] text-white p-4 grid grid-cols-4 font-semibold text-sm md:text-base">
          <div>Gói Cước</div>
          <div>Tốc Độ</div>
          <div className="text-center">Giá</div>
          <div className="text-center">Thiết Bị</div>
        </div>
        {data.map((pkg, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-4 p-4 border-b last:border-b-0 hover:bg-yellow-50 transition-all duration-300 text-sm md:text-base bg-yellow-50/50"
            >
              <div className="font-bold text-gray-800">{`${pkg.months} tháng - ${pkg.name}`}</div>
              <div>{pkg.speed}</div>
              <div className="text-red-500 font-bold text-center">
                {pkg.price}/ {isMesh && 14} tháng
              </div>
              <div className="text-center">{pkg.devices}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InternetService;
