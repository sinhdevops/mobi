import { services } from "@/assets/datas";

function Services() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Gói Cước Internet
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Gói Gia Đình</h3>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#51baf4] text-white p-4 grid grid-cols-4 font-bold">
                <div>Gói Cước</div>
                <div>Tốc Độ</div>
                <div className="text-center">Giá</div>
                <div>Thiết Bị</div>
              </div>
              {services.household.map((pkg, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 p-4 border-b last:border-b-0 hover:bg-yellow-50 transition-all duration-300 bg-yellow-50/50"
                >
                  <div className="font-bold">{pkg.name}</div>
                  <div>{pkg.speed}</div>
                  <div className="text-red-500 font-bold text-center">
                    {pkg.price}
                  </div>
                  <div>{pkg.devices}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Gói Doanh Nghiệp</h3>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#51baf4] text-white p-4 grid grid-cols-4 font-bold">
                <div>Gói Cước</div>
                <div>Tốc Độ</div>
                <div className="text-center">Giá</div>
                <div>Thiết Bị</div>
              </div>
              {services.business.map((pkg, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 p-4 border-b last:border-b-0 hover:bg-yellow-50 transition-all duration-300 bg-yellow-50/50"
                >
                  <div className="font-bold">{pkg.name}</div>
                  <div>{pkg.speed}</div>
                  <div className="text-red-500 font-bold text-center">
                    {pkg.price}
                  </div>
                  <div>{pkg.devices}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
