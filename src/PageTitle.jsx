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
    </div>
  );
}

export default PageTitle;
