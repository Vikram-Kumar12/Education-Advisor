const TrustedBy = () => {
  const stats = [
    {
      value: "5000+",
      label: "Students Guided",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      value: "50+",
      label: "Government Colleges Listed",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          Trusted by Students, Teachers, and NGOs
        </h2>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                {stat.icon}
              </div>
              
              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="text-lg font-medium text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Trusted By Logos (optional - can add actual logos later) */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">Trusted by educational institutions across the country</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
            <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
            <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
            <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;