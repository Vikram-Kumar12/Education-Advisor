import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r h-screen from-blue-50 to-indigo-50 py-16 md:py-24">
      <div className="container h-full mx-auto px-4">
        <div className="flex flex-col h-full lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 max-w-2xl text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
              Your One-Stop Career & Education Advisor
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Discover the right course, the right college, and the right future — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 lg:justify-start justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition">
                Get Started
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md border border-blue-100 transition">
                Explore Features
              </button>
            </div>
            <p className="text-gray-500 text-sm md:text-base">
              Free for students • Designed for every government college aspirant
            </p>
          </div>
          
          {/* Image Content */}
          <div className="lg:w-1/2  h-full flex flex-col items-center justify-center">
            <div className="relative h-[60%] w-full ">
              <img 
                src="https://media.istockphoto.com/id/2217640110/photo/three-teenage-school-students-studying-on-book-together-and-discussing-about-studying-by.webp?a=1&b=1&s=612x612&w=0&k=20&c=ku6xQ0P6C-_zUcGPwhLIHGj77thl2TwFyP7uwZO7bXg=" 
                alt="Students collaborating" 
                className="rounded-lg h-full w-[80%] shadow-xl"
              />
              <div className="absolute -bottom-14 -left-14 bg-white p-4 rounded-lg shadow-md hidden md:block">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">5000+ Success Stories</p>
                    <p className="text-sm text-gray-500">Students placed in top colleges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;