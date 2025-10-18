import React from "react";

const HowItWorks = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-full mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <span className="text-sm font-medium">Inside the Dashboard</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-blue-500">Works</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Column (desktop) / Background (mobile) */}
          <div className="relative flex flex-col space-y-6">
            {/* Mobile background container */}
            <div
              className="
                relative rounded-3xl shadow-lg overflow-hidden
                h-72 sm:h-96 lg:h-auto
                bg-gradient-to-br from-blue-50 to-cyan-50
              "
            >
              {/* Background image visible only on mobile */}
              <div
                className="absolute inset-0 bg-cover bg-center lg:hidden"
                style={{
                  backgroundImage: "url('/WORKSECTIONIMG/WORK-SEC-01.png')",
                }}
              >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Foreground image for large screens */}
              <div className="hidden lg:flex justify-center relative z-10 p-8 md:p-10">
                <img
                  src="/WORKSECTIONIMG/WORK-SEC-01.png"
                  alt="Create Cloud Infrastructure Dashboard"
                  className="w-full max-w-2xl rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text overlay on mobile */}
             
            </div>
          </div>

          {/* Right Column (stays same but responsive grid) */}
          <div className="flex flex-col space-y-4">
            {/* Automate Cloud Deployment */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="order-2 md:order-1">
                  <img
                    src="/WORKSECTIONIMG/WORK-SEC-02.png"
                    alt="Automate Cloud Deployment Interface"
                    className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="order-1 md:order-2 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    Automate cloud deployment (AWS, Azure, GCP)
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Manage cloud projects in three steps: create secure
                    infrastructure, automate deployment, and scale with
                    monitoring.
                  </p>
                </div>
              </div>
            </div>

            {/* Real-time Monitoring */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    Real-time monitoring
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Monitor performance and system health with dashboards.
                    Receive alerts and insights to ensure smooth operations.
                  </p>
                </div>
                <div>
                  <img
                    src="/WORKSECTIONIMG/WORK-SEC-03.png"
                    alt="Real-time Monitoring Dashboard"
                    className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
