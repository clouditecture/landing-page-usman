// // src/components/HeroSection.jsx
// import React from "react";
// import Background from "./Background";
// import HeroContent from "./HeroContent";
// import HeroVisuals from "./HeroVisuals";

// const HeroSection = ({
//   heading = "AI Simplifies Architecture Design",
//   subheading = "Empower individuals and teams to create, manage, and collaborate on architecture projects with AI-driven tools.",
//   primaryCTA = { text: "Learn More", href: "#learn" },
//   secondaryCTA = { text: "Contact us", href: "#contact" },
//   showVisuals = true,
//   gradientFrom = "#ABDCFF",
//   gradientTo = "#0396FF",
// }) => {
//   return (
//     <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
//       {/* Fixed background */}
//       <Background 
//         fullHeight={false}
//         showImages={true}
//       />

//       {/* Hero Content (Text + Buttons) */}
//       <HeroContent
//         heading={heading}
//         subheading={subheading}
//         primaryCTA={primaryCTA}
//         secondaryCTA={secondaryCTA}
//       />

//       {/* Floating Visuals (Card Images) */}
//       {showVisuals && <HeroVisuals />}
//     </section>
//   );
// };

// export default HeroSection;




// src/components/HeroSection.jsx
import React from "react";
import Background from "./Background";
import HeroContent from "./HeroContent";
import HeroVisuals from "./HeroVisuals";

const HeroSection = ({
  heading = "AI Simplifies Architecture Design",
  subheading =
    "Empower individuals and teams to create, manage, and collaborate on architecture projects with AI-driven tools.",
  primaryCTA = { text: "Learn More", href: "#learn" },
  showVisuals = true,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient, ambient orbs, and edge images */}
      <Background fullHeight={false} showImages={true} />

      {/* Hero Text + CTA */}
      <HeroContent
        heading={heading}
        subheading={subheading}
        primaryCTA={primaryCTA}
      />

      {/* Floating Visuals (cards) */}
      {showVisuals && <HeroVisuals />}
    </section>
  );
};

export default HeroSection;




