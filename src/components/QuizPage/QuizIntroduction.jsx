import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Brain, Target, BarChart3, Users, Lightbulb, Award } from 'lucide-react';

const QuizIntroduction = () => {
  const features = [
    { icon: Brain, text: "Assess your strengths" },
    { icon: Target, text: "Identify career paths" },
    { icon: BarChart3, text: "Personalized recommendations" },
    { icon: Users, text: "Based on successful professionals" },
    { icon: Lightbulb, text: "Discover hidden talents" },
    { icon: Award, text: "Get certified results" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="md:flex">
          {/* Left side - Content */}
          <div className="md:w-2/3 p-8 md:p-12">
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-800">CareerStream Advisor</h1>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Discover your ideal <span className="text-blue-600">subject stream</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Answer 10 short questions to find the best-fit stream for your career.
            </p>
            
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">What you'll get:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center bg-blue-50 rounded-lg p-3"
                  >
                    <feature.icon className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-8 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center"
            >
              Start Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            
            <p className="text-sm text-gray-500 mt-4">
              Takes approximately 5-7 minutes • 100% confidential
            </p>
          </div>
          
          {/* Right side - Visual */}
          <div className="md:w-1/3 bg-gradient-to-b from-blue-600 to-indigo-700 p-8 flex flex-col justify-center items-center text-white">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="absolute -inset-4 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                  <svg className="w-16 h-16 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Stream Recommendations</h3>
              
              <div className="space-y-3 mb-6">
                {['Science', 'Commerce', 'Arts', 'Vocational'].map((stream, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center bg-blue-500 bg-opacity-20 rounded-lg p-2"
                  >
                    <div className={`h-3 w-3 rounded-full mr-2 ${
                      stream === 'Science' ? 'bg-green-400' :
                      stream === 'Commerce' ? 'bg-blue-400' :
                      stream === 'Arts' ? 'bg-purple-400' : 'bg-yellow-400'
                    }`}></div>
                    <span>{stream}</span>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-blue-100 italic">
                "92% of students found their ideal stream through our assessment"
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizIntroduction;