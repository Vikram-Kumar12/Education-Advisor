import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [activeView, setActiveView] = useState('overview');
  const [savedItems, setSavedItems] = useState({
    courses: [
      { id: 1, name: 'B.Sc. Computer Science', tag: 'Undergraduate', saved: true },
      { id: 2, name: 'B.Tech. Electrical Engineering', tag: 'Undergraduate', saved: true },
      { id: 3, name: 'M.Sc. Data Science', tag: 'Postgraduate', saved: true },
    ],
    materials: [
      { id: 1, name: 'NCERT Physics Class 12 E-book', tag: 'E-book', saved: true },
      { id: 2, name: 'JEE Main Prep Course', tag: 'Online Course', saved: true },
      { id: 3, name: 'Scholarship Guide 2024', tag: 'Guide', saved: true },
    ]
  });

  // Function to remove saved item
  const removeSavedItem = (type, id) => {
    setSavedItems(prev => ({
      ...prev,
      [type]: prev[type].filter(item => item.id !== id)
    }));
  };

  // Animation for cards
  useEffect(() => {
    const cards = document.querySelectorAll('.dashboard-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
  }, [activeView]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Welcome back, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Alex!</span>
            </h1>
            <p className="text-gray-600">Here's your personalized career guidance dashboard</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <div className="relative">
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                A
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="action-btn bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600">
            <span className="mr-2">🔄</span> Retake Quiz
          </button>
          <button className="action-btn bg-white text-gray-700 border border-gray-200 hover:bg-gray-50">
            <span className="mr-2">👤</span> Update Profile
          </button>
          <button className="action-btn bg-white text-gray-700 border border-gray-200 hover:bg-gray-50">
            <span className="mr-2">📤</span> Share with Parent
          </button>
          <button className="action-btn bg-white text-gray-700 border border-gray-200 hover:bg-gray-50">
            <span className="mr-2">📊</span> Progress Report
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="stats-card bg-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Recommended Streams</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">3</h3>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <span className="text-2xl">🎓</span>
              </div>
            </div>
          </div>
          
          <div className="stats-card bg-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Saved Courses</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">{savedItems.courses.length}</h3>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <span className="text-2xl">📚</span>
              </div>
            </div>
          </div>
          
          <div className="stats-card bg-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Upcoming Deadlines</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">2</h3>
              </div>
              <div className="p-3 bg-red-100 rounded-lg">
                <span className="text-2xl">⏰</span>
              </div>
            </div>
          </div>
          
          <div className="stats-card bg-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Study Materials</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">{savedItems.materials.length}</h3>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <span className="text-2xl">📖</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recommended Streams */}
          <div className="dashboard-card lg:col-span-1 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg text-gray-900">Recommended Streams</h3>
              <span className="text-blue-500">🎯</span>
            </div>
            {[
              { title: 'Science', desc: 'Physics, Chemistry, Biology, Math', icon: '🧪', match: '92%' },
              { title: 'Commerce', desc: 'Accounts, Economics, Business Studies', icon: '🏛️', match: '85%' },
              { title: 'Arts', desc: 'History, Literature, Psychology', icon: '🎨', match: '78%' },
            ].map((item, index) => (
              <div key={index} className="mb-4 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                <div className="flex items-start gap-3">
                  <div className="text-2xl mt-1">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                        {item.match}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
                <button className="mt-3 text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Explore careers →
                </button>
              </div>
            ))}
          </div>

          {/* Colleges Near You */}
          <div className="dashboard-card lg:col-span-1 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg text-gray-900">Colleges Near You</h3>
              <span className="text-blue-500">🏫</span>
            </div>
            {[
              { name: 'City University of Technology', location: 'Mumbai', rating: 4.5, distance: '5.2 km' },
              { name: 'State College of Arts & Science', location: 'Pune', rating: 4.2, distance: '12.8 km' },
              { name: 'National Institute of Engineering', location: 'Bengaluru', rating: 4.7, distance: '8.5 km' },
            ].map((college, index) => (
              <div key={index} className="mb-4 p-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors duration-200">
                <p className="font-medium text-gray-900">{college.name}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">📍</span>
                    <span>{college.location}</span>
                    <span className="mx-2">•</span>
                    <span>{college.distance}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      ⭐ {college.rating}
                    </span>
                  </div>
                </div>
                <button className="mt-3 text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  View details →
                </button>
              </div>
            ))}
          </div>

          {/* Important Dates */}
          <div className="dashboard-card lg:col-span-1 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg text-gray-900">Important Dates</h3>
              <span className="text-blue-500">📅</span>
            </div>
            {[
              { date: 'June 05', desc: 'B.Sc. Admissions Deadline', status: 'urgent' },
              { date: 'June 15', desc: 'Scholarship Application Window Closes', status: 'upcoming' },
              { date: 'June 20', desc: 'Counseling Window Opens', status: 'upcoming' },
              { date: 'July 01', desc: 'Entrance Exam Results', status: 'future' },
            ].map((item, index) => (
              <div key={index} className="mb-3 flex items-start">
                <div className={`flex-shrink-0 w-14 h-14 rounded-lg flex flex-col items-center justify-center mr-3 ${
                  item.status === 'urgent' ? 'bg-red-100' : 
                  item.status === 'upcoming' ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <span className="font-bold text-gray-900">{item.date.split(' ')[0]}</span>
                  <span className="text-xs text-gray-600">{item.date.split(' ')[1]}</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-900">{item.desc}</p>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full mt-1 inline-block ${
                    item.status === 'urgent' ? 'bg-red-100 text-red-700' : 
                    item.status === 'upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {item.status === 'urgent' ? 'Urgent' : item.status === 'upcoming' ? 'Upcoming' : 'Future'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Courses + Study Material */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Saved Courses */}
          <div className="dashboard-card bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg text-gray-900">Saved Courses</h3>
              <span className="text-blue-500">🔖</span>
            </div>
            {savedItems.courses.map((course) => (
              <div key={course.id} className="mb-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200 group">
                <div className="flex justify-between items-start">
                  <p className="font-medium text-gray-900">{course.name}</p>
                  <button 
                    onClick={() => removeSavedItem('courses', course.id)}
                    className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-opacity duration-200"
                  >
                    ✕
                  </button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                    {course.tag}
                  </span>
                  <button className="text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    View details →
                  </button>
                </div>
              </div>
            ))}
            {savedItems.courses.length === 0 && (
              <div className="text-center py-4 text-gray-500">
                No saved courses yet. Start exploring and save your favorites!
              </div>
            )}
          </div>

          {/* Study Material */}
          <div className="dashboard-card bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg text-gray-900">Study Material</h3>
              <span className="text-blue-500">📚</span>
            </div>
            {savedItems.materials.map((material) => (
              <div key={material.id} className="mb-3 p-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors duration-200 group">
                <div className="flex justify-between items-start">
                  <p className="font-medium text-gray-900">{material.name}</p>
                  <button 
                    onClick={() => removeSavedItem('materials', material.id)}
                    className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-opacity duration-200"
                  >
                    ✕
                  </button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    {material.tag}
                  </span>
                  <button className="text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Download →
                  </button>
                </div>
              </div>
            ))}
            {savedItems.materials.length === 0 && (
              <div className="text-center py-4 text-gray-500">
                No study materials saved yet. Explore our resource library!
              </div>
            )}
          </div>
        </div>

        {/* Upcoming Events Preview */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-5">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Upcoming Events & Webinars</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <div className="text-sm text-blue-600 font-medium mb-2">Tomorrow • 3:00 PM</div>
              <h4 className="font-semibold text-gray-900">Career Counseling Session</h4>
              <p className="text-sm text-gray-600 mt-1">Get personalized guidance from industry experts</p>
              <button className="mt-3 text-sm text-blue-600 font-medium">Join event →</button>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <div className="text-sm text-blue-600 font-medium mb-2">June 10 • 10:00 AM</div>
              <h4 className="font-semibold text-gray-900">STEM Career Fair</h4>
              <p className="text-sm text-gray-600 mt-1">Connect with top universities and companies</p>
              <button className="mt-3 text-sm text-blue-600 font-medium">Register now →</button>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <div className="text-sm text-blue-600 font-medium mb-2">June 15 • 2:30 PM</div>
              <h4 className="font-semibold text-gray-900">Scholarship Workshop</h4>
              <p className="text-sm text-gray-600 mt-1">Learn how to apply for scholarships successfully</p>
              <button className="mt-3 text-sm text-blue-600 font-medium">Learn more →</button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .action-btn {
          padding: 0.6rem 1.2rem;
          border-radius: 0.75rem;
          font-weight: 500;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
        }
        
        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .stats-card {
          padding: 1.25rem;
          border-radius: 1rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .stats-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .dashboard-card {
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;