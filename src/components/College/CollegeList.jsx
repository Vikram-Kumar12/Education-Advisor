// CollegeList.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CollegeList = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [filter, setFilter] = useState("all");
  const Navigate = useNavigate();
  const colleges = [
    {
      id: 1,
      name: "Government Science College",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
      distance: "4.2 km",
      courses: [
        "B.Sc. CS",
        "B.Sc. Physics",
        "B.Sc. Chemistry",
        "B.Sc. Mathematics",
      ],
      cutoff: "75%",
      medium: "English",
      rating: 4.5,
      reviews: 124,
      fees: "₹15,000/year",
      established: 1985,
      placement: "82%",
      highlights: ["NAAC A+", "Research Opportunities", "Modern Labs"],
      color: "bg-orange-500",
    },
    {
      id: 2,
      name: "Govt. Arts & Commerce College",
      image: "https://images.unsplash.com/photo-1562774053-701939374585",
      distance: "6.5 km",
      courses: ["B.A. History", "B.A. Economics", "B.Com", "B.A. English"],
      cutoff: "70%",
      medium: "Hindi/English",
      rating: 4.2,
      reviews: 98,
      fees: "₹12,000/year",
      established: 1972,
      placement: "75%",
      highlights: [
        "Cultural Activities",
        "Library Resources",
        "Sports Facilities",
      ],
      color: "bg-orange-600",
    },
    {
      id: 3,
      name: "Government Engineering College",
      image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0",
      distance: "8.3 km",
      courses: [
        "B.Tech CS",
        "B.Tech Mechanical",
        "B.Tech Electrical",
        "B.Tech Civil",
      ],
      cutoff: "85%",
      medium: "English",
      rating: 4.7,
      reviews: 215,
      fees: "₹35,000/year",
      established: 1990,
      placement: "92%",
      highlights: [
        "Industry Partnerships",
        "Innovation Center",
        "Placement Training",
      ],
      color: "bg-orange-700",
    },
    {
      id: 4,
      name: "Government Medical College",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
      distance: "12.1 km",
      courses: ["MBBS", "BDS", "B.Pharm", "Nursing"],
      cutoff: "90%",
      medium: "English",
      rating: 4.8,
      reviews: 187,
      fees: "₹45,000/year",
      established: 1965,
      placement: "95%",
      highlights: [
        "Hospital Attachment",
        "Research Programs",
        "International Faculty",
      ],
      color: "bg-orange-800",
    },
    {
      id: 5,
      name: "Government Law College",
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb",
      distance: "5.7 km",
      courses: ["LLB", "BA LLB", "B.Com LLB", "LLM"],
      cutoff: "78%",
      medium: "English",
      rating: 4.4,
      reviews: 142,
      fees: "₹25,000/year",
      established: 1980,
      placement: "80%",
      highlights: [
        "Moot Court",
        "Legal Aid Clinic",
        "Internship Opportunities",
      ],
      color: "bg-orange-900",
    },
    {
      id: 6,
      name: "Government Agriculture College",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
      distance: "15.3 km",
      courses: [
        "B.Sc Agriculture",
        "B.Sc Horticulture",
        "B.Tech Food Technology",
      ],
      cutoff: "72%",
      medium: "English/Hindi",
      rating: 4.3,
      reviews: 87,
      fees: "₹18,000/year",
      established: 1978,
      placement: "79%",
      highlights: ["Research Farms", "Agri-Business Incubator", "Field Visits"],
      color: "bg-orange-500",
    },
    {
      id: 7,
      name: "Government Education College",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b",
      distance: "7.2 km",
      courses: ["B.Ed", "M.Ed", "B.P.Ed", "D.El.Ed"],
      cutoff: "68%",
      medium: "English/Hindi",
      rating: 4.1,
      reviews: 76,
      fees: "₹14,000/year",
      established: 1995,
      placement: "85%",
      highlights: [
        "Teaching Practice",
        "Child Development Lab",
        "Curriculum Development",
      ],
      color: "bg-orange-600",
    },
    {
      id: 8,
      name: "Government Fashion Technology Institute",
      image: "https://images.unsplash.com/photo-1566206091558-7f218b696731",
      distance: "9.8 km",
      courses: ["B.Des Fashion", "B.Text", "Fashion Marketing"],
      cutoff: "65%",
      medium: "English",
      rating: 4.0,
      reviews: 63,
      fees: "₹32,000/year",
      established: 2005,
      placement: "88%",
      highlights: ["Design Studios", "Industry Workshops", "Fashion Shows"],
      color: "bg-orange-700",
    },
    {
      id: 9,
      name: "Government Music & Fine Arts College",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
      distance: "3.5 km",
      courses: ["BFA", "B.Music", "B.Dance", "B.Theater"],
      cutoff: "60%",
      medium: "English/Hindi",
      rating: 4.6,
      reviews: 105,
      fees: "₹20,000/year",
      established: 1960,
      placement: "70%",
      highlights: ["Performance Spaces", "Art Galleries", "Master Classes"],
      color: "bg-orange-800",
    },
    {
      id: 10,
      name: "Government Management Studies",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      distance: "11.4 km",
      courses: ["BBA", "BMS", "B.Com Hons", "Business Economics"],
      cutoff: "80%",
      medium: "English",
      rating: 4.5,
      reviews: 156,
      fees: "₹28,000/year",
      established: 1992,
      placement: "90%",
      highlights: ["Industry Interface", "Business Conclaves", "Startup Cell"],
      color: "bg-orange-900",
    },
  ];

  const filteredColleges =
    filter === "all"
      ? colleges
      : colleges.filter((college) =>
          college.courses.some((course) =>
            course.toLowerCase().includes(filter)
          )
        );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const detailVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="relative max-w-7xl mx-auto pt-8 pb-16">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
            Colleges Near You
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the best government colleges matching your preferences
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          className="bg-gray-900 rounded-2xl shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4 text-orange-400">
            Filter Colleges
          </h2>
          <div className="flex flex-wrap gap-3">
            {["all", "b.sc", "b.a", "b.tech", "mbbs", "llb", "b.ed", "bba"].map(
              (filterOption) => (
                <button
                  key={filterOption}
                  onClick={() => setFilter(filterOption)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    filter === filterOption
                      ? "bg-orange-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {filterOption === "all"
                    ? "All Colleges"
                    : filterOption.toUpperCase()}
                </button>
              )
            )}
          </div>
        </motion.div>

        {/* College Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredColleges.map((college) => (
            <motion.div
              key={college.id}
              variants={itemVariants}
              whileHover="hover"
              variants={cardHoverVariants}
              className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col border border-gray-800"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div
                  className={`absolute top-4 right-4 ${college.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {college.distance}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{college.name}</h3>
                  <div className="flex items-center mt-1">
                    <svg
                      className="w-4 h-4 text-orange-400 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm">
                      {college.rating} ({college.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-orange-400 mb-1">
                    Courses Offered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.slice(0, 3).map((course, i) => (
                      <span
                        key={i}
                        className="bg-orange-900 text-orange-200 text-xs px-2 py-1 rounded"
                      >
                        {course}
                      </span>
                    ))}
                    {college.courses.length > 3 && (
                      <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">
                        +{college.courses.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Cut-off</p>
                    <p className="text-sm font-semibold text-white">
                      {college.cutoff}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Fees</p>
                    <p className="text-sm font-semibold text-white">
                      {college.fees}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Placement</p>
                    <p className="text-sm font-semibold text-white">
                      {college.placement}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Medium</p>
                    <p className="text-sm font-semibold text-white">
                      {college.medium}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-4 flex justify-between">
                  <button
                    className="text-orange-500 text-sm font-medium hover:text-orange-400 transition"
                    // onClick={() => setSelectedCollege(college)}
                    onClick={()=>Navigate('/college-details')}
                  >
                    Quick View
                  </button>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No results message */}
        {filteredColleges.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg
              className="w-16 h-16 text-gray-600 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              No colleges found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters to find more options
            </p>
          </motion.div>
        )}
      </div>

      {/* College Detail Modal */}
      {/* <AnimatePresence>
        {selectedCollege && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCollege(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
              variants={detailVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56">
                <img
                  src={selectedCollege.image}
                  alt={selectedCollege.name}
                  className="w-full h-full object-cover"
                />
                <button
                  className="absolute top-4 right-4 bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-700 transition text-white"
                  onClick={() => setSelectedCollege(null)}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-24" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl font-bold">{selectedCollege.name}</h2>
                  <p className="text-sm">Est. {selectedCollege.established}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-orange-900 bg-opacity-30 p-4 rounded-lg border border-orange-800">
                    <p className="text-sm text-orange-300">
                      Cut-off Percentage
                    </p>
                    <p className="text-xl font-bold text-orange-400">
                      {selectedCollege.cutoff}
                    </p>
                  </div>
                  <div className="bg-orange-900 bg-opacity-30 p-4 rounded-lg border border-orange-800">
                    <p className="text-sm text-orange-300">Annual Fees</p>
                    <p className="text-xl font-bold text-orange-400">
                      {selectedCollege.fees}
                    </p>
                  </div>
                  <div className="bg-orange-900 bg-opacity-30 p-4 rounded-lg border border-orange-800">
                    <p className="text-sm text-orange-300">Placement Rate</p>
                    <p className="text-xl font-bold text-orange-400">
                      {selectedCollege.placement}
                    </p>
                  </div>
                  <div className="bg-orange-900 bg-opacity-30 p-4 rounded-lg border border-orange-800">
                    <p className="text-sm text-orange-300">Medium</p>
                    <p className="text-xl font-bold text-orange-400">
                      {selectedCollege.medium}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">
                    Courses Offered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCollege.courses.map((course, i) => (
                      <span
                        key={i}
                        className="bg-orange-900 text-orange-200 px-3 py-1 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">
                    College Highlights
                  </h3>
                  <ul className="space-y-2">
                    {selectedCollege.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-orange-500 mr-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center mt-8">
                  <button
                    className="text-gray-400 hover:text-white transition"
                    onClick={() => setSelectedCollege(null)}
                  >
                    Close
                  </button>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition">
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default CollegeList;
