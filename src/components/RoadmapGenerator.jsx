// src/components/RoadmapGenerator.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Wrench, Clock, ArrowRight } from 'lucide-react';
import { roadmap } from '../Services/Roadmap';

const RoadmapGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [roadmapData, setRoadmapData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRoadmapData(null);
    try {
      const response = await roadmap({ skill: inputText });
      setRoadmapData(response.data);
    } catch (error) {
      console.error("Error fetching roadmap:", error);
      // Fallback to the hardcoded response in case of an API error.
      const response = {
        skill: "Web Development",
        roadmap: [
          {
            stage: "Stage 1: Front-End Fundamentals (The Web's Building Blocks)",
            description: "Master the core languages and concepts that structure and style web pages. This stage focuses on creating static and interactive user interfaces.",
            keyTopics: [
              "HTML5 (Structure, Semantics, Accessibility)",
              "CSS3 (Selectors, Box Model, Flexbox, Grid, Responsive Design with Media Queries, Transitions & Animations)",
              "JavaScript Basics (Variables, Data Types, Operators, Control Flow, Functions, DOM Manipulation)",
              "Browser Developer Tools"
            ],
            tools: [
              "VS Code",
              "Any modern web browser (Chrome, Firefox, Edge)",
              "Figma (basic understanding for design hand-off)"
            ],
            duration: "6 weeks"
          },
          {
            stage: "Stage 2: Advanced Front-End & Version Control",
            description: "Dive deeper into JavaScript, learn a modern front-end framework to build dynamic applications, and adopt industry-standard version control practices.",
            keyTopics: [
              "Advanced JavaScript (ES6+ features: Arrow Functions, Promises, Async/Await, Modules, Destructuring)",
              "React.js (Components, Props, State, Hooks, Context API, React Router)",
              "State Management (Introduction to Redux Toolkit or advanced Context API patterns)",
              "Version Control with Git & GitHub (Commits, Branches, Merging, Pull Requests)",
              "Package Managers (npm/yarn)"
            ],
            tools: [
              "VS Code",
              "Git",
              "npm/yarn",
              "React DevTools (Browser Extension)"
            ],
            duration: "10 weeks"
          },
          {
            stage: "Stage 3: Back-End Development & Databases (Server-Side Logic)",
            description: "Understand how web applications handle data and server-side logic, learning to build robust APIs and interact with databases.",
            keyTopics: [
              "Node.js (Runtime environment, Event Loop, npm)",
              "Express.js (Building RESTful APIs, Middleware, Routing)",
              "Database Fundamentals (SQL vs NoSQL)",
              "PostgreSQL (Relational Database, SQL queries)",
              "MongoDB (NoSQL Document Database, Mongoose ORM)",
              "Authentication & Authorization (JWT - JSON Web Tokens)",
              "API Testing (Postman/Insomnia)"
            ],
            tools: [
              "VS Code",
              "Node.js",
              "npm/yarn",
              "Postman/Insomnia",
              "Docker (basic understanding for database setup)"
            ],
            duration: "10 weeks"
          },
          {
            stage: "Stage 4: Full-Stack Projects, Deployment & Job Readiness",
            description: "Integrate front-end and back-end skills to build complete applications, learn deployment strategies, and prepare for the job market.",
            keyTopics: [
              "Full-Stack Project Development (Building 2-3 complex projects, e.g., e-commerce, social media clone)",
              "Deployment (Front-end: Vercel/Netlify; Back-end: Render/Heroku/AWS EC2/DigitalOcean Droplets)",
              "Continuous Integration/Continuous Deployment (CI/CD basics with GitHub Actions)",
              "Testing (Unit Testing with Jest/React Testing Library, Integration Testing)",
              "Performance Optimization & Security Best Practices",
              "Interview Preparation (Algorithm & Data Structures basics, System Design questions, Behavioral questions, Portfolio building)"
            ],
            tools: [
              "All previous tools",
              "Cloud Platforms (Vercel, Netlify, Render, AWS/DigitalOcean)",
              "Jest",
              "GitHub Actions"
            ],
            duration: "8 weeks"
          }
        ],
        finalOutcome: "Upon completion of this roadmap, the student will be well-prepared for entry-level roles such as Junior Front-End Developer, Junior Back-End Developer, or Junior Full-Stack Developer, capable of building and deploying modern web applications and contributing to development teams."
      };
      setRoadmapData(response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto bg-gray-900 rounded-xl border border-orange-500/20 overflow-hidden"
      >
        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              Generate Your Career <span className="text-orange-500">Roadmap</span>
            </h2>
            <p className="text-gray-400">
              Enter a skill or career path to get a personalized learning roadmap.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="skillInput" className="block text-sm font-medium text-gray-300 mb-2">
                Enter Skill
              </label>
              <input
                id="skillInput"
                name="skillInput"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 outline-none transition duration-200"
                placeholder="e.g., Web Development, Data Science, Graphic Design"
                required
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={!inputText.trim() || loading}
              className={`w-full py-3 px-4 rounded-lg font-semibold transition duration-200 border ${
                !inputText.trim() || loading
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed border-gray-700"
                  : "bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:from-orange-700 hover:to-orange-800 border-orange-500/30"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </div>
              ) : (
                "Generate Roadmap"
              )}
            </motion.button>
          </form>

          <AnimatePresence>
            {roadmapData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-12"
              >
                <div className="bg-gray-800 rounded-xl p-6 border border-orange-500/30">
                  <h3 className="text-2xl font-bold text-orange-400 mb-4">{roadmapData.skill} Roadmap</h3>
                  <p className="text-gray-300 mb-6">{roadmapData.finalOutcome}</p>

                  <div className="space-y-8">
                    {roadmapData.roadmap.map((stage, index) => (
                      <div key={index} className="bg-gray-700 rounded-lg p-5 border border-gray-600">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-lg font-bold">
                            {index + 1}
                          </div>
                          <h4 className="text-xl font-semibold text-white">{stage.stage}</h4>
                        </div>
                        <p className="text-gray-300 mb-4">{stage.description}</p>
                        
                        <h5 className="text-sm font-semibold text-orange-300 mb-2 flex items-center">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Key Topics
                        </h5>
                        <ul className="list-disc list-inside text-gray-400 mb-4 ml-6">
                          {stage.keyTopics.map((topic, i) => (
                            <li key={i}>{topic}</li>
                          ))}
                        </ul>

                        <h5 className="text-sm font-semibold text-orange-300 mb-2 flex items-center">
                          <Wrench className="h-4 w-4 mr-2" />
                          Recommended Tools
                        </h5>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {stage.tools.map((tool, i) => (
                            <span key={i} className="px-3 py-1 bg-orange-900/30 text-orange-200 text-xs rounded-full border border-orange-500/30">
                              {tool}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center text-gray-400">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="text-sm">Duration: {stage.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default RoadmapGenerator;