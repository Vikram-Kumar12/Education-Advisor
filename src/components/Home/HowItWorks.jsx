const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Sign Up & Create Profile",
      description: "Quickly create your free account and tell us about your academic aspirations and interests."
    },
    {
      number: "2",
      title: "Take Our Quick Quiz",
      description: "Complete a short, insightful quiz designed to understand your strengths and preferences."
    },
    {
      number: "3",
      title: "Explore Colleges & Career Paths",
      description: "Receive personalized recommendations and detailed insights into colleges and careers."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
          How CareerPath Works: Your 3–Step Journey
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Step Number */}
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-6">
                {step.number}
              </div>
              
              {/* Step Title */}
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-gray-600">
                {step.description}
              </p>
              
              {/* Connector line between steps (visible on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-blue-400"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;