import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResourcesContent = () => {
  const [activeTab, setActiveTab] = useState("Ebooks");
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(null);

  // Simulate download process
  const handleDownload = (resourceTitle, tabName) => {
    setDownloading(resourceTitle);
    setLoading(true);

    // Simulate download process
    setTimeout(() => {
      setLoading(false);
      setDownloading(null);

      // Create a temporary link to trigger download
      const link = document.createElement("a");
      link.href = "#";
      link.download = `${resourceTitle.replace(/\s+/g, "_")}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      alert(`Downloaded: ${resourceTitle}`);
    }, 1500);
  };

  const data = {
    Ebooks: [
      {
        title: "Free NCERT Science E-book",
        desc: "Comprehensive guide for 10th-grade science covering all major topics with illustrations and examples.",
        img: "https://img.icons8.com/nolan/64/open-book.png",
        pages: 220,
        level: "Beginner",
        format: "PDF",
      },
      {
        title: "Mathematics Fundamentals",
        desc: "An introductory e-book to essential mathematical concepts with practice problems and solutions.",
        img: "https://img.icons8.com/doodle/48/math-book.png",
        pages: 180,
        level: "Intermediate",
        format: "PDF",
      },
      {
        title: "History of India E-book",
        desc: "Explore the rich and diverse history of India from ancient civilizations to modern times.",
        img: "https://img.icons8.com/emoji/48/scroll-emoji.png",
        pages: 310,
        level: "All Levels",
        format: "EPUB",
      },
      {
        title: "English Grammar Essential",
        desc: "Improve your English grammar with this easy-to-understand e-book with exercises and answer keys.",
        img: "https://img.icons8.com/external-flat-icons-inmotus-design/67/external-ebook-literature-flat-icons-inmotus-design.png",
        pages: 150,
        level: "Beginner",
        format: "PDF",
      },
      {
        title: "Introduction to Computer Science",
        desc: "A foundational e-book covering basic computing principles, algorithms, and programming concepts.",
        img: "https://img.icons8.com/fluency/48/laptop.png",
        pages: 280,
        level: "Intermediate",
        format: "PDF",
      },
      {
        title: "Environmental Studies Guide",
        desc: "Learn about environmental issues, conservation efforts, and sustainable practices.",
        img: "https://img.icons8.com/color/48/environment-care.png",
        pages: 200,
        level: "All Levels",
        format: "PDF",
      },
    ],
    "Online Courses": [
      {
        title: "Web Development Bootcamp",
        desc: "Learn full-stack web development with HTML, CSS, JavaScript, React, Node.js, and more.",
        img: "https://img.icons8.com/color/48/code.png",
        duration: "60 hours",
        level: "Beginner to Advanced",
        access: "Lifetime",
      },
      {
        title: "Data Science Fundamentals",
        desc: "Master data analysis, visualization, and machine learning with Python and R.",
        img: "https://img.icons8.com/color/48/data-configuration.png",
        duration: "45 hours",
        level: "Intermediate",
        access: "1 Year",
      },
      {
        title: "Digital Marketing Mastery",
        desc: "Learn SEO, social media marketing, email campaigns, and analytics to boost online presence.",
        img: "https://img.icons8.com/color/48/marketing.png",
        duration: "40 hours",
        level: "All Levels",
        access: "6 Months",
      },
      {
        title: "Graphic Design Principles",
        desc: "Master design theory, typography, color theory, and Adobe Creative Suite tools.",
        img: "https://img.icons8.com/color/48/graphic-design.png",
        duration: "50 hours",
        level: "Beginner",
        access: "Lifetime",
      },
      {
        title: "Mobile App Development",
        desc: "Build iOS and Android apps using React Native, Flutter, and native development approaches.",
        img: "https://img.icons8.com/color/48/android-os.png",
        duration: "55 hours",
        level: "Intermediate",
        access: "1 Year",
      },
      {
        title: "Business Analytics",
        desc: "Learn to analyze business data, create dashboards, and make data-driven decisions.",
        img: "https://img.icons8.com/color/48/business-analysis.png",
        duration: "35 hours",
        level: "Advanced",
        access: "6 Months",
      },
    ],
    Scholarships: [
      {
        title: "National Merit Scholarship",
        desc: "Merit-based scholarship for outstanding academic achievers in STEM fields.",
        img: "https://img.icons8.com/color/48/medal2.png",
        deadline: "2023-12-15",
        amount: "$10,000",
        eligibility: "GPA 3.8+",
      },
      {
        title: "Women in Technology Grant",
        desc: "Supporting female students pursuing degrees in computer science and engineering.",
        img: "https://img.icons8.com/color/48/women-technology.png",
        deadline: "2023-11-30",
        amount: "$7,500",
        eligibility: "Female, STEM Major",
      },
      {
        title: "First-Generation Student Fund",
        desc: "Financial assistance for students who are the first in their family to attend college.",
        img: "https://img.icons8.com/color/48/graduation-cap.png",
        deadline: "2024-01-20",
        amount: "$5,000",
        eligibility: "First-Generation Student",
      },
      {
        title: "Community Service Award",
        desc: "For students with a demonstrated commitment to community service and volunteer work.",
        img: "https://img.icons8.com/color/48/charity.png",
        deadline: "2024-02-10",
        amount: "$4,000",
        eligibility: "100+ Volunteer Hours",
      },
      {
        title: "Creative Arts Scholarship",
        desc: "Supporting students pursuing degrees in visual arts, music, theater, or creative writing.",
        img: "https://img.icons8.com/color/48/art-prices.png",
        deadline: "2023-12-01",
        amount: "$6,000",
        eligibility: "Portfolio Required",
      },
      {
        title: "International Student Grant",
        desc: "Financial assistance for international students demonstrating academic excellence.",
        img: "https://img.icons8.com/color/48/international.png",
        deadline: "2024-01-15",
        amount: "$8,000",
        eligibility: "International Student, GPA 3.5+",
      },
    ],
    
  };

  // Animation for tab switching
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg p-6 mb-6 border border-orange-500/20 overflow-hidden">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-4"
        >
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Learning Resources & Scholar<span className="text-[#D23900]">ships</span>
          </h2>
        </motion.div>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
          Discover free educational resources, online courses, and scholarship
          opportunities to advance your learning journey.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="tabs-container bg-gray-900 rounded-xl border border-orange-500/30 p-1 mb-10 inline-flex">
          {["Ebooks", "Online Courses", "Scholarships"].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 border ${
                activeTab === tab
                  ? "bg-gradient-to-r from-orange-600 to-orange-700 text-white border-orange-500/50"
                  : "text-gray-400 hover:text-orange-400 border-transparent"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        ) : (
          <div className="resources-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {data[activeTab].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="resource-card bg-gray-900 rounded-xl overflow-hidden border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 bg-orange-500/20 p-3 rounded-lg">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-10 h-10"
                      />
                    </div>
                    <h4 className="ml-4 text-lg font-bold text-white">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-gray-400 mb-4">{item.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {activeTab === "Ebooks" && (
                      <>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full border border-orange-500/30">
                          {item.pages} pages
                        </span>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full border border-orange-500/30">
                          {item.level}
                        </span>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full border border-orange-500/30">
                          {item.format}
                        </span>
                      </>
                    )}
                    {activeTab === "Online Courses" && (
                      <>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full border border-orange-500/30">
                          {item.duration}
                        </span>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full border border-orange-500/30">
                          {item.level}
                        </span>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full border border-orange-500/30">
                          Access: {item.access}
                        </span>
                      </>
                    )}
                    {activeTab === "Scholarships" && (
                      <>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full border border-orange-500/30">
                          Deadline: {item.deadline}
                        </span>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full border border-orange-500/30">
                          Amount: {item.amount}
                        </span>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full border border-orange-500/30">
                          {item.eligibility}
                        </span>
                      </>
                    )}
                   
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center border ${
                      downloading === item.title
                        ? "bg-gray-800 cursor-not-allowed border-gray-700"
                        : "bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white border-orange-500/30"
                    }`}
                    onClick={() => handleDownload(item.title, activeTab)}
                    disabled={downloading === item.title}
                  >
                    {downloading === item.title ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Downloading...
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          ></path>
                        </svg>
                        {activeTab === "Scholarships"
                          ? "Apply Now"
                          : "Download Now"}
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gray-900 rounded-xl border border-orange-500/30 p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need More Resources?
          </h3>
          <p className="text-gray-400 mb-6">
            Join our newsletter to get notified about new learning resources and
            scholarship opportunities.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-r-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-300 border border-orange-500/30">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesContent;
