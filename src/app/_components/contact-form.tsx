"use client";

import { FormProvider, useForm } from "react-hook-form";

import PACKAGES from "@/assets/datas";
import CInputValition from "@/components/ui/c-input/cinput-validation";
import CTextareaValition from "@/components/ui/c-textarea/c-textarea-validation";

function ContactForm() {
  const methods = useForm({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      address: "",
      services: {},
    },
  });

  const { handleSubmit, register } = methods;

  const submitHandler = handleSubmit(async (values) => {
    console.log(values);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby6NxIuDEtDM3YItB19UN3WCmslKWMOsTTRrlfKX9tTlHxxM-PQCEfdx_XQ6IRl1lWF/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      alert("Đăng ký thành công và đã lưu vào Google Sheets!");
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu:", error);
    }
  });

  return (
    <FormProvider {...methods}>
      <div className="py-20 bg-white" id="sign-in-now">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-16">Đăng Ký Ngay</h2>
          <form onSubmit={submitHandler} className="space-y-6">
            <div>
              <CInputValition
                name="fullName"
                type="text"
                label="Họ và Tên"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#51baf4]"
                required
              />
            </div>
            <div>
              <CInputValition
                name="phoneNumber"
                type="tel"
                label="Số Điện Thoại"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#51baf4]"
                required
              />
            </div>
            <div>
              <CTextareaValition
                label="Địa Chỉ"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#51baf4]"
                required
                name="address"
              />
            </div>
            <div>
              {/* <CSelectValidation
                options={[
                  ...PACKAGES.internet,
                  ...PACKAGES.prepaid,
                  ...PACKAGES.combo,
                ].map((pkg) => ({
                  label: `${pkg.name} - ${pkg.speed}`,
                  value: pkg.name,
                }))}
                name="services"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#51baf4]"
                required
                placeholder="Chọn gói cước"
                label="Gói Cước"
              /> */}

              <label className="block text-gray-700 mb-2">Gói Cước</label>
              <select
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#51baf4]"
                required
                {...register("services")}
              >
                {PACKAGES.internet.map((pkg, index) => (
                  <option key={index} value={pkg.name}>
                    {pkg.name} - {pkg.speed}
                  </option>
                ))}
                {PACKAGES.prepaid.map((pkg, index) => (
                  <option key={index} value={pkg.name}>
                    {pkg.name} - {pkg.speed}
                  </option>
                ))}
                {PACKAGES.combo.map((pkg, index) => (
                  <option key={index} value={pkg.name}>
                    {pkg.name} - {pkg.speed}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#51baf4] text-white py-3 rounded-lg font-medium hover:bg-blue-500 transition"
            >
              Gửi Đăng Ký
            </button>
          </form>
        </div>
      </div>
    </FormProvider>
  );
}

export default ContactForm;
