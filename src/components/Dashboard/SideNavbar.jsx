import React from "react";
import {
  LayoutDashboard,
  HelpCircle,
  BookOpen,
  School,
  Calendar,
  FileText,
  Settings,
  X,
  Menu,
} from "lucide-react";

const SideNavbar = ({
  activeItem,
  setActiveItem,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    // { id: "quiz", label: "Quiz", icon: HelpCircle },
    { id: "courses", label: "Courses", icon: BookOpen },
    { id: "colleges", label: "Colleges", icon: School },
    { id: "timeline", label: "Timeline", icon: Calendar },
    { id: "resources", label: "Resources", icon: FileText },
    // { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-20 left-0 h-[calc(100vh-5rem)] w-64 bg-gray-900  z-40 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* For mobile */}
        <div className="lg:hidden p-4 flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className=" text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        {/* Dashboard content */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveItem(item.id);
                      window.innerWidth < 1024 && setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                      activeItem === item.id
                        ? "bg-orange-900/30 text-orange-400 border border-orange-500/30"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-4 right-4 lg:hidden z-50 p-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-colors"
      >
        <Menu className="h-6 w-6" />
      </button>
    </>
  );
};

export default SideNavbar;
