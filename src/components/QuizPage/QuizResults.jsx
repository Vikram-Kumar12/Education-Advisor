import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, BookOpen, BarChart3, Target, CheckCircle, ArrowRight } from 'lucide-react';

const QuizResults = () => {
  // Sample quiz results data
  const results = {
    overallScore: 82,
    streams: [
      {
        name: "Science",
        score: 78,
        description: "Focuses on scientific principles, mathematical concepts, and technological advancements.",
        courses: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science"]
      },
      {
        name: "Commerce",
        score: 82,
        description: "Deals with business, trade, finance, and economic activities. Leads to careers in banking, accounting, and management.",
        courses: ["Accountancy", "Business Studies", "Economics", "Statistics", "Mathematics"]
      },
      {
        name: "Arts",
        score: 65,
        description: "Explores humanities, social sciences, languages, and creative arts. Ideal for those interested in literature, history, and communication.",
        courses: ["History", "Political Science", "Psychology", "Sociology", "Languages"]
      },
      {
        name: "Vocational",
        score: 45,
        description: "Focuses on practical skills and job-specific training for various trades and technical professions.",
        courses: ["IT", "Healthcare", "Hospitality", "Automotive", "Construction"]
      }
    ]
  };

  // Find the top scoring stream
  const topStream = results.streams.reduce((prev, current) => 
    (prev.score > current.score) ? prev : current
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Header with overall score */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 text-white text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <Award className="h-8 w-8 mr-2" />
            <h1 className="text-3xl font-bold">Quiz Results</h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center justify-center space-x-6"
          >
            <div className="text-center">
              <div className="text-5xl font-bold">{results.overallScore}%</div>
              <div className="text-emerald-100">Overall Score</div>
            </div>
            
            <div className="h-16 w-px bg-emerald-400"></div>
            
            <div className="text-center">
              <div className="text-3xl font-bold">{topStream.name}</div>
              <div className="text-emerald-100">Recommended Stream</div>
            </div>
          </motion.div>
        </div>
        
        {/* Main content */}
        <div className="p-8">
          {/* Score visualization */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-green-600" />
              Your Stream Analysis
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Score bars */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Stream Compatibility</h3>
                
                {results.streams.map((stream, index) => (
                  <motion.div 
                    key={stream.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-4"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{stream.name}</span>
                      <span className="text-gray-600">{stream.score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div 
                        className={`h-2.5 rounded-full ${
                          stream.name === "Science" ? "bg-blue-500" :
                          stream.name === "Commerce" ? "bg-green-500" :
                          stream.name === "Arts" ? "bg-purple-500" : "bg-yellow-500"
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${stream.score}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Radar chart placeholder */}
              <div className="bg-gray-50 p-6 rounded-xl flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Skills Assessment</h3>
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 border-2 border-green-300 rounded-full"></div>
                  <div className="absolute inset-8 border-2 border-green-300 rounded-full"></div>
                  <div className="absolute inset-16 border-2 border-green-300 rounded-full"></div>
                  
                  {/* Data points */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-600 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-green-600 rounded-full"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-600 rounded-full"></div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-600 rounded-full"></div>
                  
                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <polygon 
                      points="50,10 80,50 50,90 20,50" 
                      fill="rgba(34, 197, 94, 0.2)" 
                      stroke="rgb(34, 197, 94)" 
                      strokeWidth="1"
                    />
                  </svg>
                  
                  {/* Labels */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-xs font-medium text-gray-700">Analytical</div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full text-xs font-medium text-gray-700">Creative</div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 text-xs font-medium text-gray-700">Technical</div>
                  <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 text-xs font-medium text-gray-700">Social</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stream recommendations */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-green-600" />
              Recommended Streams
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.streams.map((stream, index) => (
                <motion.div
                  key={stream.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className={`border rounded-xl p-6 ${
                    stream.name === topStream.name 
                      ? 'border-green-500 bg-green-50 shadow-md' 
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{stream.name}</h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      stream.name === "Science" ? "bg-blue-100 text-blue-800" :
                      stream.name === "Commerce" ? "bg-green-100 text-green-800" :
                      stream.name === "Arts" ? "bg-purple-100 text-purple-800" : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {stream.score}% Match
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{stream.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Suggested Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {stream.courses.slice(0, 3).map((course, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center font-medium ${
                      stream.name === topStream.name 
                        ? 'text-green-700 hover:text-green-800' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    View Courses
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Action buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center mt-10 space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition duration-200"
            >
              Save Results
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-green-700 border border-green-600 rounded-lg font-medium hover:bg-green-50 transition duration-200"
            >
              Retake Quiz
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizResults;