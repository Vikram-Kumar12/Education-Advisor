// CollegeSearch.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CollegeSearch = () => {
  const [pin, setPin] = useState("");
  const [state, setState] = useState("");
  const [degree, setDegree] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    setPin("");
    setState("");
    setDegree("");
  };

  const handleSearch = () => {
    navigate("/college-list");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200 opacity-20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto pt-10 pb-16">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Discover Your Perfect College
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Find the best government colleges tailored to your preferences and location
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-xl"
            variants={cardHoverVariants}
            whileHover="hover"
          >
            <div className="h-48 overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                alt="College Campus"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.05 }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Why Choose Government Colleges?</h3>
              <p className="text-gray-600">
                Government colleges offer accredited programs, experienced faculty, and affordable education 
                that can kickstart your career without burdening you with debt.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-xl"
            variants={cardHoverVariants}
            whileHover="hover"
          >
            <div className="h-48 overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1569848771194-2dbfe01f4e96"
                alt="Students studying"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Find Your Perfect Match</h3>
              <p className="text-gray-600">
                Our search helps you discover colleges that match your academic interests, location preferences, 
                and career goals all in one place.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={cardHoverVariants}
          whileHover="hover"
        >
          <div className="p-8">
            <motion.h2 
              className="text-2xl font-bold mb-6 text-center text-gray-800"
              variants={itemVariants}
            >
              Find Colleges Near You
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-6 mb-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">PIN Code</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter PIN Code"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="border border-gray-300 p-3 rounded-lg pl-10 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">State</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="border border-gray-300 p-3 rounded-lg pl-10 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Degree Type</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6l9-5m-9 5l-9-5m9 5v-6m0 0l-9-5m9 5l9-5" />
                    </svg>
                  </div>
                  <select
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    className="border border-gray-300 p-3 rounded-lg pl-10 w-full appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  >
                    <option value="">Select Degree Type</option>
                    <option value="BA">B.A. (Bachelor of Arts)</option>
                    <option value="BSc">B.Sc. (Bachelor of Science)</option>
                    <option value="BCom">B.Com. (Bachelor of Commerce)</option>
                    <option value="BBA">BBA (Bachelor of Business Administration)</option>
                    <option value="BTech">B.Tech (Bachelor of Technology)</option>
                    <option value="BEd">B.Ed (Bachelor of Education)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row justify-end gap-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={handleReset}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset Filters
              </motion.button>
              <motion.button
                onClick={handleSearch}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transition shadow-md"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Colleges
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Not sure where to start?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Browse our curated list of top-rated government colleges across different states and degree programs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-blue-500 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
            onClick={() => navigate("/featured-colleges")}
          >
            Explore Featured Colleges
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CollegeSearch;