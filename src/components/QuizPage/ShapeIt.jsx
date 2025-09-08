import { useState } from "react";
import { motion } from "framer-motion";
import { shape } from "../../Services/Quiz";
import { Link } from "react-router-dom";

const ShapeIt = () => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted text:", inputText);

    const dream = inputText;
    const response = await shape({ dream });
    console.log(response.data.data.streams);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
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
        className="w-full max-w-2xl bg-gray-900 rounded-xl shadow-[0_4px_6px_rgba(255,115,0,0.2)] overflow-hidden border border-orange-500/20 relative z-10 "
      >
        <div className="p-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              Hey what’s, on your <span className="text-orange-500">Mind</span>
            </h2>
            <p className="text-gray-400">
              Share your thoughts, ideas, or questions about your career path
            </p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label
                htmlFor="userInput"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Input
              </label>
              <textarea
                id="userInput"
                name="userInput"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full  px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 outline-none transition duration-200 hide-scrollbar overflow-auto"
                placeholder="Type your thoughts, questions, or ideas here..."
                rows="6"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                {inputText.length}/5000 characters
              </p>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={!inputText.trim()}
            >
              <Link
                className={`w-full py-3 px-4 rounded-lg font-semibold transition duration-200 border ${
                  !inputText.trim()
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed border-gray-700"
                    : "bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:from-orange-700 hover:to-orange-800 border-orange-500/30"
                }`}
                to="/dashboard"
              >Submit</Link>
              
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ShapeIt;
