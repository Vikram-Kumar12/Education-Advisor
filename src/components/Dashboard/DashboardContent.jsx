import React from 'react';
import { HelpCircle, BookOpen, ChevronRight, Clock } from 'lucide-react';

const DashboardContent = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Dashboard Overview</h2>
        <p className="text-gray-400">Welcome back! Here's your personalized dashboard.</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-lg font-semibold text-white mb-2">Completed Quizzes</h3>
            <p className="text-3xl font-bold text-orange-500">3</p>
            <p className="text-gray-400 mt-2">Keep learning!</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-lg font-semibold text-white mb-2">Saved Courses</h3>
            <p className="text-3xl font-bold text-orange-500">7</p>
            <p className="text-gray-400 mt-2">Explore more options</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-lg font-semibold text-white mb-2">College Applications</h3>
            <p className="text-3xl font-bold text-orange-500">2</p>
            <p className="text-gray-400 mt-2">Track your progress</p>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-orange-500/30">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="p-2 bg-orange-500/20 rounded-lg mr-3">
                  <HelpCircle className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-white font-medium">Completed Stream Assessment</p>
                  <p className="text-gray-400 text-sm">2 hours ago</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">Quiz</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
              <div className="flex items-center">
                <div className="p-2 bg-orange-500/20 rounded-lg mr-3">
                  <BookOpen className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-white font-medium">Saved B.Sc. Computer Science</p>
                  <p className="text-gray-400 text-sm">1 day ago</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">Course</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;