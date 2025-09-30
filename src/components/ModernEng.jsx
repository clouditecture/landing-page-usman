import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ModernEngineering = () => {
  return (
    <div className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Card Container with Border */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl border-4 border-blue-500 shadow-2xl">
          
          {/* ===== BACKGROUND LAYERS ===== */}
          <div className="absolute inset-0 overflow-hidden">
            
            {/* Main Radial Gradient */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 30% 50%, rgba(38, 147, 255, 0.34) 0%, rgba(38, 147, 255, 0.15) 25%, rgba(38, 147, 255, 0.05) 50%, transparent 70%)'
              }}
            ></div>
            
            {/* Professional Wavy Lines SVG */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(38, 147, 255, 0.08)" />
                  <stop offset="50%" stopColor="rgba(38, 147, 255, 0.35)" />
                  <stop offset="100%" stopColor="rgba(38, 147, 255, 0.08)" />
                </linearGradient>
                
                <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(38, 147, 255, 0.05)" />
                  <stop offset="50%" stopColor="rgba(38, 147, 255, 0.25)" />
                  <stop offset="100%" stopColor="rgba(38, 147, 255, 0.05)" />
                </linearGradient>
                <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(38, 147, 255, 0.03)" />
                  <stop offset="100%" stopColor="rgba(38, 147, 255, 0.12)" />
                </linearGradient>
              </defs>
              
              {/* Flowing Wave Paths */}
              <path d="M 0 150 Q 250 80, 500 150 T 1000 150 Q 1250 180, 1500 150 T 2000 150" fill="none" stroke="url(#waveGradient1)" strokeWidth="2.5" opacity="0.5" />
              <path d="M 0 280 Q 300 200, 600 280 T 1200 280 Q 1400 320, 1600 280 T 2000 280" fill="none" stroke="url(#waveGradient2)" strokeWidth="2" opacity="0.4" />
              <path d="M 0 420 Q 200 340, 500 420 T 1000 420 Q 1300 460, 1600 420 T 2000 420" fill="none" stroke="url(#waveGradient1)" strokeWidth="1.8" opacity="0.35" />
              <path d="M 0 200 C 200 160, 400 240, 600 200 S 1000 160, 1200 200 S 1600 240, 2000 200" fill="none" stroke="url(#waveGradient2)" strokeWidth="1.5" opacity="0.3" />
              
              {/* Elegant Diagonal Waves */}
              <path d="M 0 0 L 300 300 L 350 250 L 50 -50 Z" fill="url(#waveGradient3)" opacity="0.15" />
              <path d="M 400 0 L 700 300 L 750 250 L 450 -50 Z" fill="url(#waveGradient3)" opacity="0.12" />
              <path d="M 800 0 L 1100 300 L 1150 250 L 850 -50 Z" fill="url(#waveGradient3)" opacity="0.1" />
              
              
              {/* Subtle Connection Lines */}
              <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="rgba(38, 147, 255, 0.15)" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="40%" y1="15%" x2="60%" y2="35%" stroke="rgba(38, 147, 255, 0.12)" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="70%" y1="25%" x2="85%" y2="45%" stroke="rgba(38, 147, 255, 0.15)" strokeWidth="1" strokeDasharray="5,5" />
            </svg>
            
            {/* Refined Dotted Grid Pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(38, 147, 255, 0.12) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              backgroundPosition: '0 0, 30px 30px'
            }}></div>
            
            {/* Soft Glow Elements */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full opacity-5 blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400 rounded-full opacity-5 blur-3xl"></div>
          </div>

          {/* ===== MAIN CONTENT ===== */}
          <div className="relative z-10 px-6 md:px-12 lg:px-16 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Column - Text Content */}
              <div className="space-y-5">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium shadow-md">
                  Who It's Built For
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Made for Modern<br />
                  Engineering <span className="text-blue-500">Teams</span>
                </h2>

                {/* List Items */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-gray-800">Engineering Managers</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-gray-800">Tech Leads</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-gray-800">Developers</span>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="pt-3">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Learn more</span>
                  </button>
                </div>
              </div>

              {/* Right Column - Dashboard Images */}
              <div className="relative">
                <div className="relative h-[450px] md:h-[550px] lg:h-[600px]">
                  
                  {/* Image 1 - Top Dashboard (Top-Right positioned) */}
                  <div className="absolute top-0 right-0 w-[80%] md:w-[75%] transform hover:scale-105 transition-transform duration-300 z-20">
                    <img
                      src="/MODERNENG/Individual Dashbaord.png"
                      alt="Team Members Dashboard"
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>

                  {/* Image 2 - Bottom Dashboard (Bottom-Left positioned) */}
                  <div className="absolute bottom-0 left-0 w-[80%] md:w-[75%] transform hover:scale-105 transition-transform duration-300 z-10">
                    <img
                      src="/MODERNENG/Individual Dashbaord.png"
                      alt="Recent Projects Dashboard"
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>

                  {/* Decorative Glow Elements */}
                  <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-400 rounded-full opacity-10 blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernEngineering;