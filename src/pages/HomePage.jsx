import React from "react";
import Navbar from "../components/Home/Navbar";
import HeroSection from "../components/Home/HeroSection";
import GuidingSection from "../components/Home/GuidingSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import MissionSection from "../components/Home/MissionSection";
import HowItWorks from "../components/Home/HowItWorks";
import TrustedBy from "../components/Home/TrustedBy";
import CTASection from "../components/Home/CTASection";
import Footer from "../components/Home/Footer";
const HomePage = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <GuidingSection />
      <FeaturesSection />
      <MissionSection />
      <HowItWorks />
      <TrustedBy />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
