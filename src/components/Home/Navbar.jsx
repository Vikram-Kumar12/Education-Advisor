import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed top-0 left-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-700">
          CareerGuide
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Courses</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Colleges</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Resources</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-blue-600 hover:text-blue-800 font-medium">
            Login
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Sign Up
          </button>
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;