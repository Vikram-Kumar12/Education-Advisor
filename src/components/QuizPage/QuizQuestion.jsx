import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, HelpCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getQuiz ,submitQuiz} from "../../Services/Quiz";

const QuizQuestion = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [answers, setAnswers] = useState([]);
  const totalQuestions = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await getQuiz();
        console.log("Quiz data:", response.data);
        const q = response.data.data.questions;
        setQuestions(q);

        console.log(q);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    fetchQuiz();
  }, []);

  // Sample quiz questions data
  // const questions = [
  //   {
  //     id: 1,
  //     question: "Which activities do you enjoy in your free time?",
  //     options: [
  //       "Experiments and discovering how things work",
  //       "Reading books, writing stories or poetry",
  //       "Managing money, planning budgets or business ideas",
  //       "Building, fixing or creating things with hands",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     question: "How do you prefer to solve problems?",
  //     options: [
  //       "Through logical analysis and systematic approach",
  //       "Through creative thinking and discussion",
  //       "Through practical planning and resource management",
  //       "Through hands-on experimentation and trial-error",
  //     ],
  //   },
  //   {
  //     id: 3,
  //     question: "What subjects do you enjoy most?",
  //     options: [
  //       "Math & Science",
  //       "Reading & Writing",
  //       "Business & Commerce",
  //       "Practical & Technical Skills",
  //     ],
  //   },
  //   {
  //     id: 4,
  //     question: "Which work environment appeals to you most?",
  //     options: [
  //       "Research lab or technology company",
  //       "Library, media house or creative agency",
  //       "Corporate office or financial institution",
  //       "Workshop, field site or production facility",
  //     ],
  //   },
  // ];

  if (!questions) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 text-white">
        Loading quiz... ⏳
      </div>
    );
  }

   const question = questions[currentQuestion - 1];
   
  

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = async () => {
    if (selectedOption !== null) {
      //  Store the answers
    const selectedOptionText = Object.values(question.options)[selectedOption];
      
      // Update answers state with the selected option's text
      const newAnswers = [...answers, selectedOptionText];
      setAnswers(newAnswers);

      if (currentQuestion < totalQuestions) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        // Submit quiz logic here
        console.log("Quiz completed!");
        console.log("Final Answers:", newAnswers);

        try {
          // Submit the final array of answers to the backend
          const response = await submitQuiz({ answers: newAnswers });
          console.log("Submission successful:", response.data);
          // Redirect to dashboard or confirmation page
          navigate('/quize-result');
        } catch (error) {
          console.error("Error submitting quiz:", error);
        }

      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      // Remove the last answer when going back
      setAnswers((prevAnswers) => prevAnswers.slice(0, prevAnswers.length - 1));

      setCurrentQuestion((prev) => prev - 1);
      setSelectedOption(null);
    }
  };

  // Progress bar calculation
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Circuit board background */}
      <div className="absolute inset-0 opacity-8">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ff8000' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      {/* Glowing effects */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-orange-500 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-orange-600 rounded-full filter blur-3xl opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-gray-900 rounded-xl overflow-hidden border border-orange-500/20 relative z-10 pb-3 shadow-[0_4px_6px_rgba(255,115,0,0.2)]"
      >
        {/* Header with progress */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-3 text-white">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold">ReviewCollection Assessment</h2>
              <p className="text-orange-100">Find your ideal subject stream</p>
            </div>
            <div className="flex items-center bg-orange-500 py-1 px-3 rounded-full">
              <Clock className="h-4 w-4 mr-1" />
              <span>5:00</span>
            </div>
          </div>

          <div className="w-full bg-orange-500 bg-opacity-30 rounded-full h-2.5">
            <motion.div
              className="bg-white h-2.5 rounded-full"
              initial={{ width: `${progress}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>

          <div className="flex justify-between mt-2 text-sm">
            <span>
              Question {currentQuestion} of {totalQuestions}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
        </div>

        {/* Question content */}
        <div className="px-8 pt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <div className="flex items-start mb-2">
                <HelpCircle className="h-6 w-6 text-orange-500 mr-2 mt-1" />
                <h3 className="text-2xl font-bold text-white">
                  {question.question}
                </h3>
              </div>
              <p className="text-gray-400 ml-8">
                Select the option that best describes you
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Options */}
          <div className="space-y-3 mb-8">
            <AnimatePresence>
              {Object.values(question.options).map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    selectedOption === index
                      ? "border-orange-500 bg-orange-900/20 shadow-md"
                      : "border-gray-700 hover:border-orange-400 hover:bg-orange-900/10"
                  }`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <div className="flex items-center">
                    <div
                      className={`flex-shrink-0 h-6 w-6 rounded-full border-2 flex items-center justify-center mr-4 ${
                        selectedOption === index
                          ? "border-orange-500 bg-orange-500 text-white"
                          : "border-gray-600"
                      }`}
                    >
                      {selectedOption === index && (
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm font-medium text-white">
                      {option}
                    </span>
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
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600 cursor-pointer"
              }`}
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Previous
            </motion.button>
            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              disabled={selectedOption === null}
            >
              {currentQuestion === totalQuestions ? (
                <Link
                  to="/dashboard"
                  className={`flex items-center px-5 py-3 rounded-lg font-medium ${
                    selectedOption === null
                      ? "bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700"
                      : "bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:from-orange-700 hover:to-orange-800 border border-orange-500/30 cursor-pointer"
                  }`}
                >
                  Finish Quiz
                  <ChevronRight className="h-5 w-5 ml-1" />
                </Link>
              ) : (
                <div
                  className={`flex items-center px-5 py-3 rounded-lg font-medium ${
                    selectedOption === null
                      ? "bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700"
                      : "bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:from-orange-700 hover:to-orange-800 border border-orange-500/30 cursor-pointer"
                  }`}
                >
                  Next
                  <ChevronRight className="h-5 w-5 ml-1" />
                </div>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizQuestion;
