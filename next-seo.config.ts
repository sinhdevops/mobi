// src/next-seo.config.ts
const SEO = {
    title: "Lắp đặt miễn phí tặng modem WIFI, tặng 2 - 4 tháng cước",
    description:
      "Dịch vụ lắp đặt mạng wifi MobiFone tại Đà Nẵng, tốc độ cao, giá siêu rẻ. Miễn phí modem, hỗ trợ kỹ thuật 24/7.",
    openGraph: {
      type: "website",
      locale: "vi_VN",
      title: "Lắp Mạng Mobi Đà Nẵng - Giá Rẻ, Miễn Phí Lắp Đặt",
      url: "https://https://www.lapmangmobi.store/",
      site_name: "Lắp Mạng Mobi Đà Nẵng",
      description: "Tốc độ cao, hỗ trợ 24/7, giá chỉ từ 150K/tháng.",
      images: [
        {
          url: "https://https://www.lapmangmobi.store/logo.png",
          width: 1200,
          height: 630,
          alt: "Lắp mạng wifi Mobi Đà Nẵng",
        },
      ],
    },
    keywords: [ "lắp mạng Đà Nẵng, wifi giá rẻ, wifi MobiFone, mạng mobi, lắp mạng mobi Đà Nẵng"],
    robots: "index, follow",
    metadataBase: new URL("https://www.lapmangmobi.store"),
    additionalMetaTags: [
      {
        name: "keywords",
        content:
          "lắp mạng Đà Nẵng, wifi giá rẻ, wifi MobiFone, mạng mobi, lắp mạng mobi Đà Nẵng",
      },
    ],
    other: {
        "google-site-verification": "kCHkvcBh-VZO7LczvWFIXLEQ6zAmbACPLnteoTlz6R4", 
      },
  };
  
  export default SEO;
  
