import React from 'react';
import { ChevronRight } from 'lucide-react';

const CoursesContent = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Explore Career Options by Stream</h2>
        <p className="text-gray-400">See what B.Sc., B.Tech, and other degrees lead to.</p>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-xl border border-orange-500/30">
          <h3 className="text-xl font-semibold text-white mb-6">Career Options by Stream</h3>
          <p className="text-gray-400 mb-6">
            Explore various degree programs and their potential career paths across different streams.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Science Stream Courses */}
            <div className="bg-gray-900 p-5 rounded-xl border border-orange-500/20">
              <h4 className="text-lg font-semibold text-orange-400 mb-4">Science Stream</h4>
              <div className="space-y-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <h5 className="font-medium text-white">B.Sc. Computer Science</h5>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Software Developer</span>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Data Analyst</span>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">System Admin</span>
                  </div>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg">
                  <h5 className="font-medium text-white">B.Sc. Physics</h5>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Research Scientist</span>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Lecturer</span>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Space Scientist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Commerce Stream Courses */}
            <div className="bg-gray-900 p-5 rounded-xl border border-orange-500/20">
              <h4 className="text-lg font-semibold text-orange-400 mb-4">Commerce Stream</h4>
              <div className="space-y-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <h5 className="font-medium text-white">B.Com (Hons) Accounting</h5>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Chartered Accountant</span>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Financial Analyst</span>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Tax Consultant</span>
                  </div>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg">
                  <h5 className="font-medium text-white">BBA Finance</h5>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Business Analyst</span>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Finance Manager</span>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Investment Banker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium">
              View All Courses and Career Options
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-orange-500/30">
          <h3 className="text-xl font-semibold text-white mb-4">View Colleges Offering These Courses</h3>
          <p className="text-gray-400 mb-6">
            Discover institutions that offer these programs with details on admissions, fees, and placements.
          </p>
          <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 px-4 rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-colors border border-orange-500/30">
            Explore Colleges
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesContent;