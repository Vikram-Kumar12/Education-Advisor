const MissionSection = () => {
  return (
    <section id="mission" className="py-16 px-4 ">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative inline-block mb-15">
          <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">
            Our Mission: Empowering<span className="text-[#FF9500]"> Academic </span>Futures
          </h2>
          <div className="absolute inset-0 opacity-30 lg:opacity-70 blur-2xl z-0 bg-[#EA580C]"></div>
        </div>
        <div className="border-2 border-gray-700 rounded-xl shadow-2xl p-8 md:p-10">
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            At <span className="text-[#FF9500]">GuideMeMate</span>, our mission is to democratize access to quality
            education and career guidance. We aim to close awareness gaps,
            particularly for students aspiring to government colleges, by
            providing comprehensive tools and resources. We believe every
            student deserves the opportunity to make informed academic decisions
            that lead to a successful and fulfilling career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
