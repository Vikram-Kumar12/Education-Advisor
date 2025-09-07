import React, { useState } from 'react';
import TopNavbar from '../components/Dashboard/TopNavbar';
import SideNavbar from '../components/Dashboard/SideNavbar';
import MainContent from '../components/Dashboard/MainContent';
const DashboardPage = () => {
  const [activeItem, setActiveItem] = useState('courses');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    </div>
  );
};

export default DashboardPage;