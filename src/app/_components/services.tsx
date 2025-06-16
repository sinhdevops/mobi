import InternetService from "@/components/internet-services";
import DATA from "@/assets/datas/data";
import BoxDiscount from "@/components/box-discount";

function Services() {
  return (
    <div className="py-20 bg-gray-50" id="services">
      <InternetService data={DATA.onlyWifi} title="Gói Cước Internet" />
      <BoxDiscount />

      <div className="pt-5">
        <InternetService
          data={DATA.combo}
          title="Gói Cước Internet + App Truyền Hình"
        />
        <BoxDiscount />
      </div>
      <div className="pt-5">
        <InternetService
          data={DATA.mesh}
          isMesh
          title="Gói Cước Internet Mesh chu kì 14 tháng"
        />
        <BoxDiscount isMesh />
      </div>
    </div>
  );
}

export default Services;
