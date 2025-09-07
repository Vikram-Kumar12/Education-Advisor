import Navbar from "../components/Home/Navbar";
import HeroSection from "../components/Home/HeroSection";
import GuidingSection from "../components/Home/GuidingSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import MissionSection from "../components/Home/MissionSection";
import HowItWorks from "../components/Home/HowItWorks";
import CTASection from "../components/Home/CTASection";
import Footer from "../components/Home/Footer";
const HomePage = () => {
  return (
    <div id="home" className="w-full max-w-7xl mx-auto flex flex-col">
      <Navbar />
      <HeroSection />
      <GuidingSection />
      <FeaturesSection />
      <MissionSection />
      <HowItWorks />
      <CTASection />
      <Footer />

      {/* <CollegeList/> */}
      {/* <CollegeSearch/> */}
      {/* <Dashboard/> */}
      {/* <Profile/> */}
      {/* <LearningResources/> */}
    </div>
  );
};

export default HomePage;
