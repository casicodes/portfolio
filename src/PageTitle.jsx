import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
function PageTitle() {
  return (
    <div className="flex flex-col gap-y-2">
      <Link
        to="/"
        className="w-[36px] h-[36px] flex items-center justify-center bg-gray-100 rounded-full"
      >
        <ArrowLeft size={20} />
      </Link>
      <p className="text-gray-500 text-lg font-light text-balance">
        Motion library, where I create micro-interactions using react, tailwind
        & framer motion.
      </p>
    </div>
  );
}

export default PageTitle;
