import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import your existing components
import DashboardContent from './DashboardContent';
import QuizContent from './QuizContent';
import CoursesContent from './CoursesContent';
import CollegesContent from './CollegesContent';
import TimelineContent from './TimelineContent';
import ResourcesContent from './ResourcesContent';
import SettingsContent from './SettingsContent';

const MainContent = ({ activeItem }) => {
  // Map menu items to their respective components
  const componentMap = {
    dashboard: DashboardContent,
    quiz: QuizContent,
    courses: CoursesContent,
    colleges: CollegesContent,
    timeline: TimelineContent,
    resources: ResourcesContent,
    settings: SettingsContent
  };

  // Get the component to render based on activeItem
  const ComponentToRender = componentMap[activeItem] || DashboardContent;

  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ComponentToRender />
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default MainContent;