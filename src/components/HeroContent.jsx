import React from "react";

const HeroContent = ({
  // you can still override these if needed
  primaryButtonText = "Learn More",
  onPrimaryClick = () => {},
  className = ""
}) => {
  return (
    <section
      className={`relative z-10 min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Line 1 */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          AI Simplifies
        </h1>
        {/* Line 2 */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-1">
          Architecture Design
        </h2>

        {/* Small description */}
        <p className="mt-3 max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
          Empower individuals and teams to create, manage and collaborate on
          architecture projects with AI-driven tools.
        </p>

        {/* Single Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onPrimaryClick}
            className="
              px-6 sm:px-8 py-3 sm:py-4
              bg-white/10 hover:bg-white/20
              text-white font-semibold
              rounded-full
              shadow-md hover:shadow-lg
              transition-all duration-300
              transform hover:scale-105 active:scale-95
              min-w-[180px]
              text-sm sm:text-base
            "
          >
            {primaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
