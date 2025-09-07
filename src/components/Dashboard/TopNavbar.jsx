import { User} from "lucide-react";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <header className="bg-gray-900  p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 h-20 border-b border-gray-800">
      <div className="flex items-center">
        <h1 className="text-xl md:text-3xl font-bold text-white">
          GuideMeM<span className="text-orange-500">ate</span>
        </h1>
      </div>

      <div className="flex items-center space-x-3">
        <Link className="flex items-center space-x-2 p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
          <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
          <span className="hidden sm:inline text-sm font-medium">John Doe</span>
        </Link>
      </div>
    </header>
  );
};

export default TopNavbar;
