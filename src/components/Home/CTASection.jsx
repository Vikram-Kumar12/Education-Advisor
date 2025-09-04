const CTASection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Plan Your Future?
        </h2>
        
        {/* Subtext */}
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          It's free and only takes a few minutes to get personalized guidance.
        </p>
        
        {/* CTA Button */}
        <button className="bg-white text-blue-600 font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          Start Your Journey
        </button>
        
        {/* Additional reassurance text */}
        <p className="text-blue-100 text-sm mt-6">
          No credit card required • No obligations
        </p>
      </div>
    </section>
  );
};

export default CTASection;