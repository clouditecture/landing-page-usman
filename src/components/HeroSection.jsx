// src/components/HeroSection.jsx
import React from "react";
import Background from "./Background";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";
// import HeroContentImages from "./HeroContentImages";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* fixed background */}
      <Background />

      {/* content above background */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* main hero area */}
        <div className="flex-1 flex items-center justify-center">
          <HeroContent />
          {/* <HeroContentImages /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
