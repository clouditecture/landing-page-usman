import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium shadow-md">
              Key Features at a Glance
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Why Choose <span className="text-blue-500">Us?</span>
            </h2>

            {/* Feature List with Checkboxes */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-500">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-lg md:text-xl font-semibold text-gray-800">AI-Powered Designs</span>
              </div>

              <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-500">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-lg md:text-xl font-semibold text-gray-800">Team Collaboration</span>
              </div>

              <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-500">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-lg md:text-xl font-semibold text-gray-800">Smart Analytics</span>
              </div>

              <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-500">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-lg md:text-xl font-semibold text-gray-800">Flexible Access</span>
              </div>
            </div>

            {/* Pricing Button */}
            <div className="pt-6">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 group">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>Pricing</span>
              </button>
            </div>
          </div>

          {/* Right Column - Dashboard Image with Professional Layout */}
          <div className="relative">
            {/* Main Container with gradient background */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-8 md:p-12 shadow-2xl">
              
              {/* Decorative Elements - Dots pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              {/* Main Dashboard Image */}
              <div className="relative z-10">
                <img
                  src="/WHYCHOOSSE/WHY-CHOOSE-PIC.png"
                  alt="CloudInfrastructure Dashboard Preview"
                  className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Labels/Tags - AI-Powered Designs */}
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl px-5 py-3 transform hover:scale-110 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">AI-Powered Designs</p>
                    <p className="text-xs text-gray-500">AI Designs</p>
                  </div>
                </div>
              </div>

              {/* Floating Label - Flexible Access (Top Right) */}
              <div className="absolute top-8 right-8 bg-white rounded-xl shadow-lg px-4 py-2 transform hover:scale-110 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="text-xs font-semibold text-gray-900">Flexible Access</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">Access</p>
              </div>

              {/* Decorative circles */}
              <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white rounded-full opacity-5 blur-2xl"></div>
              <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-cyan-300 rounded-full opacity-10 blur-3xl"></div>
            </div>

            {/* Additional decorative element outside the main box */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-30 blur-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;