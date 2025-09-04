import React from "react";

const GuidingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Guiding You Towards Clarity and Success
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Navigating academic and career choices can be daunting. Our platform simplifies the journey by helping you choose the perfect stream, discover top government colleges, map out viable career paths, and track your admission progress with ease. We bridge the information gap, empowering you to make informed decisions for a promising future.
          </p>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-left">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Stream Selection</h3>
              </div>
              <p className="text-gray-600">Find the perfect academic stream that aligns with your strengths and career aspirations.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-100 text-left">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">College Discovery</h3>
              </div>
              <p className="text-gray-600">Explore top government colleges that match your academic profile and career goals.</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100 text-left">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Career Mapping</h3>
              </div>
              <p className="text-gray-600">Map out viable career paths based on your chosen stream and educational qualifications.</p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-100 text-left">
              <div className="flex items-start mb-4">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Admission Tracking</h3>
              </div>
              <p className="text-gray-600">Track your admission progress with ease and stay updated on important deadlines.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidingSection;