import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Sign Up & Create Profile",
      description:
        "Quickly create your free account and tell us about your academic aspirations and interests.",
      code: "user.createProfile({ aspirations, interests })",
    },
    {
      number: "2",
      title: "Take Our Quick Quiz",
      description:
        "Complete a short, insightful quiz designed to understand your strengths and preferences.",
      code: "quiz.start({ type: 'assessment', category: 'strengths' })",
    },
    {
      number: "3",
      title: "Explore Colleges & Career Paths",
      description:
        "Receive personalized recommendations and detailed insights into colleges and careers.",
      code: "explore.recommendations({ personalized: true, detailed: true })",
    },
  ];

  return (
    <section id="howworks" className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="relative inline-block mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">
              How GuideMeMate Works: Your <span className="text-[#EA580C]">3–</span>Step Journey
            </h2>
            <div className="absolute inset-0 opacity-30 lg:opacity-70 blur-2xl z-0 bg-[#EA580C]"></div>
          </div>
          <p className="text-gray-400">
            Start your journey to academic and career success in just three
            simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-orange-700"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-black border border-gray-700 rounded-xl p-6 text-center h-full transition-all duration-300 hover:scale-[1.02] hover:border-orange-500/30">
                {/* Step Number with terminal dots */}
                <div className="flex items-center mb-6">
                  <div className="flex items-center space-x-1 mr-3">
                    <span className="w-4 h-2 bg-red-500 rounded-full"></span>
                    <span className="w-4 h-2 bg-yellow-400 rounded-full"></span>
                    <span className="w-4 h-2 bg-green-500 rounded-full"></span>
                  </div>
                </div>

                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-lg font-bold text-center">
                    {step.number}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-400 mb-5">{step.description}</p>
              </div>

              {/* Arrow connector for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-6">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
