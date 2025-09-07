import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  TrendingUp,
  BookOpen,
  ArrowRight,
  X,
  ChevronLeft,
} from "lucide-react";
import ScienceStream from "./ScienceStream";
import CommerceStream from "./CommerceStream";
import ArtsStream from "./ArtsStream";
import VocationalStream from "./VocationalStream";

// Science Stream Component
const ScienceStreams = ({ onBack }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-gray-800 lg:p-6 p-2 rounded-xl border border-orange-500/30"
  >
    <div className="flex items-center justify-end mb-6">
      <button onClick={onBack} className="text-gray-400 hover:text-white">
        <X className="h-6 w-6" />
      </button>
    </div>
    <ScienceStream />
  </motion.div>
);

// Commerce Stream Component
const CommerceStreams = ({ onBack }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-gray-800 lg:p-6 p-2 rounded-xl border border-orange-500/30"
  >
    <div className="flex items-center justify-end mb-6">
      <button onClick={onBack} className="text-gray-400 hover:text-white">
        <X className="h-6 w-6" />
      </button>
    </div>
    <CommerceStream />
  </motion.div>
);

// Arts Stream Component
const ArtsStreams = ({ onBack }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-gray-800 lg:p-6 p-2 rounded-xl border border-orange-500/30"
  >
    <div className="flex items-center justify-end mb-6">
      <button onClick={onBack} className="text-gray-400 hover:text-white">
        <X className="h-6 w-6" />
      </button>
    </div>
    <ArtsStream />
  </motion.div>
);

// Vocational Stream Component
const VocationalStreams = ({ onBack }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-gray-800 lg:p-6 p-2 rounded-xl border border-orange-500/30"
  >
    <div className="flex items-center justify-end mb-6">
      <button onClick={onBack} className="text-gray-400 hover:text-white">
        <X className="h-6 w-6" />
      </button>
    </div>

    <VocationalStream />
  </motion.div>
);

const QuizResults = () => {
  const [selectedStream, setSelectedStream] = useState(null);

  // Sample quiz results data
  const results = {
    overallScore: 82,
    streams: [
      {
        name: "Science",
        score: 78,
        description:
          "Focuses on scientific principles, mathematical concepts, and technological advancements.",
        component: ScienceStreams,
      },
      {
        name: "Commerce",
        score: 82,
        description:
          "Deals with business, trade, finance, and economic activities. Leads to careers in banking, accounting, and management.",
        component: CommerceStreams,
      },
      {
        name: "Arts",
        score: 65,
        description:
          "Explores humanities, social sciences, languages, and creative arts. Ideal for those interested in literature, history, and communication.",
        component: ArtsStreams,
      },
      {
        name: "Vocational",
        score: 45,
        description:
          "Focuses on practical skills and job-specific training for various trades and technical professions.",
        component: VocationalStreams,
      },
    ],
  };

  // Find the top scoring stream
  const topStream = results.streams.reduce((prev, current) =>
    prev.score > current.score ? prev : current
  );

  const handleViewCourses = (stream) => {
    setSelectedStream(stream);
  };

  const handleBackToResults = () => {
    setSelectedStream(null);
  };

  // Render the selected stream component if one is selected
  if (selectedStream) {
    const StreamComponent = selectedStream.component;
    return (
      <div className="min-h-screen  text-white">
        <div className="">
          <StreamComponent onBack={handleBackToResults} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto bg-gray-900 rounded-xl border border-orange-500/20 overflow-hidden"
      >
        {/* Header with overall score */}
        <div className="p-6 md:p-8 text-center ">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <Award className="h-8 w-8 mr-2" />
            <h1 className="text-2xl md:text-3xl font-bold">Quiz Results</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                {results.overallScore}%
              </div>
              <div className="text-orange-100">Overall Score</div>
            </div>

            <div className="hidden md:block h-16 w-px bg-orange-400"></div>
            <div className="md:hidden w-16 h-px bg-orange-400"></div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">
                {topStream.name}
              </div>
              <div className="text-orange-100">Recommended Stream</div>
            </div>
          </motion.div>
        </div>

        {/* Main content */}
        <div className="p-4 md:p-6 lg:p-8">
          {/* Score visualization */}
          <div className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 md:h-6 md:w-6 mr-2 text-orange-500" />
              Your Stream Analysis
            </h2>

            <div className="flex justify-center">
              <div className="bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-700 w-full max-w-2xl">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Stream Compatibility
                </h3>

                {results.streams.map((stream, index) => (
                  <motion.div
                    key={stream.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-4"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 font-medium">
                        {stream.name}
                      </span>
                      <span className="text-gray-400">{stream.score}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className={`h-2.5 rounded-full ${
                          stream.name === "Science"
                            ? "bg-blue-500"
                            : stream.name === "Commerce"
                            ? "bg-orange-500"
                            : stream.name === "Arts"
                            ? "bg-purple-500"
                            : "bg-yellow-500"
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${stream.score}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Stream recommendations */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center justify-center md:justify-start">
              <BookOpen className="h-5 w-5 md:h-6 md:w-6 mr-2 text-orange-500" />
              Recommended Streams
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {results.streams.map((stream, index) => (
                <motion.div
                  key={stream.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className={`border rounded-xl p-4 md:p-6 ${
                    stream.name === topStream.name
                      ? "border-orange-500 bg-orange-900/20 shadow-md"
                      : "border-gray-700 bg-gray-800"
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {stream.name}
                    </h3>
                    <div
                      className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-sm font-medium ${
                        stream.name === "Science"
                          ? "bg-blue-900/30 text-blue-300 border border-blue-500/30"
                          : stream.name === "Commerce"
                          ? "bg-orange-900/30 text-orange-300 border border-orange-500/30"
                          : stream.name === "Arts"
                          ? "bg-purple-900/30 text-purple-300 border border-purple-500/30"
                          : "bg-yellow-900/30 text-yellow-300 border border-yellow-500/30"
                      }`}
                    >
                      {stream.score}% Match
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 text-sm md:text-base">
                    {stream.description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewCourses(stream)}
                    className={`flex items-center font-medium ${
                      stream.name === topStream.name
                        ? "text-orange-400 hover:text-orange-300"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    View Courses
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizResults;
