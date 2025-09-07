import React from 'react';

const DashboardContent = () => {
  return (
    <div className="bg-black min-h-screen text-white p-6 font-sans">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-orange-500">Hi Alex! Here's your personalized dashboard.</h1>
        
        {/* Action Buttons */}
        <div className="flex space-x-4 mt-4">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-colors">
            Retake Quiz
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-colors">
            Update Profile
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-colors">
            Share with Parent
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Recommended Streams */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-orange-400 mb-4">Recommended Streams</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-md border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-300">Science</h3>
              <p className="text-gray-300 text-sm mt-1">Physics, Chemistry, Biology, Math</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-md border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-300">Commerce</h3>
              <p className="text-gray-300 text-sm mt-1">Accounts, Economics, Business Studies</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-md border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-300">Arts</h3>
              <p className="text-gray-300 text-sm mt-1">History, Literature, Psychology</p>
            </div>
          </div>
        </div>

        {/* Colleges Near You */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-orange-400 mb-4">Colleges Near You</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">City University of Technology</h3>
              <p className="text-gray-300 text-sm mt-1">Mumbai</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">State College of Arts & Science</h3>
              <p className="text-gray-300 text-sm mt-1">Pune</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">National Institute of Engineering</h3>
              <p className="text-gray-300 text-sm mt-1">Bengaluru</p>
            </div>
          </div>
        </div>

        {/* Important Dates */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-orange-400 mb-4">Important Dates</h2>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-orange-400 font-medium w-16">June 05</span>
              <span className="text-gray-300 ml-3">B.Sc. Admissions Deadline</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-orange-400 font-medium w-16">June 15</span>
              <span className="text-gray-300 ml-3">Scholarship Application Window Closes</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-orange-400 font-medium w-16">June 20</span>
              <span className="text-gray-300 ml-3">Counseling Window Opens</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-orange-400 font-medium w-16">July 01</span>
              <span className="text-gray-300 ml-3">Entrance Exam Results</span>
            </div>
          </div>
        </div>

        {/* Saved Courses */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-orange-400 mb-4">Saved Courses</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">B.Sc. Computer Science</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300 text-sm">Undergraduate</span>
                <button className="text-orange-500 hover:text-orange-400 text-sm">View</button>
              </div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">B.Tech. Electrical Engineering</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300 text-sm">Undergraduate</span>
                <button className="text-orange-500 hover:text-orange-400 text-sm">View</button>
              </div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">M.Sc. Data Science</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300 text-sm">Postgraduate</span>
                <button className="text-orange-500 hover:text-orange-400 text-sm">View</button>
              </div>
            </div>
          </div>
        </div>

        {/* Study Material */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-orange-400 mb-4">Study Material</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">NCERT Physics Class 12 E-book</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300 text-sm">E-book</span>
                <button className="text-orange-500 hover:text-orange-400 text-sm">Download</button>
              </div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">JEE Main Prep Course</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300 text-sm">Open Course</span>
                <button className="text-orange-500 hover:text-orange-400 text-sm">Enroll</button>
              </div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">Scholarship Guide 2024</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300 text-sm">Guide</span>
                <button className="text-orange-500 hover:text-orange-400 text-sm">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Created with ❤️ for students</p>
      </div>
    </div>
  );
};

export default DashboardContent;

