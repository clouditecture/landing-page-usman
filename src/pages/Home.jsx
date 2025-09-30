// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import LogoCarousel from "../components/LogoCarousel";
import HowItWorks from "../components/HowItWorks";
import ModernEng from "../components/ModernEng";
import WhyChooseUs from "../components/WhyChooseUs";
import PricingSection from "../components/PricingSection";
import ArchitechureSec from "../components/ArchitechureSec";
import BlogSec from "../components/BlogSec";
// import Footer from "../components/Footer";
// import FeatureSection from "../components/FeatureSection"; // later

const Home = () => {
  return (
    <>
      <HeroSection />
      <LogoCarousel />
      <HowItWorks />
      <ModernEng />
      <WhyChooseUs />
      <PricingSection />
      <ArchitechureSec />
      <BlogSec />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
