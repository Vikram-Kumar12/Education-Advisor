// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   BookOpen, 
//   Briefcase, 
//   GraduationCap, 
//   DollarSign, 
//   MapPin, 
//   Clock, 
//   Users, 
//   Award,
//   ArrowLeft,
//   ChevronRight,
//   Star,
//   Target,
//   Bookmark,
//   Share2
// } from 'lucide-react';
// import { useParams } from 'react-router-dom';

// const CourseDetails = ({ course, onBack }) => {
//   const {p} = useParams()
//   console.log("p :",p);
  
//   const [activeTab, setActiveTab] = useState('overview');
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [courseData, setCourseData] = useState(null);

//   // Sample course data for all streams
//   const allCourses = {
//     science: {
//       id: 1,
//       title: "B.Sc. Computer Science",
//       stream: "Science",
//       duration: "3 years",
//       eligibility: "10+2 with Science stream",
//       avgFee: "₹15,000 - ₹50,000 per year",
//       rating: 4.5,
//       reviews: 124,
//       description: "Bachelor of Science in Computer Science is a undergraduate degree that focuses on the fundamentals of computer systems, software development, and applications of computer technology.",
//       careers: ["Software Developer", "Data Analyst", "System Administrator", "Cloud Engineer", "AI Specialist", "Web Developer", "Database Administrator"],
//       entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "State CETs", "CUET"],
//       skills: ["Programming", "Data Structures", "Algorithms", "Database Management", "Web Development", "Software Engineering", "Problem Solving"],
//       salaryRange: "₹4-12 LPA (Fresh Graduates)",
//       topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Microsoft", "Google", "Amazon"],
//       growth: "15% (Much faster than average)",
//       colleges: 243
//     },
//     commerce: {
//       id: 2,
//       title: "B.Com. (Hons) Accounting",
//       stream: "Commerce",
//       duration: "3 years",
//       eligibility: "10+2 with Commerce stream",
//       avgFee: "₹12,000 - ₹40,000 per year",
//       rating: 4.3,
//       reviews: 98,
//       description: "Bachelor of Commerce in Accounting provides comprehensive knowledge of accounting principles, financial management, taxation, and business laws.",
//       careers: ["Chartered Accountant", "Financial Analyst", "Tax Consultant", "Auditor", "Investment Banker", "Finance Manager"],
//       entranceExams: ["CUET", "IPU CET", "SET", "NPAT", "AIMA UGAT"],
//       skills: ["Accounting", "Financial Analysis", "Taxation", "Auditing", "Business Law", "Excel", "Financial Reporting"],
//       salaryRange: "₹3-10 LPA (Fresh Graduates)",
//       topRecruiters: ["Big 4 Accounting Firms", "Banks", "Financial Institutions", "Corporate Houses", "Consulting Firms"],
//       growth: "12% (Faster than average)",
//       colleges: 187
//     },
//     arts: {
//       id: 3,
//       title: "B.A. Psychology",
//       stream: "Arts",
//       duration: "3 years",
//       eligibility: "10+2 from any stream",
//       avgFee: "₹8,000 - ₹30,000 per year",
//       rating: 4.2,
//       reviews: 87,
//       description: "Bachelor of Arts in Psychology explores human behavior, mental processes, and psychological principles through theoretical and practical approaches.",
//       careers: ["Clinical Psychologist", "Counselor", "HR Specialist", "Social Worker", "Researcher", "Educational Psychologist"],
//       entranceExams: ["CUET", "TISS BAT", "IPU CET", "DUET", "BHU UET"],
//       skills: ["Counseling", "Research Methods", "Communication", "Empathy", "Critical Thinking", "Behavioral Analysis"],
//       salaryRange: "₹3-8 LPA (Fresh Graduates)",
//       topRecruiters: ["Hospitals", "Educational Institutions", "NGOs", "Corporate HR", "Research Centers", "Rehabilitation Centers"],
//       growth: "10% (Faster than average)",
//       colleges: 156
//     },
//     vocational: {
//       id: 4,
//       title: "Diploma in Digital Marketing",
//       stream: "Vocational",
//       duration: "1-2 years",
//       eligibility: "10+2 from any stream",
//       avgFee: "₹20,000 - ₹60,000 total",
//       rating: 4.4,
//       reviews: 112,
//       description: "Diploma in Digital Marketing provides practical skills in online marketing strategies, social media management, SEO, and digital advertising.",
//       careers: ["Digital Marketing Specialist", "SEO Analyst", "Social Media Manager", "Content Marketer", "PPC Specialist", "Email Marketing Manager"],
//       entranceExams: ["Institutional Tests", "Direct Admission", "Merit-based"],
//       skills: ["SEO", "Social Media Marketing", "Google Analytics", "Content Creation", "PPC Advertising", "Email Marketing"],
//       salaryRange: "₹2.5-7 LPA (Fresh Graduates)",
//       topRecruiters: ["Digital Agencies", "E-commerce Companies", "Startups", "Media Houses", "Freelance Opportunities"],
//       growth: "18% (Much faster than average)",
//       colleges: 89
//     }
//   };

//   // Get course data from URL params or default to science
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     console.log("urlParams :",urlParams);
    
//     const stream = urlParams.get('stream') || 'science';
//     setCourseData(allCourses[stream] || allCourses.science);
//   }, []);

//   if (!courseData) {
//     return <div className="min-h-screen bg-black flex items-center justify-center">Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff8000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           backgroundSize: '60px 60px'
//         }}></div>
//       </div>
      
//       {/* Glowing effects */}
//       <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-500 rounded-full filter blur-3xl opacity-20"></div>
//       <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange-600 rounded-full filter blur-3xl opacity-20"></div>

//       <div className="max-w-6xl mx-auto w-full relative z-10">
//         {/* Header with back button and actions */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-gray-900 rounded-xl shadow-lg p-6 mb-6 border border-orange-500/20"
//         >
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <div className="flex items-center">
//               <button 
//                 onClick={onBack}
//                 className="flex items-center text-orange-400 hover:text-orange-300 mr-4 transition-colors"
//               >
//                 <ArrowLeft className="h-5 w-5 mr-1" />
//                 Back
//               </button>
//               <div className="h-6 w-1 bg-orange-500 mr-4"></div>
//               <div>
//                 <span className="inline-block px-3 py-1 bg-orange-900/30 text-orange-300 rounded-full text-sm font-medium mb-2 border border-orange-500/30">
//                   {courseData.stream}
//                 </span>
//                 <h1 className="text-2xl md:text-3xl font-bold text-white">{courseData.title}</h1>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-2">
//               <button 
//                 onClick={() => setIsBookmarked(!isBookmarked)}
//                 className={`p-2 rounded-full ${isBookmarked ? 'bg-orange-900/30 text-orange-400 border border-orange-500/30' : 'bg-gray-800 text-gray-400 border border-gray-700'} hover:bg-orange-900/20 transition-colors`}
//               >
//                 <Bookmark className="h-5 w-5" fill={isBookmarked ? "currentColor" : "none"} />
//               </button>
//               <button className="p-2 rounded-full bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700 transition-colors">
//                 <Share2 className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Left Column - Course Info */}
//           <div className="lg:col-span-2">
//             {/* Navigation Tabs */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="bg-gray-900 rounded-xl shadow-lg p-4 mb-6 overflow-x-auto border border-orange-500/20"
//             >
//               <div className="flex flex-nowrap gap-1 md:gap-2">
//                 <button
//                   onClick={() => setActiveTab('overview')}
//                   className={`flex items-center px-4 py-2 rounded-lg font-medium whitespace-nowrap border ${
//                     activeTab === 'overview'
//                       ? 'bg-orange-900/30 text-orange-400 border-orange-500/50'
//                       : 'text-gray-400 hover:bg-gray-800 border-gray-700'
//                   }`}
//                 >
//                   <BookOpen className="h-4 w-4 mr-2" />
//                   Overview
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('careers')}
//                   className={`flex items-center px-4 py-2 rounded-lg font-medium whitespace-nowrap border ${
//                     activeTab === 'careers'
//                       ? 'bg-orange-900/30 text-orange-400 border-orange-500/50'
//                       : 'text-gray-400 hover:bg-gray-800 border-gray-700'
//                   }`}
//                 >
//                   <Briefcase className="h-4 w-4 mr-2" />
//                   Career Paths
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('exams')}
//                   className={`flex items-center px-4 py-2 rounded-lg font-medium whitespace-nowrap border ${
//                     activeTab === 'exams'
//                       ? 'bg-orange-900/30 text-orange-400 border-orange-500/50'
//                       : 'text-gray-400 hover:bg-gray-800 border-gray-700'
//                   }`}
//                 >
//                   <GraduationCap className="h-4 w-4 mr-2" />
//                   Entrance Exams
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('skills')}
//                   className={`flex items-center px-4 py-2 rounded-lg font-medium whitespace-nowrap border ${
//                     activeTab === 'skills'
//                       ? 'bg-orange-900/30 text-orange-400 border-orange-500/50'
//                       : 'text-gray-400 hover:bg-gray-800 border-gray-700'
//                   }`}
//                 >
//                   <Award className="h-4 w-4 mr-2" />
//                   Related Skills
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('salary')}
//                   className={`flex items-center px-4 py-2 rounded-lg font-medium whitespace-nowrap border ${
//                     activeTab === 'salary'
//                       ? 'bg-orange-900/30 text-orange-400 border-orange-500/50'
//                       : 'text-gray-400 hover:bg-gray-800 border-gray-700'
//                   }`}
//                 >
//                   <DollarSign className="h-4 w-4 mr-2" />
//                   Salary
//                 </button>
//               </div>
//             </motion.div>

//             {/* Content based on active tab */}
//             <motion.div 
//               key={activeTab}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="bg-gray-900 rounded-xl shadow-lg overflow-hidden mb-6 border border-orange-500/20"
//             >
//               <div className="p-6">
//                 {activeTab === 'overview' && (
//                   <div>
//                     <h2 className="text-xl font-bold text-white mb-4">Course Overview</h2>
//                     <p className="text-gray-400 mb-6">{courseData.description}</p>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                       <div className="flex items-center">
//                         <Clock className="h-5 w-5 text-orange-500 mr-3" />
//                         <div>
//                           <p className="text-sm text-gray-500">Duration</p>
//                           <p className="font-medium text-white">{courseData.duration}</p>
//                         </div>
//                       </div>
//                       <div className="flex items-center">
//                         <Target className="h-5 w-5 text-orange-500 mr-3" />
//                         <div>
//                           <p className="text-sm text-gray-500">Eligibility</p>
//                           <p className="font-medium text-white">{courseData.eligibility}</p>
//                         </div>
//                       </div>
//                       <div className="flex items-center">
//                         <DollarSign className="h-5 w-5 text-orange-500 mr-3" />
//                         <div>
//                           <p className="text-sm text-gray-500">Average Fees</p>
//                           <p className="font-medium text-white">{courseData.avgFee}</p>
//                         </div>
//                       </div>
//                       <div className="flex items-center">
//                         <Users className="h-5 w-5 text-orange-500 mr-3" />
//                         <div>
//                           <p className="text-sm text-gray-500">Colleges Offering</p>
//                           <p className="font-medium text-white">{courseData.colleges}+ colleges</p>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center">
//                       <div className="flex items-center mr-4">
//                         {[...Array(5)].map((_, i) => (
//                           <Star 
//                             key={i} 
//                             className={`h-5 w-5 ${i < Math.floor(courseData.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
//                           />
//                         ))}
//                         <span className="ml-2 text-white font-medium">{courseData.rating}</span>
//                       </div>
//                       <span className="text-gray-500">{courseData.reviews} reviews</span>
//                     </div>
//                   </div>
//                 )}
                
//                 {activeTab === 'careers' && (
//                   <div>
//                     <h2 className="text-xl font-bold text-white mb-4">Career Paths</h2>
//                     <p className="text-gray-400 mb-6">Graduates of this course can pursue various rewarding career opportunities in multiple industries.</p>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                       {courseData.careers.map((career, index) => (
//                         <motion.div 
//                           key={index}
//                           whileHover={{ scale: 1.02 }}
//                           className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/30"
//                         >
//                           <h3 className="font-medium text-orange-300">{career}</h3>
//                           <p className="text-sm text-orange-400 mt-1">High demand • Growing field</p>
//                         </motion.div>
//                       ))}
//                     </div>
                    
//                     <div className="mb-6">
//                       <h3 className="font-bold text-white mb-3">Top Recruiters</h3>
//                       <div className="flex flex-wrap gap-2">
//                         {courseData.topRecruiters.map((recruiter, index) => (
//                           <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
//                             {recruiter}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div>
//                       <h3 className="font-bold text-white mb-3">Career Growth</h3>
//                       <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/30">
//                         <p className="text-orange-300 font-medium">Job growth projection: {courseData.growth}</p>
//                         <p className="text-sm text-orange-400 mt-1">(Source: National Employment Outlook Report)</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
                
//                 {activeTab === 'exams' && (
//                   <div>
//                     <h2 className="text-xl font-bold text-white mb-4">Entrance Exams</h2>
//                     <p className="text-gray-400 mb-6">These are the common entrance exams for admission to this course:</p>
                    
//                     <div className="space-y-4">
//                       {courseData.entranceExams.map((exam, index) => (
//                         <motion.div 
//                           key={index}
//                           whileHover={{ scale: 1.01 }}
//                           className="p-4 border border-gray-700 rounded-lg hover:border-orange-500/50 hover:bg-orange-900/10 transition-colors"
//                         >
//                           <h3 className="font-bold text-white mb-2">{exam}</h3>
//                           <div className="grid grid-cols-2 gap-4 text-sm">
//                             <div>
//                               <p className="text-gray-500">Conducting Body</p>
//                               <p className="font-medium text-white">{exam.includes('JEE') ? 'NTA' : 'Various Universities'}</p>
//                             </div>
//                             <div>
//                               <p className="text-gray-500">Exam Frequency</p>
//                               <p className="font-medium text-white">Yearly</p>
//                             </div>
//                           </div>
//                           <button className="mt-3 text-orange-400 hover:text-orange-300 text-sm font-medium flex items-center">
//                             View Exam Details <ChevronRight className="h-4 w-4 ml-1" />
//                           </button>
//                         </motion.div>
//                       ))}
//                     </div>
                    
//                     <div className="mt-6 bg-orange-900/20 p-4 rounded-lg border border-orange-500/30">
//                       <h3 className="font-bold text-orange-300 mb-2">Preparation Tips</h3>
//                       <ul className="list-disc list-inside text-orange-400 space-y-1">
//                         <li>Start preparing at least 6 months before the exam</li>
//                         <li>Focus on previous year question papers</li>
//                         <li>Take mock tests regularly</li>
//                         <li>Revise important concepts frequently</li>
//                       </ul>
//                     </div>
//                   </div>
//                 )}
                
//                 {activeTab === 'skills' && (
//                   <div>
//                     <h2 className="text-xl font-bold text-white mb-4">Related Skills</h2>
//                     <p className="text-gray-400 mb-6">Developing these skills will help you succeed in this field:</p>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                       {courseData.skills.map((skill, index) => (
//                         <motion.div 
//                           key={index}
//                           whileHover={{ scale: 1.02 }}
//                           className="bg-gray-800 border border-orange-500/30 p-4 rounded-lg"
//                         >
//                           <h3 className="font-medium text-white mb-2">{skill}</h3>
//                           <div className="w-full bg-gray-700 rounded-full h-2.5">
//                             <div 
//                               className="bg-orange-500 h-2.5 rounded-full" 
//                               style={{ width: `${70 + (index * 5)}%` }}
//                             ></div>
//                           </div>
//                           <p className="text-xs text-gray-500 mt-2">Industry relevance: High</p>
//                         </motion.div>
//                       ))}
//                     </div>
                    
//                     <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/30">
//                       <h3 className="font-bold text-orange-300 mb-2">Skill Development Resources</h3>
//                       <ul className="space-y-2">
//                         <li className="flex items-center">
//                           <BookOpen className="h-4 w-4 text-orange-400 mr-2" />
//                           <span className="text-orange-300">Online courses on Coursera, Udemy</span>
//                         </li>
//                         <li className="flex items-center">
//                           <Target className="h-4 w-4 text-orange-400 mr-2" />
//                           <span className="text-orange-300">Practice platforms: LeetCode, HackerRank</span>
//                         </li>
//                         <li className="flex items-center">
//                           <Users className="h-4 w-4 text-orange-400 mr-2" />
//                           <span className="text-orange-300">Join student communities and forums</span>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 )}
                
//                 {activeTab === 'salary' && (
//                   <div>
//                     <h2 className="text-xl font-bold text-white mb-4">Expected Salary</h2>
                    
//                     <div className="bg-orange-900/20 p-6 rounded-lg mb-6 border border-orange-500/30">
//                       <div className="text-center mb-4">
//                         <p className="text-gray-400">Starting Salary for Fresh Graduates</p>
//                         <p className="text-3xl font-bold text-orange-300">{courseData.salaryRange}</p>
//                       </div>
                      
//                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
//                         <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
//                           <p className="text-sm text-gray-500">Min Experience</p>
//                           <p className="font-bold text-white">0-2 years</p>
//                           <p className="text-orange-400">₹4-6 LPA</p>
//                         </div>
//                         <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
//                           <p className="text-sm text-gray-500">Mid Career</p>
//                           <p className="font-bold text-white">3-7 years</p>
//                           <p className="text-orange-400">₹8-15 LPA</p>
//                         </div>
//                         <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
//                           <p className="text-sm text-gray-500">Experienced</p>
//                           <p className="font-bold text-white">8+ years</p>
//                           <p className="text-orange-400">₹15-30+ LPA</p>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <h3 className="font-bold text-white mb-3">Factors Influencing Salary</h3>
//                     <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
//                       <li>Institute reputation and ranking</li>
//                       <li>Individual skills and specialization</li>
//                       <li>Location of employment (metro cities offer higher salaries)</li>
//                       <li>Company size and industry</li>
//                       <li>Internship experience and projects</li>
//                     </ul>
                    
//                     <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/30">
//                       <h3 className="font-bold text-orange-300 mb-2">Salary by Location</h3>
//                       <div className="space-y-3">
//                         <div>
//                           <p className="text-orange-300 font-medium">Metro Cities (Bangalore, Mumbai, Delhi)</p>
//                           <p className="text-white">₹5-14 LPA for freshers</p>
//                         </div>
//                         <div>
//                           <p className="text-orange-300 font-medium">Tier 2 Cities (Pune, Hyderabad, Chennai)</p>
//                           <p className="text-white">₹4-10 LPA for freshers</p>
//                         </div>
//                         <div>
//                           <p className="text-orange-300 font-medium">Other Cities</p>
//                           <p className="text-white">₹3-8 LPA for freshers</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           </div>
          
//           {/* Right Column - Action Card */}
//           <div>
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="bg-gray-900 rounded-xl shadow-lg p-6 sticky top-6 border border-orange-500/20"
//             >
//               <h2 className="text-xl font-bold text-white mb-4">Find Colleges</h2>
//               <p className="text-gray-400 mb-6">Discover colleges offering this course with details on fees, cut-offs, and admissions.</p>
              
//               <div className="space-y-4 mb-6">
//                 <div className="flex items-center text-gray-300">
//                   <MapPin className="h-5 w-5 text-orange-500 mr-3" />
//                   <span>{courseData.colleges}+ colleges available</span>
//                 </div>
//                 <div className="flex items-center text-gray-300">
//                   <DollarSign className="h-5 w-5 text-orange-500 mr-3" />
//                   <span>Fees starting from ₹8,000/year</span>
//                 </div>
//                 <div className="flex items-center text-gray-300">
//                   <Award className="h-5 w-5 text-orange-500 mr-3" />
//                   <span>Scholarships available for eligible students</span>
//                 </div>
//               </div>
              
//               <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors border border-orange-500/30">
//                 <MapPin className="h-5 w-5 mr-2" />
//                 Find Colleges Near Me
//               </button>
              
//               <div className="mt-6 pt-6 border-t border-gray-700">
//                 <h3 className="font-medium text-gray-300 mb-3">Shortlist this course for later</h3>
//                 <button 
//                   onClick={() => setIsBookmarked(!isBookmarked)}
//                   className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors border ${
//                     isBookmarked 
//                       ? 'bg-orange-900/30 text-orange-400 border-orange-500/50' 
//                       : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border-gray-700'
//                   }`}
//                 >
//                   <Bookmark className="h-5 w-5 mr-2" fill={isBookmarked ? "currentColor" : "none"} />
//                   {isBookmarked ? 'Course Saved' : 'Save to My Courses'}
//                 </button>
//               </div>
//             </motion.div>
            
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl shadow-lg p-6 mt-6 text-white border border-orange-500/30"
//             >
//               <h3 className="font-bold text-lg mb-3">Need personalized guidance?</h3>
//               <p className="text-orange-100 mb-4">Talk to our career counselors for expert advice</p>
//               <button className="w-full bg-white text-orange-700 py-3 px-4 rounded-lg font-medium hover:bg-orange-50 transition-colors">
//                 Book a Free Counseling Session
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetails;