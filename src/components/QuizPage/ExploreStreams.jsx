import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, GraduationCap, DollarSign, ArrowLeft, ChevronRight } from 'lucide-react';

const ExploreStreams = ({ selectedStream }) => {
  const [activeTab, setActiveTab] = useState('career-options');
  
  // Default to Science if no stream is selected
  const stream = selectedStream || 'Science';
  
  // Sample data for different streams
  const streamData = {
    Science: {
      title: "Science Stream Careers",
      description: "Explore career options for Science stream including B.Sc., B.Tech, and other degrees.",
      courses: [
        {
          name: "B.Sc. Computer Science",
          careers: ["Software Developer", "Data Analyst", "System Administrator", "Cloud Engineer", "AI Specialist"],
          entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "State CETs"],
          salaries: "₹4-12 LPA (Fresh Graduates)"
        },
        {
          name: "B.Tech Mechanical Engineering",
          careers: ["Product Designer", "Manufacturing Engineer", "Automotive Engineer", "HVAC Engineer", "Robotics Engineer"],
          entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "SRMJEEE", "MET"],
          salaries: "₹3.5-10 LPA (Fresh Graduates)"
        },
        {
          name: "B.Sc. Physics",
          careers: ["Research Scientist", "Lecturer", "Space Scientist", "Data Scientist", "Technical Writer"],
          entranceExams: ["IISER Aptitude Test", "NEST", "JAM", "CUET", "University Entrances"],
          salaries: "₹3-8 LPA (Fresh Graduates)"
        },
        {
          name: "B.Sc. Chemistry",
          careers: ["Chemist", "Pharmacist", "Quality Control Specialist", "Environmental Scientist", "Lab Technician"],
          entranceExams: ["IISER Aptitude Test", "NEST", "JAM", "CUET", "University Entrances"],
          salaries: "₹3-7 LPA (Fresh Graduates)"
        },
        {
          name: "B.Sc. Biology",
          careers: ["Biotechnologist", "Medical Lab Technician", "Ecologist", "Genetic Counselor", "Microbiologist"],
          entranceExams: ["NEET", "AIIMS", "JIPMER", "CUET", "University Entrances"],
          salaries: "₹3-6 LPA (Fresh Graduates)"
        }
      ]
    },
    Commerce: {
      title: "Commerce Stream Careers",
      description: "Explore career options for Commerce stream including B.Com, BBA, CA, and other professional courses.",
      courses: [
        {
          name: "B.Com (Hons)",
          careers: ["Accountant", "Financial Analyst", "Tax Consultant", "Auditor", "Business Advisor"],
          entranceExams: ["CUET", "IPU CET", "SET", "University Entrances"],
          salaries: "₹3-8 LPA (Fresh Graduates)"
        },
        {
          name: "BBA",
          careers: ["Business Administrator", "Marketing Executive", "HR Specialist", "Sales Manager", "Entrepreneur"],
          entranceExams: ["IPMAT", "SET", "NPAT", "AIMA UGAT", "University Entrances"],
          salaries: "₹3-9 LPA (Fresh Graduates)"
        },
        {
          name: "Chartered Accountancy (CA)",
          careers: ["Chartered Accountant", "Financial Controller", "Internal Auditor", "Tax Specialist", "Chief Financial Officer"],
          entranceExams: ["CA Foundation", "CA Intermediate", "CA Final"],
          salaries: "₹6-15 LPA (Fresh CAs)"
        },
        {
          name: "Company Secretary (CS)",
          careers: ["Company Secretary", "Compliance Officer", "Legal Advisor", "Corporate Planner", "Policy Maker"],
          entranceExams: ["CSEET", "CS Executive", "CS Professional"],
          salaries: "₹4-10 LPA (Fresh CS)"
        }
      ]
    },
    Arts: {
      title: "Arts Stream Careers",
      description: "Explore career options for Arts stream including BA, Fine Arts, Psychology, and other humanities degrees.",
      courses: [
        {
          name: "BA (Hons) Psychology",
          careers: ["Clinical Psychologist", "Counselor", "HR Specialist", "Social Worker", "Researcher"],
          entranceExams: ["CUET", "TISS BAT", "University Entrances"],
          salaries: "₹3-7 LPA (Fresh Graduates)"
        },
        {
          name: "BA (Hons) English",
          careers: ["Content Writer", "Editor", "Journalist", "Teacher", "Public Relations Specialist"],
          entranceExams: ["CUET", "University Entrances"],
          salaries: "₹2.5-6 LPA (Fresh Graduates)"
        },
        {
          name: "BA (Hons) Economics",
          careers: ["Economist", "Policy Analyst", "Financial Consultant", "Data Analyst", "Researcher"],
          entranceExams: ["CUET", "JNUEE", "University Entrances"],
          salaries: "₹4-9 LPA (Fresh Graduates)"
        },
        {
          name: "BA (Hons) Political Science",
          careers: ["Political Analyst", "Public Administrator", "Policy Maker", "Diplomat", "Lawyer"],
          entranceExams: ["CUET", "JNUEE", "University Entrances"],
          salaries: "₹3-8 LPA (Fresh Graduates)"
        }
      ]
    },
    Vocational: {
      title: "Vocational Stream Careers",
      description: "Explore career options for Vocational stream including ITI, Diploma, and other skill-based courses.",
      courses: [
        {
          name: "Diploma in Mechanical Engineering",
          careers: ["Junior Engineer", "Technician", "CAD Operator", "Quality Inspector", "Maintenance Supervisor"],
          entranceExams: ["Polytechnic Entrance Exams", "State Diploma Entrances"],
          salaries: "₹2-5 LPA (Fresh Graduates)"
        },
        {
          name: "Diploma in Computer Science",
          careers: ["Web Developer", "IT Support", "Network Technician", "Software Tester", "Database Operator"],
          entranceExams: ["Polytechnic Entrance Exams", "State Diploma Entrances"],
          salaries: "₹2.5-6 LPA (Fresh Graduates)"
        },
        {
          name: "Hotel Management",
          careers: ["Hotel Manager", "Chef", "Event Planner", "Front Office Executive", "Food Beverage Manager"],
          entranceExams: ["NCHMCT JEE", "State Entrances"],
          salaries: "₹2.5-5 LPA (Fresh Graduates)"
        },
        {
          name: "Healthcare Diploma",
          careers: ["Lab Technician", "Pharmacist Assistant", "Nurse", "Medical Assistant", "Physiotherapist"],
          entranceExams: ["State Paramedical Entrances", "Institutional Entrances"],
          salaries: "₹2-4.5 LPA (Fresh Graduates)"
        }
      ]
    }
  };

  const currentData = streamData[stream];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
        >
          <div className="flex items-center mb-4">
            <button className="flex items-center text-green-600 hover:text-green-800 mr-4">
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back
            </button>
            <div className="h-6 w-1 bg-green-400 mr-4"></div>
            <h1 className="text-3xl font-bold text-gray-800">Explore Career Options by Stream</h1>
          </div>
          <p className="text-gray-600 text-lg">
            See what {stream === 'Science' ? 'B.Sc., B.Tech, and other degrees' : 
                          stream === 'Commerce' ? 'B.Com, BBA, CA, and other professional courses' :
                          stream === 'Arts' ? 'BA, Fine Arts, Psychology, and other humanities degrees' :
                          'ITI, Diploma, and other skill-based courses'} lead to.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-4 mb-6"
        >
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('career-options')}
              className={`flex items-center px-4 py-2 rounded-lg font-medium ${
                activeTab === 'career-options'
                  ? 'bg-green-100 text-green-800'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Briefcase className="h-4 w-4 mr-2" />
              Career Options
            </button>
            <button
              onClick={() => setActiveTab('entrance-exams')}
              className={`flex items-center px-4 py-2 rounded-lg font-medium ${
                activeTab === 'entrance-exams'
                  ? 'bg-green-100 text-green-800'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <GraduationCap className="h-4 w-4 mr-2" />
              Entrance Exams
            </button>
            <button
              onClick={() => setActiveTab('salaries')}
              className={`flex items-center px-4 py-2 rounded-lg font-medium ${
                activeTab === 'salaries'
                  ? 'bg-green-100 text-green-800'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <DollarSign className="h-4 w-4 mr-2" />
              Expected Salaries
            </button>
          </div>
        </motion.div>

        {/* Content based on active tab */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Table Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-5 font-semibold text-gray-700">Course</div>
              <div className="col-span-7 font-semibold text-gray-700">
                {activeTab === 'career-options' && 'Potential Career Paths'}
                {activeTab === 'entrance-exams' && 'Entrance Exams'}
                {activeTab === 'salaries' && 'Expected Salaries'}
              </div>
            </div>
          </div>

          {/* Table Content */}
          <div className="divide-y divide-gray-200">
            {currentData.courses.map((course, index) => (
              <div key={index} className="px-6 py-4 hover:bg-gray-50 transition duration-150">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-5">
                    <h3 className="font-medium text-gray-900">{course.name}</h3>
                  </div>
                  <div className="col-span-7">
                    {activeTab === 'career-options' && (
                      <div className="flex flex-wrap gap-2">
                        {course.careers.map((career, i) => (
                          <span key={i} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            {career}
                          </span>
                        ))}
                      </div>
                    )}
                    {activeTab === 'entrance-exams' && (
                      <div className="flex flex-wrap gap-2">
                        {course.entranceExams.map((exam, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {exam}
                          </span>
                        ))}
                      </div>
                    )}
                    {activeTab === 'salaries' && (
                      <div className="text-gray-700 font-medium">
                        {course.salaries}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-green-600 to-teal-700 rounded-2xl shadow-lg p-6 mt-6 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready to take the next step?</h3>
              <p className="text-green-100">Explore colleges offering these courses and start your career journey</p>
            </div>
            <button className="flex items-center mt-4 md:mt-0 px-5 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition duration-200">
              View Colleges Offering These Courses
              <ChevronRight className="h-5 w-5 ml-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExploreStreams;