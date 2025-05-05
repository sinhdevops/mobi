import { FaPhone } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

function FloatButton() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center gap-1">
        <FaPhone className="text-2xl" />
        0325610016
      </div>
      <a
        href="https://zalo.me/0325610016"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition flex items-center gap-1"
      >
        <SiZalo className="text-2xl" />
        0325610016
      </a>
    </div>
  );
}

export default FloatButton;
