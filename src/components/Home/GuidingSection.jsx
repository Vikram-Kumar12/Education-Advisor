import React from "react";

const benefits = [
  {
    title: "Stream Selection",
    desc: "Find the perfect academic stream that aligns with your strengths and career aspirations.",
    code: 'selectStream({ strengths: true, aspirations: true })',
    image: "🎯", // Target icon for focused stream selection
  },
  {
    title: "College Discovery",
    desc: "Explore top government colleges that match your academic profile and career goals.",
    code: "discoverColleges({ type: 'government', matchProfile: true })",
    image: "🏫", // School/college icon
  },
  {
    title: "Career Mapping",
    desc: "Map out viable career paths based on your chosen stream and educational qualifications.",
    code: "mapCareer({ stream, qualifications })",
    image: "🗺️", // Map icon
  },
  {
    title: "Admission Tracking",
    desc: "Track your admission progress with ease and stay updated on important deadlines.",
    code: "trackAdmission({ userId, status: 'inProgress' })",
    image: "📅", // Calendar icon
  },
  {
    title: "Personalized Guidance",
    desc: "Get tailored recommendations based on your unique profile and preferences.",
    code: "getGuidance({ personalized: true, algorithm: 'AI' })",
    image: "🧠", // Brain icon for personalized recommendations
    highlight: true,
  },
  {
    title: "Community Insights",
    desc: "Learn from the experiences of peers who have walked similar educational paths.",
    code: "community.getInsights({ path: 'similar' })",
    image: "👥", // People/community icon
  },
];


const BenefitCard = ({ title, desc, code, image, highlight }) => (
  <div className={`relative card-hover-bg bg-black overflow-hidden rounded-xl border ${highlight ? 'border-[#ff8000]' : 'border-[#ff8000]/30'} p-3 text-white transition-transform duration-300 hover:scale-[1.02]`}>
    {/* Card Content */}
    <div className="relative z-10">
      <div className="flex gap-2 mb-3">
        <span className="w-10 h-10 rounded-md flex items-center">{image}</span>
        <div className="flex flex-col items-start justify-start">
          <h3 className="text-md font-semibold text-orange-400">{title}</h3>
          <p className="text-gray-400 text-xs text-start">{desc}</p>
        </div>
      </div>
      <hr className="mb-2 border-gray-700" />
      <div className="bg-[#1a1a1a] text-xs text-blue-300 font-mono px-3 py-2 rounded-md w-full overflow-x-auto">
        {code}
      </div>
    </div>
  </div>
);

const GuidingSection = () => {
  return (
    <div id="guide" className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="relative inline-block mb-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">
            Guiding You Towards Clarity and Success
          </h2>
          <div className="absolute inset-0 opacity-30 lg:opacity-70 blur-2xl z-0 bg-[#EA580C]"></div>
        </div>

        <p className="text-gray-400 mb-10 mt-5 max-w-3xl mx-auto leading-relaxed ">
          Navigating academic and career choices can be daunting. Our platform simplifies the journey by helping you choose the perfect stream, discover top government colleges, map out viable career paths, and track your admission progress with ease. We bridge the information gap, empowering you to make informed decisions for a promising future.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <BenefitCard key={i} {...b} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuidingSection;