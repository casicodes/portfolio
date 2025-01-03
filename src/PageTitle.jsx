import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { playClickSound } from "./utils/audioUtils.js";
function PageTitle() {
  return (
    <div className="flex flex-col gap-y-2">
      <Link
        onClick={playClickSound}
        to="/"
        className="w-[44px] h-[44px] flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-300 rounded-full"
      >
        <ArrowLeft size={20} />
      </Link>
    </div>
  );
}

export default PageTitle;
