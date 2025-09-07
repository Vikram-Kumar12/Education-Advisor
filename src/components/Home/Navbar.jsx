import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navi = () => {
    navigate("/");
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-toggle")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: "Home", path:'#home' },
    { name: "How Works", path:'#howworks' },
    { name: "Guide", path:'#guide' },
    { name: "Features", path:'#features' },
    { name: "Mission", path:'#mission' },
  ];

  return (
    <nav
      className={`text-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black py-0"
          : "bg-gradient-to-b from-black to-transparent py-2"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25 }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 rounded-md border border-gray-800"
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={navi}
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <span className="text-2xl font-bold text-white">
              GuideMeM<span className="text-[#FD9333]">ate</span>
            </span>
          </div>

          {/* Center Navigation Items - Desktop */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  href={`${item.path}`}
                  className="text-gray-300 hover:text-white px-2 py-1 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FD9333] transition-all group-hover:w-full"></span>
                </a>

              ))}
            </div>
          </div>

          {/* Right side buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-300 hover:text-white px-3 py-2 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#FD9333] hover:bg-[#EA580C] cursor-pointer px-4 py-2 rounded-md transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-toggle inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-menu md:hidden bg-gray-900 border border-gray-800 rounded-md mt-2 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (          
                  <a
                  href={`${item.path}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md transition-colors"
                >
                  {item.name}
                </a>
                ))}

                <div className="pt-4 pb-2 border-t border-gray-800">
                  <Link
                    to="/login"
                    className="block w-full text-center text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md transition-colors mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block w-full text-center bg-[#FD9333] hover:bg-[#EA580C] text-white px-3 py-2 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
