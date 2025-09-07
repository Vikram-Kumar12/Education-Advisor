import React from 'react';

const TimelineContent = () => {
  // Timeline data for June to September
  const timelineData = [
    {
      month: "June 2024",
      events: [
        {
          date: "June 5",
          category: "Admissions",
          title: "B.Sc. Admissions Deadline",
          description: "Last date to apply for undergraduate science programs across various universities."
        },
        {
          date: "June 15",
          category: "Scholarship",
          title: "State Scholarship Application",
          description: "Final submission for the State Government Merit Scholarship 2024."
        },
        {
          date: "June 20",
          category: "Admissions",
          title: "Counseling Window Opens",
          description: "First phase of counseling for engineering and medical admissions begins."
        }
      ]
    },
    {
      month: "July 2024",
      events: [
        {
          date: "July 10",
          category: "Exams",
          title: "CUET UG Examination",
          description: "Common University Entrance Test for Undergraduate admissions."
        },
        {
          date: "July 25",
          category: "Scholarship",
          title: "National Scholarship Round 2",
          description: "Applications open for national-level scholarships."
        }
      ]
    },
    {
      month: "August 2024",
      events: [
        {
          date: "August 5",
          category: "Exams",
          title: "Semester Exam Registration",
          description: "Deadline for registering for the upcoming semester examinations."
        },
        {
          date: "August 20",
          category: "Admissions",
          title: "Final Admission List",
          description: "Universities release the final admission list for various programs."
        }
      ]
    },
    {
      month: "September 2024",
      events: [
        {
          date: "September 1",
          category: "Scholarship",
          title: "Merit Scholarship Deadline",
          description: "Last date to apply for university merit-based scholarships."
        },
        {
          date: "September 15",
          category: "Exams",
          title: "Mid-Term Examinations",
          description: "Mid-term exams begin for most undergraduate programs."
        },
        {
          date: "September 30",
          category: "Admissions",
          title: "Late Admissions Close",
          description: "Final deadline for late admissions with penalty fees."
        }
      ]
    }
  ];

  // Function to determine category color
  const getCategoryColor = (category) => {
    switch(category) {
      case 'Admissions':
        return 'bg-orange-500';
      case 'Exams':
        return 'bg-orange-600';
      case 'Scholarship':
        return 'bg-orange-700';
      default:
        return 'bg-orange-500';
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-6 font-sans">
      <h1 className="text-3xl font-bold text-orange-500 mb-8 text-center">Academic Timeline</h1>
      
      {/* Categories */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-orange-400 mb-4">Categories</h2>
        <div className="flex space-x-4">
          <span className="px-4 py-2 bg-orange-500 rounded-md">Admissions</span>
          <span className="px-4 py-2 bg-orange-600 rounded-md">Exams</span>
          <span className="px-4 py-2 bg-orange-700 rounded-md">Scholarships</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-12">
        {timelineData.map((monthData, index) => (
          <div key={index} className="border-l-2 border-orange-500 pl-6 relative">
            {/* Month Header */}
            <h2 className="text-2xl font-bold text-orange-400 mb-6 sticky top-0 bg-black py-2 z-10">
              {monthData.month}
            </h2>
            
            {/* Events */}
            <div className="space-y-8">
              {monthData.events.map((event, eventIndex) => (
                <div key={eventIndex} className="relative">
                  {/* Date marker */}
                  <div className="absolute -left-9 w-6 h-6 rounded-full bg-orange-500 border-4 border-black"></div>
                  
                  <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-orange-500">
                    <div className="flex items-center mb-2">
                      <span className="text-orange-400 font-medium mr-4">{event.date}</span>
                      <span className={`text-white px-3 py-1 rounded-full text-sm ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300 mb-3">{event.description}</p>
                    
                    <button className="text-orange-500 hover:text-orange-400 font-medium flex items-center">
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Separator */}
            {index < timelineData.length - 1 && (
              <div className="h-8 border-l-2 border-orange-500 ml-[-2px]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineContent;