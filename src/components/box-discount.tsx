function BoxDiscount({ isMesh }: { isMesh?: boolean }) {
  return (
    <div className="mt-12 bg-gradient-to-r from-yellow-400 to-yellow-200 p-8 rounded-xl shadow-xl text-center max-w-4xl mx-auto">
      <p className="text-2xl font-bold text-green-800">
        🎉 LẮP ĐẶT HOÀN TOÀN <span className="underline">MIỄN PHÍ!</span>
      </p>
      {isMesh ? null : (
        <p className="text-lg text-gray-800 leading-relaxed">
          🔥 Đăng ký <strong>6 tháng</strong> – Tặng ngay{" "}
          <strong>2 tháng</strong>
          <br />
          🔥 Đăng ký <strong>12 tháng</strong> – Tặng ngay{" "}
          <strong>4 tháng</strong>
          <br />
        </p>
      )}
    </div>
  );
}

export default BoxDiscount;
