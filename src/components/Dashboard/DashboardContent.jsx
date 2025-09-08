import React from "react";
import { Link } from "react-router-dom";

const DashboardContent = () => {
  return (
    <div className="border border-orange-800 rounded-md bg-gray-800 min-h-screen text-white p-6 font-sans">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-orange-500">
          Hi Vikram! Here's your personalized dashboard.
        </h1>

        {/* Action Buttons */}
        <div className="flex space-x-4 mt-4">
          <button>
            <Link
              to="/quize"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Retake Quiz
            </Link>
          </button>
          <button>
            <Link
              to="/profile"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Update Profile
            </Link>
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Recommended Streams */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-orange-400 mb-4">
            Recommended Streams
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-md border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-300">Science</h3>
              <p className="text-gray-300 text-sm mt-1">
                Physics, Chemistry, Mathematics, Computer Science, Biology
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-md border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-300">Commerce</h3>
              <p className="text-gray-300 text-sm mt-1">
                Accounts, Business Studies, Economics, Entrepreneurship
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-md border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-300">Arts</h3>
              <p className="text-gray-300 text-sm mt-1">
                History, Political Science, Psychology, Hindi, English
                Literature
              </p>
            </div>
          </div>
        </div>
        {/* Colleges Near You */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-orange-400 mb-4">
            Colleges Near You
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">
                Jamshedpur Co-operative College
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Jamshedpur, Jharkhand
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">
                K.M.P.M. Inter College
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Jamshedpur, Jharkhand
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">
                Karim City College
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Jamshedpur, Jharkhand
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">
                Loyola College of Education
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Jamshedpur, Jharkhand
              </p>
            </div>
          </div>
        </div>

        {/* Important Dates */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-orange-400 mb-4">
            Important Dates
          </h2>

          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-orange-400 font-medium w-16">May 25</span>
              <span className="text-gray-300 ml-3">
                CUET Application Deadline
              </span>
            </div>

            <div className="flex items-center">
              <span className="text-orange-400 font-medium w-16">June 10</span>
              <span className="text-gray-300 ml-3">
                JAC 12th Result Announcement
              </span>
            </div>

            <div className="flex items-center">
              <span className="text-orange-400 font-medium w-16">June 20</span>
              <span className="text-gray-300 ml-3">
                UG Admission Forms Close (Local Colleges)
              </span>
            </div>

            <div className="flex items-center">
              <span className="text-orange-400 font-medium w-16">July 05</span>
              <span className="text-gray-300 ml-3">
                1st Merit List Announcement
              </span>
            </div>
          </div>
        </div>

        {/* Saved Courses */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-orange-400 mb-4">
            Saved Courses
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">
                BCA - Bachelor of Computer Applications
              </h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300 text-sm">Undergraduate</span>
                <button className="text-orange-500 hover:text-orange-400 text-sm">
                  View
                </button>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">
                B.Com. - Commerce with Computer Applications
              </h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300 text-sm">Undergraduate</span>
                <button className="text-orange-500 hover:text-orange-400 text-sm">
                  View
                </button>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">
                M.A. - English Literature
              </h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300 text-sm">Postgraduate</span>
                <button className="text-orange-500 hover:text-orange-400 text-sm">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Study Material */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-orange-400 mb-4">
            Study Material
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">
                JAC Board Physics Class 12 Guide
              </h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300 text-sm">PDF Guide</span>
                <button className="text-orange-500 hover:text-orange-400 text-sm">
                  Download
                </button>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">
                CUET UG 2025 Prep Course
              </h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300 text-sm">Online Course</span>
                <button className="text-orange-500 hover:text-orange-400 text-sm">
                  Enroll
                </button>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-md">
              <h3 className="font-semibold text-orange-300">
                Jharkhand Govt. Scholarship Guide
              </h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300 text-sm">PDF Guide</span>
                <button className="text-orange-500 hover:text-orange-400 text-sm">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Created with ❤️ for students in Jharkhand</p>
      </div>
    </div>
  );
};

export default DashboardContent;
