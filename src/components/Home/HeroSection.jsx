import React from "react";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <div className="">
      <div className="w-full min:h-screen  flex flex-col items-center justify-center text-white px-4 bg-black relative overflow-hidden pt-35 lg:pt-20 mt-0 lg:mt-20">
        {/* Trusted Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4 py-3 bg-[#1b1b1b] text-sm text-white rounded-lg border border-gray-700 mb-4 flex items-center justify-center gap-3"
        >
          🔒 Trusted by 6 Students{" "}
          <motion.span
            className="w-2 h-2 bg-red-600 rounded-full"
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight"
        >
          <span className="underline decoration-[#ff9900] underline-offset-4">
            Your One-Stop Career
          </span>{" "}
          <span className="text-[#ff9900]">&</span>{" "}
          <span className="underline decoration-[#ff9900] underline-offset-4">
            Education Advisor
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-xl sm:text-2xl text-center text-[#ff9900] font-semibold"
        >
          Discover the right course, the right college, and the right future —
          all in one place.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-6 max-w-3xl text-center text-gray-300"
        >
          <span className="text-[#ff9900]">GuideMeMate</span> is your
          personalized guide for academic and career choices. Discover the right
          stream, explore nearby government colleges, and unlock future
          opportunities — all in one platform. Make informed decisions, build
          your path.
        </motion.p>

        {/* Feature Tags */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 1.6,
                staggerChildren: 0.2,
              },
            },
          }}
          className="mt-8 flex flex-wrap justify-center gap-4 mb-20"
        >
          {[
            { label: "Explore Courses That Fit You", icon: "🎯" },
            { label: "Discover Nearby Govt. Colleges", icon: "🏫" },
            { label: "Get Career Paths Mapped Clearly", icon: "🗺️" },
            { label: "Stay Updated on Admissions", icon: "📅" },
            { label: "Personalized for Every Student", icon: "🧠" },
          ].map((item, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1b1b1b] border border-gray-700 text-sm hover:scale-105 transition-all"
            >
              {item.icon} {item.label}
            </motion.span>
          ))}
        </motion.div>

        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-orange-500/30 to-transparent blur-2xl opacity-60" />
      </div>
    </div>
  );
};

export default HeroSection;
