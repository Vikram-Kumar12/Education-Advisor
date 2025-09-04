import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, HelpCircle, Clock } from 'lucide-react';

const QuizQuestion = () => {
  const [currentQuestion, setCurrentQuestion] = useState(3);
  const [selectedOption, setSelectedOption] = useState(null);
  const totalQuestions = 10;

  // Sample quiz questions data
  const questions = [
    {
      id: 1,
      question: "Which activities do you enjoy in your free time?",
      options: [
        "Experiments and discovering how things work",
        "Reading books, writing stories or poetry",
        "Managing money, planning budgets or business ideas",
        "Building, fixing or creating things with hands"
      ]
    },
    {
      id: 2,
      question: "How do you prefer to solve problems?",
      options: [
        "Through logical analysis and systematic approach",
        "Through creative thinking and discussion",
        "Through practical planning and resource management",
        "Through hands-on experimentation and trial-error"
      ]
    },
    {
      id: 3,
      question: "What subjects do you enjoy most?",
      options: [
        "Math & Science",
        "Reading & Writing",
        "Business & Commerce",
        "Practical & Technical Skills"
      ]
    },
    {
      id: 4,
      question: "Which work environment appeals to you most?",
      options: [
        "Research lab or technology company",
        "Library, media house or creative agency",
        "Corporate office or financial institution",
        "Workshop, field site or production facility"
      ]
    }
  ];

  const question = questions.find(q => q.id === currentQuestion) || questions[2];

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      if (currentQuestion < totalQuestions) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedOption(null);
      } else {
        // Submit quiz logic here
        console.log("Quiz completed!");
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedOption(null);
    }
  };

  // Progress bar calculation
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Header with progress */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold">Career Stream Assessment</h2>
              <p className="text-blue-100">Find your ideal subject stream</p>
            </div>
            <div className="flex items-center bg-blue-500 py-1 px-3 rounded-full">
              <Clock className="h-4 w-4 mr-1" />
              <span>5:00</span>
            </div>
          </div>
          
          <div className="w-full bg-blue-500 bg-opacity-30 rounded-full h-2.5">
            <motion.div 
              className="bg-white h-2.5 rounded-full"
              initial={{ width: `${progress}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
          
          <div className="flex justify-between mt-2 text-sm">
            <span>Question {currentQuestion} of {totalQuestions}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
        </div>
        
        {/* Question content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <div className="flex items-start mb-2">
                <HelpCircle className="h-6 w-6 text-blue-600 mr-2 mt-1" />
                <h3 className="text-2xl font-bold text-gray-800">{question.question}</h3>
              </div>
              <p className="text-gray-600 ml-8">Select the option that best describes you</p>
            </motion.div>
          </AnimatePresence>
          
          {/* Options */}
          <div className="space-y-4 mb-8">
            <AnimatePresence>
              {question.options.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    selectedOption === index 
                      ? 'border-blue-500 bg-blue-50 shadow-md' 
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 h-6 w-6 rounded-full border-2 flex items-center justify-center mr-4 ${
                      selectedOption === index 
                        ? 'border-blue-500 bg-blue-500 text-white' 
                        : 'border-gray-300'
                    }`}>
                      {selectedOption === index && (
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-lg font-medium text-gray-800">{option}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              disabled={currentQuestion === 1}
              className={`flex items-center px-5 py-3 rounded-lg font-medium ${
                currentQuestion === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Previous
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`flex items-center px-5 py-3 rounded-lg font-medium ${
                selectedOption === null
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {currentQuestion === totalQuestions ? 'Finish Quiz' : 'Next'}
              <ChevronRight className="h-5 w-5 ml-1" />
            </motion.button>
          </div>
        </div>
        
        {/* Help text */}
        <div className="bg-gray-50 p-4 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>Your answers will help us recommend the most suitable stream for your career path.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizQuestion;