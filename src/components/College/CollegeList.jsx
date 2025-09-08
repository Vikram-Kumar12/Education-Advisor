import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CollegeDetails from "./CollegeDetails";

const CollegeList = ({ searchData, onClose }) => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [showCollegeDetails, setShowCollegeDetails] = useState(false);
  const [filter, setFilter] = useState("all");

  // Sample college data based on search criteria
  const getFilteredColleges = () => {
    let colleges = [];

    // Filter based on degree type
    if (searchData.degree === "BA") {
      colleges = [
        {
          id: 1,
          name: "Government Arts College",
          image: "https://images.unsplash.com/photo-1562774053-701939374585",
          distance: "4.2 km",
          courses: [
            "B.A. History",
            "B.A. Economics",
            "B.A. English",
            "B.A. Psychology",
          ],
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
          address: "A-7, Institutional Area, Narela, Delhi - 110040",
          email: "admissions@artscollege.ac.in",
          phone: "+91-11-27787300",
          website: "https://artscollege.ac.in",
          type: "Public Arts College",
          accreditation: "NAAC A",
          ranking: "45th in Arts Rankings",
          campusSize: "25 acres",
          faculty: "80+",
          students: "1500+",
        },
        {
          id: 2,
          name: "Shivaji Arts College",
          image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0",
          distance: "6.8 km",
          courses: [
            "B.A. Sociology",
            "B.A. Political Science",
            "B.A. Geography",
          ],
          cutoff: "65%",
          medium: "English",
          rating: 4.0,
          reviews: 76,
          fees: "₹10,000/year",
          established: 1985,
          placement: "70%",
          highlights: [
            "Debate Club",
            "Research Opportunities",
            "Student Exchange",
          ],
          color: "bg-orange-500",
          address: "B-12, Educational Zone, Delhi - 110042",
          email: "info@shivajiarts.ac.in",
          phone: "+91-11-27787311",
          website: "https://shivajiarts.ac.in",
          type: "Public Arts College",
          accreditation: "NAAC B++",
          ranking: "62nd in Arts Rankings",
          campusSize: "20 acres",
          faculty: "65+",
          students: "1200+",
        },
      ];
    } else if (searchData.degree === "BSc") {
      colleges = [
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
          address: "C-8, Science Complex, Delhi - 110045",
          email: "admissions@sciencedel.ac.in",
          phone: "+91-11-27787322",
          website: "https://sciencedel.ac.in",
          type: "Public Science College",
          accreditation: "NAAC A+",
          ranking: "35th in Science Rankings",
          campusSize: "30 acres",
          faculty: "95+",
          students: "1800+",
        },
        {
          id: 2,
          name: "Nehru Science College",
          image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
          distance: "7.5 km",
          courses: [
            "B.Sc. Biology",
            "B.Sc. Biotechnology",
            "B.Sc. Microbiology",
          ],
          cutoff: "78%",
          medium: "English",
          rating: 4.3,
          reviews: 112,
          fees: "₹18,000/year",
          established: 1990,
          placement: "80%",
          highlights: [
            "Research Labs",
            "Industry Collaboration",
            "Science Fairs",
          ],
          color: "bg-orange-600",
          address: "D-15, Research Park, Delhi - 110048",
          email: "info@nehruscience.ac.in",
          phone: "+91-11-27787333",
          website: "https://nehruscience.ac.in",
          type: "Public Science College",
          accreditation: "NAAC A",
          ranking: "40th in Science Rankings",
          campusSize: "28 acres",
          faculty: "85+",
          students: "1600+",
        },
      ];
    } else if (searchData.degree === "BTech") {
      colleges = [
        {
          id: 1,
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
          address: "E-22, Tech Zone, Delhi - 110050",
          email: "admissions@enggcollege.ac.in",
          phone: "+91-11-27787344",
          website: "https://enggcollege.ac.in",
          type: "Public Technical University",
          accreditation: "NAAC A++",
          ranking: "32nd in Engineering Rankings",
          campusSize: "64 acres",
          faculty: "120+",
          students: "2500+",
        },
        {
          id: 2,
          name: "State Institute of Technology",
          image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b",
          distance: "12.5 km",
          courses: ["B.Tech IT", "B.Tech Electronics", "B.Tech Chemical"],
          cutoff: "82%",
          medium: "English",
          rating: 4.6,
          reviews: 198,
          fees: "₹32,000/year",
          established: 2000,
          placement: "90%",
          highlights: ["Tech Incubator", "Hackathons", "Industry Visits"],
          color: "bg-orange-800",
          address: "F-30, Innovation District, Delhi - 110055",
          email: "info@sitdelhi.ac.in",
          phone: "+91-11-27787355",
          website: "https://sitdelhi.ac.in",
          type: "Public Technical Institute",
          accreditation: "NAAC A+",
          ranking: "38th in Engineering Rankings",
          campusSize: "50 acres",
          faculty: "110+",
          students: "2200+",
        },
      ];
    } else {
      // Default colleges if no specific degree is selected
      colleges = [
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
          address: "C-8, Science Complex, Delhi - 110045",
          email: "admissions@sciencedel.ac.in",
          phone: "+91-11-27787322",
          website: "https://sciencedel.ac.in",
          type: "Public Science College",
          accreditation: "NAAC A+",
          ranking: "35th in Science Rankings",
          campusSize: "30 acres",
          faculty: "95+",
          students: "1800+",
        },
        {
          id: 2,
          name: "Government Arts College",
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
          address: "A-7, Institutional Area, Narela, Delhi - 110040",
          email: "admissions@artscollege.ac.in",
          phone: "+91-11-27787300",
          website: "https://artscollege.ac.in",
          type: "Public Arts College",
          accreditation: "NAAC A",
          ranking: "45th in Arts Rankings",
          campusSize: "25 acres",
          faculty: "80+",
          students: "1500+",
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
          address: "E-22, Tech Zone, Delhi - 110050",
          email: "admissions@enggcollege.ac.in",
          phone: "+91-11-27787344",
          website: "https://enggcollege.ac.in",
          type: "Public Technical University",
          accreditation: "NAAC A++",
          ranking: "32nd in Engineering Rankings",
          campusSize: "64 acres",
          faculty: "120+",
          students: "2500+",
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
          address: "G-40, Medical Campus, Delhi - 110060",
          email: "info@medicalcollege.ac.in",
          phone: "+91-11-27787366",
          website: "https://medicalcollege.ac.in",
          type: "Public Medical College",
          accreditation: "NAAC A++",
          ranking: "25th in Medical Rankings",
          campusSize: "75 acres",
          faculty: "150+",
          students: "2000+",
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
          address: "H-15, Legal Precinct, Delhi - 110065",
          email: "admissions@lawcollege.ac.in",
          phone: "+91-11-27787377",
          website: "https://lawcollege.ac.in",
          type: "Public Law College",
          accreditation: "NAAC A+",
          ranking: "30th in Law Rankings",
          campusSize: "35 acres",
          faculty: "90+",
          students: "1700+",
        },
      ];
    }

    // Further filter by PIN if provided
    if (searchData.pin) {
      colleges = colleges.filter(
        (college) => college.distance.includes(searchData.pin.charAt(0)) // Simple filtering for demo
      );
    }

    return colleges;
  };

  const colleges = getFilteredColleges();

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

  const handleQuickView = (college) => {
    setSelectedCollege(college);
    setShowCollegeDetails(true);
  };

  const handleCloseCollegeDetails = () => {
    setShowCollegeDetails(false);
    setSelectedCollege(null);
  };

  return (
    <div className="min-h-screen border border-gray-800 bg-gray-900 rounded-md text-white p-6">
      <div className="relative max-w-7xl mx-auto pt-8 pb-16">
        {/* College Details Component */}
        <AnimatePresence>
          {showCollegeDetails && selectedCollege && (
            <CollegeDetails
              college={selectedCollege}
              onClose={handleCloseCollegeDetails}
            />
          )}
        </AnimatePresence>

        {/* College List (only show if not viewing details) */}
        {!showCollegeDetails && (
          <>
            {/* Close button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-800 transition"
                aria-label="Close results"
              >
                <svg
                  className="w-6 h-6 text-gray-400 hover:text-white"
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
            </div>

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
                {searchData.pin && `PIN: ${searchData.pin} • `}
                {searchData.degree && `Degree: ${searchData.degree}`}
                {!searchData.pin &&
                  !searchData.degree &&
                  "Discover the best government colleges matching your preferences"}
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
                {[
                  "all",
                  "b.sc",
                  "b.a",
                  "b.tech",
                  "mbbs",
                  "llb",
                  "b.ed",
                  "bba",
                ].map((filterOption) => (
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
                ))}
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
                        onClick={() => handleQuickView(college)}
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
          </>
        )}
      </div>
    </div>
  );
};

export default CollegeList;
