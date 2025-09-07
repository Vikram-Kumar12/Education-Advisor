import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  TrendingUp,
  BookOpen,
  BarChart3,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const QuizResults = () => {
  // Sample quiz results data
  const results = {
    overallScore: 82,
    streams: [
      {
        name: "Science",
        score: 78,
        description:
          "Focuses on scientific principles, mathematical concepts, and technological advancements.",
        courses: [
          "Physics",
          "Chemistry",
          "Mathematics",
          "Biology",
          "Computer Science",
        ],
        path:'/science-stream'
      },
      {
        name: "Commerce",
        score: 82,
        description:
          "Deals with business, trade, finance, and economic activities. Leads to careers in banking, accounting, and management.",
        courses: [
          "Accountancy",
          "Business Studies",
          "Economics",
          "Statistics",
          "Mathematics",
        ],
        path:'/commerce-stream'
      },
      {
        name: "Arts",
        score: 65,
        description:
          "Explores humanities, social sciences, languages, and creative arts. Ideal for those interested in literature, history, and communication.",
        courses: [
          "History",
          "Political Science",
          "Psychology",
          "Sociology",
          "Languages",
        ],
        path:'/arts-stream'
      },
      {
        name: "Vocational",
        score: 45,
        description:
          "Focuses on practical skills and job-specific training for various trades and technical professions.",
        courses: [
          "IT",
          "Healthcare",
          "Hospitality",
          "Automotive",
          "Construction",
        ],
        path:'/vocational-stream'
      },
    ],
  };

  // Find the top scoring stream
  const topStream = results.streams.reduce((prev, current) =>
    prev.score > current.score ? prev : current
  );

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff8000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
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
        className="w-full max-w-6xl bg-gray-900 rounded-xl shadow-[0_4px_6px_rgba(255,115,0,0.2)] overflow-hidden border border-orange-500/20 relative z-10"
      >

        {/* Header with overall score */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-8 text-white text-center">
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
              <div className="text-orange-100">Overall Score</div>
            </div>

            <div className="h-16 w-px bg-orange-400"></div>

            <div className="text-center">
              <div className="text-3xl font-bold">{topStream.name}</div>
              <div className="text-orange-100">Recommended Stream</div>
            </div>
          </motion.div>
        </div>

        {/* Main content */}
        <div className="p-8">
          {/* Score visualization */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 mr-2 text-orange-500" />
              Your Stream Analysis
            </h2>

            <div className="flex items-center justify-center">
              {/* Score bars */}
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 md:w-2xl w-full">
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
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-orange-500" />
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
                      ? "border-orange-500 bg-orange-900/20 shadow-md"
                      : "border-gray-700 bg-gray-800"
                  }`}
                >
                  {/* Stream name and % match div */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {stream.name}
                    </h3>
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
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
                  {/* Description */}
                  <p className="text-gray-400 mb-4">{stream.description}</p>
                  {/* Suggested Courses  */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-300 mb-2">
                      Suggested Courses:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {stream.courses.slice(0, 3).map((course, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-sm border border-gray-600"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* View corse button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={stream.path}
                      className={`flex items-center font-medium ${
                        stream.name === topStream.name
                          ? "text-orange-400 hover:text-orange-300"
                          : "text-gray-400 hover:text-gray-300"
                      }`}
                    >
                      View Courses
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
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
              className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition duration-200 border border-orange-500/30 cursor-pointer"
            >
              Save Results
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/start-quize"
                className="px-6 py-3 bg-gray-800 text-orange-400 border border-orange-500/30 rounded-lg font-medium hover:bg-gray-700 transition duration-200"
              >
                Retake Quiz
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizResults;
