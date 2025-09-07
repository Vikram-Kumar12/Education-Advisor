import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CollegeDetails = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [expandedCourse, setExpandedCourse] = useState(null);

  const college = {
    name: "National Institute of Technology Delhi",
    address: "A-7, Institutional Area, Narela, Delhi - 110040",
    email: "admissions@nitdelhi.ac.in",
    phone: "+91-11-27787300",
    website: "https://nitdelhi.ac.in",
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
    established: 2010,
    type: "Public Technical University",
    accreditation: "NAAC A++",
    ranking: "32nd in NIRF Engineering Rankings",
    campusSize: "64 acres",
    faculty: "120+",
    students: "2500+",
    courses: [
      {
        id: 1,
        title: "B.Tech. Computer Science & Engineering",
        duration: "4 Years",
        seats: 120,
        fees: "₹1,25,000 per year",
        description: "Focuses on fundamental concepts of computer science, algorithms, software development, and modern computing technologies.",
        highlights: ["Artificial Intelligence", "Machine Learning", "Data Science", "Cloud Computing", "Cyber Security"],
        eligibility: "10+2 with 75% aggregate and JEE Main qualified",
        placement: "98% placement with average package of ₹12 LPA"
      },
      {
        id: 2,
        title: "B.Tech. Electronics & Communication Engineering",
        duration: "4 Years",
        seats: 90,
        fees: "₹1,15,000 per year",
        description: "Covers analog and digital electronics, communication systems, signal processing, and integrated circuits.",
        highlights: ["VLSI Design", "Embedded Systems", "Wireless Communication", "IoT", "5G Technology"],
        eligibility: "10+2 with 75% aggregate and JEE Main qualified",
        placement: "95% placement with average package of ₹9 LPA"
      },
      {
        id: 3,
        title: "B.Tech. Mechanical Engineering",
        duration: "4 Years",
        seats: 80,
        fees: "₹1,10,000 per year",
        description: "Deals with the design, analysis, manufacturing, and maintenance of mechanical systems.",
        highlights: ["Robotics", "CAD/CAM", "Thermodynamics", "Automotive Engineering", "Mechatronics"],
        eligibility: "10+2 with 75% aggregate and JEE Main qualified",
        placement: "92% placement with average package of ₹8 LPA"
      },
      {
        id: 4,
        title: "B.Tech. Civil Engineering",
        duration: "4 Years",
        seats: 60,
        fees: "₹1,05,000 per year",
        description: "Focuses on design, construction, and maintenance of the physical and naturally built environment.",
        highlights: ["Structural Engineering", "Geotechnical Engineering", "Transportation Engineering", "Environmental Engineering"],
        eligibility: "10+2 with 75% aggregate and JEE Main qualified",
        placement: "88% placement with average package of ₹7.5 LPA"
      }
    ],
    cutoff: {
      "B.Tech. Computer Science & Engineering": "98.5%",
      "B.Tech. Electronics & Communication Engineering": "95.2%",
      "B.Tech. Mechanical Engineering": "92.8%",
      "B.Tech. Civil Engineering": "90.5%"
    },
    facilities: [
      {
        title: "Hostel Accommodation",
        description: "Separate hostels for boys and girls with modern amenities including Wi-Fi, gym, and common rooms",
        icon: "🏠"
      },
      {
        title: "Library",
        description: "Central library with 50,000+ books, e-resources, journals, and digital learning materials",
        icon: "📚"
      },
      {
        title: "Laboratories",
        description: "State-of-the-art labs for each department with latest equipment and technology",
        icon: "🔬"
      },
      {
        title: "Sports Complex",
        description: "Indoor and outdoor sports facilities including cricket ground, basketball court, and swimming pool",
        icon: "⚽"
      },
      {
        title: "Medical Facilities",
        description: "24/7 medical center with resident doctor and ambulance service",
        icon: "🏥"
      },
      {
        title: "Cafeteria",
        description: "Multi-cuisine food court with hygienic and nutritious food options",
        icon: "🍔"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1562774053-701939374585",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Banner */}
      <motion.div 
        className="relative h-80 w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img src={college.image} alt="college" className="object-cover w-full h-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-orange-900 bg-opacity-80 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-2"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              {college.name}
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-orange-200"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {college.type} • Est. {college.established} • {college.accreditation}
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Contact */}
          <motion.div
            className="w-full lg:w-1/3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-900 rounded-2xl shadow-xl p-6 mb-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-4 text-orange-400 border-b border-orange-800 pb-2">College Overview</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-orange-900 bg-opacity-50 p-3 rounded-full mr-3">
                    <span className="text-orange-400">🏛️</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Type</p>
                    <p className="font-medium text-white">{college.type}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-900 bg-opacity-50 p-3 rounded-full mr-3">
                    <span className="text-orange-400">📊</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Ranking</p>
                    <p className="font-medium text-white">{college.ranking}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-900 bg-opacity-50 p-3 rounded-full mr-3">
                    <span className="text-orange-400">📏</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Campus Size</p>
                    <p className="font-medium text-white">{college.campusSize}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-900 bg-opacity-50 p-3 rounded-full mr-3">
                    <span className="text-orange-400">👨‍🏫</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Faculty</p>
                    <p className="font-medium text-white">{college.faculty}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-900 bg-opacity-50 p-3 rounded-full mr-3">
                    <span className="text-orange-400">👨‍🎓</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Students</p>
                    <p className="font-medium text-white">{college.students}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl shadow-xl p-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-4 text-orange-400 border-b border-orange-800 pb-2">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-orange-900 bg-opacity-50 p-3 rounded-full mr-3">
                    <span className="text-orange-400">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="font-medium text-white">{college.name}</p>
                    <p className="text-sm text-gray-300">{college.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-900 bg-opacity-50 p-3 rounded-full mr-3">
                    <span className="text-orange-400">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href={`mailto:${college.email}`} className="font-medium text-orange-400 hover:underline">{college.email}</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-900 bg-opacity-50 p-3 rounded-full mr-3">
                    <span className="text-orange-400">📞</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href={`tel:${college.phone}`} className="font-medium text-orange-400 hover:underline">{college.phone}</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-900 bg-opacity-50 p-3 rounded-full mr-3">
                    <span className="text-orange-400">🌐</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Website</p>
                    <a href={college.website} target="_blank" rel="noreferrer" className="font-medium text-orange-400 hover:underline">Visit Website</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            {/* Tabs */}
            <motion.div 
              className="flex gap-2 mb-6 bg-gray-900 rounded-2xl shadow-xl p-2 border border-gray-800"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { id: 'courses', label: 'Courses', icon: '📚' },
                { id: 'cutoff', label: 'Cut-off', icon: '📊' },
                { id: 'facilities', label: 'Facilities', icon: '🏢' },
                { id: 'gallery', label: 'Gallery', icon: '🖼️' }
              ].map(tab => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-orange-600 to-orange-800 text-white shadow-md"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="bg-gray-900 rounded-2xl shadow-xl p-6 mb-6 border border-gray-800"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                {activeTab === "courses" && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-orange-400 border-b border-orange-800 pb-2">Offered Courses</h3>
                    <div className="space-y-4">
                      {college.courses.map((course) => (
                        <motion.div
                          key={course.id}
                          className="border border-gray-800 rounded-2xl p-5 hover:shadow-lg transition-all overflow-hidden bg-gray-800"
                          whileHover={{ y: -3 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="text-xl font-bold text-white">{course.title}</h4>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <span className="bg-orange-900 text-orange-200 text-xs px-3 py-1 rounded-full">{course.duration}</span>
                                <span className="bg-orange-900 text-orange-200 text-xs px-3 py-1 rounded-full">{course.seats} Seats</span>
                                <span className="bg-orange-900 text-orange-200 text-xs px-3 py-1 rounded-full">{course.fees}</span>
                              </div>
                            </div>
                            <button
                              onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                              className="text-orange-500 hover:text-orange-400 font-medium"
                            >
                              {expandedCourse === course.id ? 'Show Less' : 'View Details'}
                            </button>
                          </div>
                          
                          <p className="text-gray-300 mb-3">{course.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {course.highlights.slice(0, 3).map((skill, i) => (
                              <span key={i} className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">{skill}</span>
                            ))}
                            {course.highlights.length > 3 && (
                              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                                +{course.highlights.length - 3} more
                              </span>
                            )}
                          </div>
                          
                          <AnimatePresence>
                            {expandedCourse === course.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 pt-4 border-t border-gray-700"
                              >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <h5 className="font-semibold text-orange-400 mb-2">Eligibility</h5>
                                    <p className="text-sm text-gray-300">{course.eligibility}</p>
                                  </div>
                                  <div>
                                    <h5 className="font-semibold text-orange-400 mb-2">Placement</h5>
                                    <p className="text-sm text-gray-300">{course.placement}</p>
                                  </div>
                                </div>
                                <div className="mt-4">
                                  <h5 className="font-semibold text-orange-400 mb-2">Specializations</h5>
                                  <div className="flex flex-wrap gap-2">
                                    {course.highlights.map((skill, i) => (
                                      <span key={i} className="bg-orange-900 text-orange-200 text-xs px-3 py-1 rounded-full">{skill}</span>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "cutoff" && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-orange-400 border-b border-orange-800 pb-2">Eligibility & Cut-off</h3>
                    <div className="bg-orange-900 bg-opacity-30 rounded-xl p-5 mb-6 border border-orange-800">
                      <h4 className="text-lg font-semibold mb-2 text-orange-300">General Eligibility Criteria</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Minimum 75% aggregate in 10+2 examination with Physics, Chemistry, and Mathematics</li>
                        <li>Valid JEE Main score</li>
                        <li>Age limit: 17-25 years</li>
                        <li>Indian nationals only</li>
                      </ul>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-4 text-orange-400">Previous Year Cut-off Percentiles</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(college.cutoff).map(([course, cutoff], index) => (
                        <motion.div 
                          key={course}
                          className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-sm"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <h5 className="font-semibold text-white">{course}</h5>
                          <div className="mt-2 flex items-center">
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                              <div 
                                className="bg-gradient-to-r from-orange-500 to-orange-700 h-2.5 rounded-full" 
                                style={{ width: `${parseFloat(cutoff)}%` }}
                              ></div>
                            </div>
                            <span className="ml-2 text-sm font-bold text-orange-400">{cutoff}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "facilities" && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-orange-400 border-b border-orange-800 pb-2">Campus Facilities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {college.facilities.map((facility, index) => (
                        <motion.div 
                          key={index}
                          className="bg-gray-800 rounded-xl p-5 border border-gray-700"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -3 }}
                        >
                          <div className="flex items-start">
                            <span className="text-3xl mr-4 text-orange-400">{facility.icon}</span>
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-2">{facility.title}</h4>
                              <p className="text-gray-300">{facility.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "gallery" && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-orange-400 border-b border-orange-800 pb-2">Campus Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {college.gallery.map((image, index) => (
                        <motion.div 
                          key={index}
                          className="rounded-xl overflow-hidden shadow-md border border-gray-800"
                          whileHover={{ scale: 1.03 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <img 
                            src={image} 
                            alt={`Campus ${index + 1}`} 
                            className="w-full h-48 object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;