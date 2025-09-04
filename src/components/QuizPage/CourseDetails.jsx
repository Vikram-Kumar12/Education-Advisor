import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  DollarSign, 
  MapPin, 
  Clock, 
  Users, 
  Award,
  ArrowLeft,
  ChevronRight,
  Star,
  Target,
  Bookmark,
  Share2
} from 'lucide-react';

const CourseDetails = ({ course, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Sample course data - in a real app this would come from props
  const courseData = course || {
    id: 1,
    title: "B.Sc. Computer Science",
    stream: "Science",
    duration: "3 years",
    eligibility: "10+2 with Science stream",
    avgFee: "₹15,000 - ₹50,000 per year",
    rating: 4.5,
    reviews: 124,
    description: "Bachelor of Science in Computer Science is a undergraduate degree that focuses on the fundamentals of computer systems, software development, and applications of computer technology.",
    careers: ["Software Developer", "Data Analyst", "System Administrator", "Cloud Engineer", "AI Specialist", "Web Developer", "Database Administrator"],
    entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "State CETs", "CUET"],
    skills: ["Programming", "Data Structures", "Algorithms", "Database Management", "Web Development", "Software Engineering", "Problem Solving"],
    salaryRange: "₹4-12 LPA (Fresh Graduates)",
    topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Microsoft", "Google", "Amazon"],
    growth: "15% (Much faster than average)",
    colleges: 243
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with back button and actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center">
              <button 
                onClick={onBack}
                className="flex items-center text-blue-600 hover:text-blue-800 mr-4 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back
              </button>
              <div className="h-6 w-1 bg-blue-400 mr-4"></div>
              <div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2">
                  {courseData.stream}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{courseData.title}</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full ${isBookmarked ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'} hover:bg-blue-200 transition-colors`}
              >
                <Bookmark className="h-5 w-5" fill={isBookmarked ? "currentColor" : "none"} />
              </button>
              <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Course Info */}
          <div className="lg:col-span-2">
            {/* Navigation Tabs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-4 mb-6 overflow-x-auto"
            >
              <div className="flex flex-nowrap gap-1 md:gap-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                    activeTab === 'overview'
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('careers')}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                    activeTab === 'careers'
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Briefcase className="h-4 w-4 mr-2" />
                  Career Paths
                </button>
                <button
                  onClick={() => setActiveTab('exams')}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                    activeTab === 'exams'
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Entrance Exams
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                    activeTab === 'skills'
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Award className="h-4 w-4 mr-2" />
                  Related Skills
                </button>
                <button
                  onClick={() => setActiveTab('salary')}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                    activeTab === 'salary'
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <DollarSign className="h-4 w-4 mr-2" />
                  Salary
                </button>
              </div>
            </motion.div>

            {/* Content based on active tab */}
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6"
            >
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Course Overview</h2>
                    <p className="text-gray-600 mb-6">{courseData.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-blue-600 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="font-medium">{courseData.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Target className="h-5 w-5 text-blue-600 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Eligibility</p>
                          <p className="font-medium">{courseData.eligibility}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-blue-600 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Average Fees</p>
                          <p className="font-medium">{courseData.avgFee}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-blue-600 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Colleges Offering</p>
                          <p className="font-medium">{courseData.colleges}+ colleges</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex items-center mr-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < Math.floor(courseData.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="ml-2 text-gray-700 font-medium">{courseData.rating}</span>
                      </div>
                      <span className="text-gray-500">{courseData.reviews} reviews</span>
                    </div>
                  </div>
                )}
                
                {activeTab === 'careers' && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Career Paths</h2>
                    <p className="text-gray-600 mb-6">Graduates of this course can pursue various rewarding career opportunities in multiple industries.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {courseData.careers.map((career, index) => (
                        <motion.div 
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          className="bg-blue-50 p-4 rounded-lg border border-blue-100"
                        >
                          <h3 className="font-medium text-blue-800">{career}</h3>
                          <p className="text-sm text-blue-600 mt-1">High demand • Growing field</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-bold text-gray-700 mb-3">Top Recruiters</h3>
                      <div className="flex flex-wrap gap-2">
                        {courseData.topRecruiters.map((recruiter, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {recruiter}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-700 mb-3">Career Growth</h3>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-800 font-medium">Job growth projection: {courseData.growth}</p>
                        <p className="text-sm text-blue-600 mt-1">(Source: National Employment Outlook Report)</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'exams' && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Entrance Exams</h2>
                    <p className="text-gray-600 mb-6">These are the common entrance exams for admission to this course:</p>
                    
                    <div className="space-y-4">
                      {courseData.entranceExams.map((exam, index) => (
                        <motion.div 
                          key={index}
                          whileHover={{ scale: 1.01 }}
                          className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                        >
                          <h3 className="font-bold text-gray-800 mb-2">{exam}</h3>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-600">Conducting Body</p>
                              <p className="font-medium">{exam.includes('JEE') ? 'NTA' : 'Various Universities'}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Exam Frequency</p>
                              <p className="font-medium">Yearly</p>
                            </div>
                          </div>
                          <button className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                            View Exam Details <ChevronRight className="h-4 w-4 ml-1" />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-blue-800 mb-2">Preparation Tips</h3>
                      <ul className="list-disc list-inside text-blue-600 space-y-1">
                        <li>Start preparing at least 6 months before the exam</li>
                        <li>Focus on previous year question papers</li>
                        <li>Take mock tests regularly</li>
                        <li>Revise important concepts frequently</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'skills' && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Related Skills</h2>
                    <p className="text-gray-600 mb-6">Developing these skills will help you succeed in this field:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {courseData.skills.map((skill, index) => (
                        <motion.div 
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          className="bg-white border border-blue-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <h3 className="font-medium text-gray-800 mb-2">{skill}</h3>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-blue-600 h-2.5 rounded-full" 
                              style={{ width: `${70 + (index * 5)}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">Industry relevance: High</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-blue-800 mb-2">Skill Development Resources</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
                          <span className="text-blue-700">Online courses on Coursera, Udemy</span>
                        </li>
                        <li className="flex items-center">
                          <Target className="h-4 w-4 text-blue-600 mr-2" />
                          <span className="text-blue-700">Practice platforms: LeetCode, HackerRank</span>
                        </li>
                        <li className="flex items-center">
                          <Users className="h-4 w-4 text-blue-600 mr-2" />
                          <span className="text-blue-700">Join student communities and forums</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'salary' && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Expected Salary</h2>
                    
                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <div className="text-center mb-4">
                        <p className="text-gray-600">Starting Salary for Fresh Graduates</p>
                        <p className="text-3xl font-bold text-blue-800">{courseData.salaryRange}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Min Experience</p>
                          <p className="font-bold text-gray-800">0-2 years</p>
                          <p className="text-blue-700">₹4-6 LPA</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Mid Career</p>
                          <p className="font-bold text-gray-800">3-7 years</p>
                          <p className="text-blue-700">₹8-15 LPA</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600">Experienced</p>
                          <p className="font-bold text-gray-800">8+ years</p>
                          <p className="text-blue-700">₹15-30+ LPA</p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-gray-700 mb-3">Factors Influencing Salary</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                      <li>Institute reputation and ranking</li>
                      <li>Individual skills and specialization</li>
                      <li>Location of employment (metro cities offer higher salaries)</li>
                      <li>Company size and industry</li>
                      <li>Internship experience and projects</li>
                    </ul>
                    
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <h3 className="font-bold text-blue-800 mb-2">Salary by Location</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-blue-700 font-medium">Metro Cities (Bangalore, Mumbai, Delhi)</p>
                          <p className="text-gray-700">₹5-14 LPA for freshers</p>
                        </div>
                        <div>
                          <p className="text-blue-700 font-medium">Tier 2 Cities (Pune, Hyderabad, Chennai)</p>
                          <p className="text-gray-700">₹4-10 LPA for freshers</p>
                        </div>
                        <div>
                          <p className="text-blue-700 font-medium">Other Cities</p>
                          <p className="text-gray-700">₹3-8 LPA for freshers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Action Card */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">Find Colleges</h2>
              <p className="text-gray-600 mb-6">Discover colleges offering this course with details on fees, cut-offs, and admissions.</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span>243+ colleges available</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <DollarSign className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Fees starting from ₹8,000/year</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Scholarships available for eligible students</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors">
                <MapPin className="h-5 w-5 mr-2" />
                Find Colleges Near Me
              </button>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-700 mb-3">Shortlist this course for later</h3>
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors ${
                    isBookmarked 
                      ? 'bg-blue-100 text-blue-700 border border-blue-300' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Bookmark className="h-5 w-5 mr-2" fill={isBookmarked ? "currentColor" : "none"} />
                  {isBookmarked ? 'Course Saved' : 'Save to My Courses'}
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-6 mt-6 text-white"
            >
              <h3 className="font-bold text-lg mb-3">Need personalized guidance?</h3>
              <p className="text-blue-100 mb-4">Talk to our career counselors for expert advice</p>
              <button className="w-full bg-white text-blue-700 py-3 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Book a Free Counseling Session
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;