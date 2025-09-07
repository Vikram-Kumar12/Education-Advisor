import { IoIosRocket, IoIosMap, IoIosSchool, IoIosCalendar } from "react-icons/io";

const features = [
  {
    title: "Personalized Course Suggestions",
    desc: "Receive tailored recommendations based on your interests and aptitudes.",
    code: "getCourseSuggestions({ interests, aptitudes })",
    icon: <IoIosRocket className="text-orange-500 text-2xl" />,
    color: "orange"
  },
  {
    title: "Course-to-Career Path Maps",
    desc: "Visualize clear career trajectories stemming from various academic paths.",
    code: "mapCareerPaths({ academicPaths, visualize: true })",
    icon: <IoIosMap className="text-blue-500 text-2xl" />,
    color: "blue"
  },
  {
    title: "Nearby Government Colleges Directory",
    desc: "Explore an extensive list of government colleges in your vicinity.",
    code: "findColleges({ type: 'government', radius: '50km' })",
    icon: <IoIosSchool className="text-green-500 text-2xl" />,
    color: "green"
  },
  {
    title: "Timeline & Scholarship Tracker",
    desc: "Stay updated on key dates and discover scholarship opportunities.",
    code: "trackTimeline({ dates: 'important', scholarships: true })",
    icon: <IoIosCalendar className="text-purple-500 text-2xl" />,
    color: "purple"
  }
];

const FeatureCard = ({ title, desc, code, icon, color }) => {
  const colorClasses = {
    orange: "border-orange-500/30",
    blue: "border-blue-500/30",
    green: "border-green-500/30",
    purple: "border-purple-500/30"
  };

  return (
    <div className={`bg-black border ${colorClasses[color]} rounded-xl p-5 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-${color}-500/10`}>
      {/* Terminal-style header */}
      <div className="flex items-center space-x-2 mb-4">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <span className="ml-2 text-xs text-gray-400">feature.js</span>
      </div>

      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 bg-gray-800 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          <p className="text-gray-400 text-sm">{desc}</p>
        </div>
      </div>

      <hr className="border-gray-700 mb-4" />
      
      <div className="bg-gray-900 text-sm text-blue-300 font-mono px-4 py-3 rounded-lg overflow-x-auto">
        {code}
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-black px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">
              Key Features Designed For Your Success
            </h2>
            <div className="absolute inset-0 opacity-30 lg:opacity-70 blur-2xl z-0 bg-[#EA580C]"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our comprehensive tools and resources help you make informed decisions about your education and career path.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;