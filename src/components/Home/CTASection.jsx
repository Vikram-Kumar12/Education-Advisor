const CTASection = () => {
  return (
    // bg-gradient-to-r from-gray-900 via-black to-gray-900
    <section className="pt-10 mt-10 px-4 relative overflow-hidden mb-30 md:mb-35 rounded-md pb-10">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff8000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Glowing elements */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading */}
        <div className="relative inline-block mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">
            Ready to Transform Your Career Path?
          </h2>
          <div className="absolute inset-0 opacity-30 lg:opacity-40 blur-2xl z-0 bg-[#EA580C]"></div>
        </div>

        {/* Subtext */}
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-mono">
          // It's free and only takes a few minutes to get personalized guidance
        </p>

        {/* Code snippet */}
        <div className="bg-gray-800 text-sm text-blue-300 font-mono px-6 py-4 rounded-lg mb-8 max-w-md mx-auto text-left overflow-x-auto">
          <span className="text-green-400">$</span> career-path --start --free
          --personalized
        </div>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-400/30 relative group cursor-pointer">
          <span className="relative z-10">Start Your Journey Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Additional reassurance text */}
        <p className="text-gray-400 text-sm mt-6 font-mono">
          // No credit card required • No obligations • 100% Free
        </p>
      </div>
    </section>
  );
};

export default CTASection;
