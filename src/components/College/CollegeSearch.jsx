// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const CollegeSearch = () => {
//   const [pin, setPin] = useState("");
//   const [state, setState] = useState("");
//   const [degree, setDegree] = useState("");
//   const navigate = useNavigate();

//   const handleReset = () => {
//     setPin("");
//     setState("");
//     setDegree("");
//   };

//   const handleSearch = () => {
//     navigate("/college-list");
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//       },
//     },
//   };

//   const cardHoverVariants = {
//     hover: {
//       y: -5,
//       boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen border border-gray-800 bg-gray-900 rounded-md p-6">
//       <div className="relative max-w-6xl mx-auto pt-10 pb-16">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-10"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.h1
//             className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             Discover Your Perfect College
//           </motion.h1>
//           <motion.p
//             className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//           >
//             Find the best government colleges tailored to your preferences and
//             location
//           </motion.p>
//         </motion.div>
//         {/* College Images */}
//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           <motion.div
//             className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
//             variants={cardHoverVariants}
//             whileHover="hover"
//           >
//             <div className="h-80 overflow-hidden">
//               <motion.img
//                 src="/assets/Images/1.png"
//                 alt="College Campus"
//                 className="w-full h-full object-cover"
//                 initial={{ scale: 1.1 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.7 }}
//                 whileHover={{ scale: 1.05 }}
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2 text-orange-400">
//                 Why Choose Government Colleges?
//               </h3>
//               <p className="text-gray-300">
//                 Government colleges offer accredited programs, experienced
//                 faculty, and affordable education that can kickstart your career
//                 without burdening you with debt.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
//             variants={cardHoverVariants}
//             whileHover="hover"
//           >
//             <div className="h-80 overflow-hidden">
//               <motion.img
//                 src="/assets/Images/2.png"
//                 alt="Students studying"
//                 className="w-full h-full object-cover"
//                 initial={{ scale: 1.1 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 whileHover={{ scale: 1.05 }}
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2 text-orange-400">
//                 Find Your Perfect Match
//               </h3>
//               <p className="text-gray-300">
//                 Our search helps you discover colleges that match your academic
//                 interests, location preferences, and career goals all in one
//                 place.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//         {/* College search location */}
//         <motion.div
//           className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.5 }}
//           variants={cardHoverVariants}
//           whileHover="hover"
//         >
//           <div className="p-8">
//             <motion.h2
//               className="text-2xl font-bold mb-6 text-start text-orange-400"
//               variants={itemVariants}
//             >
//               Find Colleges Near You
//             </motion.h2>

//             <motion.div
//               className="grid md:grid-cols-3 gap-6 mb-8"
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <motion.div variants={itemVariants} className="flex flex-col">
//                 <label className="text-sm font-medium text-gray-300 mb-2">
//                   PIN Code
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <svg
//                       className="h-5 w-5 text-gray-500"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                     </svg>
//                   </div>
//                   <input
//                     type="text"
//                     placeholder="Enter PIN Code"
//                     value={pin}
//                     onChange={(e) => setPin(e.target.value)}
//                     className="border border-gray-700 bg-gray-900 text-white p-3 rounded-lg pl-10 w-full outline-none"
//                   />
//                 </div>
//               </motion.div>
//               <motion.div variants={itemVariants} className="flex flex-col">
//                 <label className="text-sm font-medium text-gray-300 mb-2">
//                   Degree Type
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <svg
//                       className="h-5 w-5 text-gray-500"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 14l9-5-9-5-9 5 9 5z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 14l9-5-9-5-9 5 9 5z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 14v6l9-5m-9 5l-9-5m9 5v-6m0 0l-9-5m9 5l9-5"
//                       />
//                     </svg>
//                   </div>
//                   <select
//                     value={degree}
//                     onChange={(e) => setDegree(e.target.value)}
//                     className="border border-gray-700 bg-gray-900 text-white p-3 rounded-lg pl-10 w-full appearance-none outline-none transition"
//                   >
//                     <option value="">Select Degree Type</option>
//                     <option value="BA">B.A. (Bachelor of Arts)</option>
//                     <option value="BSc">B.Sc. (Bachelor of Science)</option>
//                     <option value="BCom">B.Com. (Bachelor of Commerce)</option>
//                     <option value="BBA">
//                       BBA (Bachelor of Business Administration)
//                     </option>
//                     <option value="BTech">
//                       B.Tech (Bachelor of Technology)
//                     </option>
//                     <option value="BEd">B.Ed (Bachelor of Education)</option>
//                   </select>
//                   <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                     <svg
//                       className="h-4 w-4 text-gray-500"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               className="flex flex-col sm:flex-row justify-start gap-4"
//               variants={itemVariants}
//             >
//               <motion.button
//                 onClick={handleReset}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 border border-gray-600 rounded-lg text-gray-300 font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//                   />
//                 </svg>
//                 Reset Filters
//               </motion.button>
//               <motion.button
//                 onClick={handleSearch}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:from-orange-700 hover:to-orange-600 transition shadow-md"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//                 Search Colleges
//               </motion.button>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CollegeSearch;

import React, { useState } from "react";
import { motion } from "framer-motion";
import CollegeList from "./CollegeList";

const CollegeSearch = () => {
  const [pin, setPin] = useState("");
  const [state, setState] = useState("");
  const [degree, setDegree] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [searchData, setSearchData] = useState({});

  const handleReset = () => {
    setPin("");
    setState("");
    setDegree("");
  };

  const handleSearch = () => {
    setSearchData({ pin, state, degree });
    setShowResults(true);
  };

  const handleCloseResults = () => {
    setShowResults(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen border border-gray-800 bg-gray-900 rounded-md p-6">
      <div className="relative max-w-6xl mx-auto pt-10 pb-16">
        {!showResults ? (
          <>
            {/* Header */}
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Discover Your Perfect College
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Find the best government colleges tailored to your preferences and
                location
              </motion.p>
            </motion.div>
            
            {/* College Images */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
                variants={cardHoverVariants}
                whileHover="hover"
              >
                <div className="h-80 overflow-hidden">
                  <motion.img
                    src="/assets/Images/1.png"
                    alt="College Campus"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7 }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-orange-400">
                    Why Choose Government Colleges?
                  </h3>
                  <p className="text-gray-300">
                    Government colleges offer accredited programs, experienced
                    faculty, and affordable education that can kickstart your career
                    without burdening you with debt.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
                variants={cardHoverVariants}
                whileHover="hover"
              >
                <div className="h-80 overflow-hidden">
                  <motion.img
                    src="/assets/Images/2.png"
                    alt="Students studying"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-orange-400">
                    Find Your Perfect Match
                  </h3>
                  <p className="text-gray-300">
                    Our search helps you discover colleges that match your academic
                    interests, location preferences, and career goals all in one
                    place.
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* College search location */}
            <motion.div
              className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              variants={cardHoverVariants}
              whileHover="hover"
            >
              <div className="p-8">
                <motion.h2
                  className="text-2xl font-bold mb-6 text-start text-orange-400"
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
                    <label className="text-sm font-medium text-gray-300 mb-2">
                      PIN Code
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter PIN Code"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        className="border border-gray-700 bg-gray-900 text-white p-3 rounded-lg pl-10 w-full outline-none"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex flex-col">
                    <label className="text-sm font-medium text-gray-300 mb-2">
                      Degree Type
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14v6l9-5m-9 5l-9-5m9 5v-6m0 0l-9-5m9 5l9-5"
                          />
                        </svg>
                      </div>
                      <select
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                        className="border border-gray-700 bg-gray-900 text-white p-3 rounded-lg pl-10 w-full appearance-none outline-none transition"
                      >
                        <option value="">Select Degree Type</option>
                        <option value="BA">B.A. (Bachelor of Arts)</option>
                        <option value="BSc">B.Sc. (Bachelor of Science)</option>
                        <option value="BCom">B.Com. (Bachelor of Commerce)</option>
                        <option value="BBA">
                          BBA (Bachelor of Business Administration)
                        </option>
                        <option value="BTech">
                          B.Tech (Bachelor of Technology)
                        </option>
                        <option value="BEd">B.Ed (Bachelor of Education)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="h-4 w-4 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row justify-start gap-4"
                  variants={itemVariants}
                >
                  <motion.button
                    onClick={handleReset}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border border-gray-600 rounded-lg text-gray-300 font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Reset Filters
                  </motion.button>
                  <motion.button
                    onClick={handleSearch}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:from-orange-700 hover:to-orange-600 transition shadow-md"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    Search Colleges
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        ) : (
          <CollegeList 
            searchData={searchData} 
            onClose={handleCloseResults} 
          />
        )}
      </div>
    </div>
  );
};

export default CollegeSearch;
