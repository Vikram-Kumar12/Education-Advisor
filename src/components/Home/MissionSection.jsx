const MissionSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          Our Mission: Empowering Academic Futures
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At CareerPath, our mission is to democratize access to quality education and career guidance. 
            We aim to close awareness gaps, particularly for students aspiring to government colleges, 
            by providing comprehensive tools and resources. We believe every student deserves the 
            opportunity to make informed academic decisions that lead to a successful and fulfilling career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;