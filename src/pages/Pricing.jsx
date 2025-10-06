import React from "react";
import Background from "../components/Background";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  const handleGetStarted = (plan) => {
    console.log(`Get Started clicked for ${plan}`);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background should cover the full page height */}
<Background fullHeight={true} showImages={false} />

      {/* Page Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="text-center px-4 pt-32 pb-16">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            Pricing
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed px-4">
            Choose the plan that fits your needs. Flexible, transparent, and scalable pricing with no hidden fees— 
            designed to grow with your business while delivering maximum value and reliability.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            <PricingCard
              className="h-full"
              title="Team Plan"
              price="99"
              period="/Month"
              subtitle="Collaboration & Project Management"
              badge="Most Popular"
              variant="outline"
              ctaText="Get Started"
              onCtaClick={() => handleGetStarted("Team Plan")}
              features={[
                "Everything in Individual +",
                "Team Members & Roles",
                "Shared Projects & Permissions",
                "Insights & Analytics",
              ]}
            />

            <PricingCard
              className="h-full"
              title="Individual Plan"
              price="299"
              period="/Month"
              subtitle="Solo Architects & Freelancers"
              variant="filled"
              ctaText="Get Started"
              onCtaClick={() => handleGetStarted("Individual Plan")}
              features={[
                "AI Design Generation",
                "Personal Workspace",
                "Cloud Storage & Sync",
                "Export & Sharing Tools",
              ]}
            />

            <PricingCard
              className="h-full"
              title="Premium Plan"
              price="300"
              period="/Month"
              subtitle="Solo Architects & Freelancers"
              variant="outline"
              ctaText="Get Started"
              onCtaClick={() => handleGetStarted("Premium Plan")}
              features={[
                "Everything in Individual +",
                "Team Members & Roles",
                "Shared Projects & Permissions",
                "Insights & Analytics",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
