import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Target,
  BarChart3,
  Users,
  Lightbulb,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const QuizIntroduction = () => {
  const features = [
    { icon: Brain, text: "Assess your strengths" },
    { icon: Target, text: "Identify career paths" },
    { icon: BarChart3, text: "Personalized recommendations" },
    { icon: Users, text: "Based on successful professionals" },
    { icon: Lightbulb, text: "Discover hidden talents" },
    { icon: Award, text: "Get certified results" },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-6">
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
        className="w-full max-w-5xl bg-black rounded-xl shadow-[0_4px_6px_rgba(255,115,0,0.2)] overflow-hidden border border-orange-500/20 relative z-10"
      >
        <div className="w-full">
          {/* Left side - Content */}
          <div className="p-8 md:p-12 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Discover your ideal{" "}
              <span className="text-orange-500">subject stream</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              Answer 10 short questions to find the best-fit stream for your
              career.
            </p>

            <div className="mb-10 flex items-center flex-col">
              <h3 className="text-lg font-semibold text-white mb-4">
                What you'll get:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center bg-gray-800 border border-orange-500/20 rounded-lg p-3"
                  >
                    <feature.icon className="h-5 w-5 text-orange-500 mr-2" />
                    <span className="text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex lg:flex-row flex-col items-center gap-5 lg:gap-20">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=""
              >
                <Link
                  to="/start-quize"
                  className="w-full md:w-auto bg-gradient-to-r from-orange-600 to-orange-700 text-white lg:py-4  py-5 lg:px-8 px-15  rounded-lg font-semibold text-lg shadow-md hover:shadow-orange-500/20 transition duration-200 flex items-center justify-center border border-orange-500/30"
                >
                  Start Quiz
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/shape-it"
                  className="w-full md:w-auto bg-gradient-to-r from-orange-600 to-orange-700 text-white lg:py-4  py-5 lg:px-8 px-17  rounded-lg font-semibold text-lg shadow-md hover:shadow-orange-500/20 transition duration-200 flex items-center justify-center border border-orange-500/30"
                >
                  Shape it
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.button>
            </div>

            <p className="text-sm text-gray-400 mt-4 text-center lg:text-start">
              Takes approximately 5-7 minutes • 100% confidential
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizIntroduction;
