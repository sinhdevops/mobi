import FloatButton from "./float-button";
import Footer from "./footer";
import Header from "./header";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-[Poppins] text-gray-800 pt-16">
      <Header />
      {children}
      <Footer />
      <FloatButton />
    </div>
  );
}

export default MainLayout;
