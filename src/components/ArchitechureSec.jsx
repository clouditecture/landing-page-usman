import React from "react";

export default function ArchitechureSec() {
  return (
    <div className="relative mx-auto my-20 max-w-[1246px] rounded-2xl overflow-hidden shadow-2xl">
      {/* Background gradient only inside this box */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ABDCFF] to-[#0396FF]" />

      {/* Professional Curved Lines */}
      <svg
        className="absolute right-0 top-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 1440 0 Q 1200 150, 1200 300 Q 1200 450, 1200 600 Q 1200 750, 1200 900"
          className="fill-none stroke-white/20"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 1440 0 Q 1250 150, 1250 300 Q 1250 450, 1250 600 Q 1250 750, 1250 900"
          className="fill-none stroke-white/18"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 1440 0 Q 1300 150, 1300 300 Q 1300 450, 1300 600 Q 1300 750, 1300 900"
          className="fill-none stroke-white/15"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 1440 0 Q 1350 150, 1350 300 Q 1350 450, 1350 600 Q 1350 750, 1350 900"
          className="fill-none stroke-white/12"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 1440 0 Q 1380 150, 1380 300 Q 1380 450, 1380 600 Q 1380 750, 1380 900"
          className="fill-none stroke-white/10"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 1440 0 Q 1410 150, 1410 300 Q 1410 450, 1410 600 Q 1410 750, 1410 900"
          className="fill-none stroke-white/8"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 px-6 py-12 flex flex-col items-center">
        <button className="mb-6 px-8 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
          Get Started
        </button>

        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 leading-tight">
          Ready to Transform Your
          <br />
          Architecture Process?
        </h1>

        <button className="flex items-center gap-3 px-10 py-4 bg-white hover:bg-gray-50 text-blue-500 text-base font-semibold rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 mb-12">
          <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
            </svg>
          </div>
          Start Free Trial
        </button>

        {/* Dashboards */}
        <div className="relative w-full h-auto">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 opacity-90 transform -translate-x-4 scale-90 shadow-2xl rounded-lg overflow-hidden">
            <img
              src="/ARCHITECHURE-SEC/ARCHITECHURE-LEFT.png"
              alt="Left Dashboard"
              className="w-full h-auto"
            />
          </div>

          <div className="relative mx-auto w-full max-w-2xl shadow-2xl rounded-lg overflow-hidden border-4 border-white/30">
            <img
              src="/ARCHITECHURE-SEC/ARCHITECHURE-MAIN.png"
              alt="Main Dashboard"
              className="w-full h-auto"
            />
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 opacity-90 transform translate-x-4 scale-90 shadow-2xl rounded-lg overflow-hidden">
            <img
              src="/ARCHITECHURE-SEC/ARCHITECHURE-RIGHT.png"
              alt="Right Dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
