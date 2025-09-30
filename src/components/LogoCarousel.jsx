import React, { useState, useEffect } from 'react';

const LogoCarousel = () => {
  const [logos, setLogos] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    // Load logos from JSON file
    fetch('/LOGOS/Y-Logo.json')
      .then(response => response.json())
      .then(data => setLogos(data))
      .catch(error => console.error('Error loading logos:', error));
  }, []);

  // Configuration variables
  const logoSize = 'h-12 md:h-16'; // Smaller on mobile, larger on desktop
  const gapSize = 'mx-8 md:mx-12'; // Gap between logos
  const animationDuration = logos.length > 0 ? `${logos.length * 4}s` : '10s'; // Adapts to content
  const mobileAnimationDuration = logos.length > 0 ? `${logos.length * 3}s` : '15s'; // Faster on mobile

  if (logos.length === 0) {
    return null; // or a loading skeleton
  }

  return (
    <div className="w-full py-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb- 2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Trusted by Industry Leaders</span>
          </div>
          
        </div>

        {/* Logo Carousel */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          tabIndex="0"
          role="region"
          aria-label="Partner company logos"
        >
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex items-center">
            {/* First set of logos */}
            <div 
              className={`flex items-center ${isHovered || isFocused ? '' : 'animate-scroll-left'}`}
              style={{
                animationDuration: window.innerWidth < 768 ? mobileAnimationDuration : animationDuration,
                animationPlayState: isHovered || isFocused ? 'paused' : 'running'
              }}
            >
              {logos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className={`flex-shrink-0 ${gapSize} flex items-center justify-center`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logoSize} object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100`}
                  />
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div 
              className={`flex items-center ${isHovered || isFocused ? '' : 'animate-scroll-left'}`}
              style={{
                animationDuration: window.innerWidth < 768 ? mobileAnimationDuration : animationDuration,
                animationPlayState: isHovered || isFocused ? 'paused' : 'running'
              }}
              aria-hidden="true"
            >
              {logos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className={`flex-shrink-0 ${gapSize} flex items-center justify-center`}
                >
                  <img
                    src={logo.src}
                    alt=""
                    className={`${logoSize} object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional: Add a subtle hint text */}
        
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;