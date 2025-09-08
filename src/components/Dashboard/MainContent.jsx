import { motion, AnimatePresence } from 'framer-motion';
import DashboardContent from './DashboardContent';
import TimelineContent from './TimelineContent';
import ResourcesContent from './ResourcesContent';
import CollegeSearch from "../College/CollegeSearch"
import QuizResults from '../QuizPage/QuizResults';

const MainContent = ({ activeItem }) => {
  const componentMap = {
    dashboard: DashboardContent,
    courses: QuizResults,
    colleges: CollegeSearch,
    timeline: TimelineContent,
    resources: ResourcesContent,
  };

  // Get the component to render based on activeItem
  const ComponentToRender = componentMap[activeItem] || DashboardContent;

  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-3 ">
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