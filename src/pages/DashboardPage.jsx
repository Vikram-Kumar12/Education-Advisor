import React, { useState } from "react";
import TopNavbar from "../components/Dashboard/TopNavbar";
import SideNavbar from "../components/Dashboard/SideNavbar";
import MainContent from "../components/Dashboard/MainContent";
import { X } from "lucide-react";
import ChatInterface from "../components/ChatInterface";
const DashboardPage = () => {
  const [activeItem, setActiveItem] = useState("courses");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
    setShowChat(true);
  };
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <TopNavbar />

      <div className="flex flex-1 pt-20">
        <SideNavbar
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="flex-1">
          <MainContent activeItem={activeItem} />
        </div>
      </div>
      <div className="fixed bottom-10 right-10 z-50">
        {/* Message Popup */}
        {isPopupVisible && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl p-4 animate-fade-in">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-800">Aina</h3>
              <button
                onClick={togglePopup}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-gray-600 text-sm">
              Hi! I'm Aina, your query solver. How can I help you today?
            </p>
            <div className="absolute bottom-0 right-4 w-4 h-4 bg-white transform rotate-45 -mb-2"></div>
          </div>
        )}

        {/* Chatbot Button */}
        <button
          onClick={togglePopup}
          className={`w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg hover:scale-110 transition-transform duration-200 ${
            showChat ? "hidden" : ""
          }`}
        >
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAb-vb97QXQeIb-chQJOKk3XouQGSsyrakSw&s"
            alt="Aina Chatbot"
          />
        </button>
      </div>
      {showChat && <ChatInterface setShowChat={setShowChat} />}
    </div>
  );
};

export default DashboardPage;
