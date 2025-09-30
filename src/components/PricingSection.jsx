import PricingCard from "./PricingCard"
import { cn } from "../lib/cn"
import { Link } from "react-router-dom"
export default function PricingSection({ className, onLeftCta, onMiddleCta }) {
  return (
    <section
      className={cn(
        // white background + padding + spacing
        "bg-white py-16 md:py-24",
        className
      )}
      aria-labelledby="pricing-heading"
    >
      {/* Center content wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Inner box with border + rounded corners */}
        <div className="rounded-2xl border border-sky-200 p-6 md:p-10 shadow-sm bg-white">
          {/* Grid of cards */}
          <div className="grid gap-8 md:grid-cols-3 justify-center">
            {/* Left card: Filled */}
            <PricingCard
              variant="filled"
              title="Individual Plan"
              price="29"
              period="/Month"
              subtitle="Solo Architects & Freelancers"
              ctaText="Get Started"
              features={["AI Design Generation", "Personal Workspace"]}
              onCtaClick={onLeftCta}
              className="w-[365px] h-[536px] mx-auto"
            />

            {/* Middle card: Outline + badge */}
            <PricingCard
              variant="outline"
              badge="Most Popular"
              title="Team Plan"
              price="99"
              period="/Month"
              subtitle="Collaboration & Project Management"
              ctaText="Get Started"
                bgImage="/pricing-bg.png" // only visible in mobile background
              features={[
                "Everything in Individual +",
                "Team Members & Roles",
                "Shared Projects & Permissions",
                "Insights & Analytics",
              ]}
              onCtaClick={onMiddleCta}
              className="w-[365px] h-[536px] mx-auto"
            />

            {/* Right content panel */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 md:p-7 w-[365px] h-[536px] mx-auto">
              <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100">
                Payment Plan
              </span>

              <h2
                id="pricing-heading"
                className="mt-3 text-pretty text-2xl font-extrabold leading-tight text-slate-900 md:text-3xl"
              >
                Select the Best <span className="text-sky-600">Plan for You</span>
              </h2>

              <p className="mt-3 max-w-prose text-sm leading-6 text-slate-600">
                Whether you're a solo architect or a growing team, our AI-powered dashboard is built to help you design
                smarter, faster, and together.
              </p>

             <Link
      to="/pricing"
      aria-label="See pricing details"
      className="mt-5 inline-flex items-center rounded-full border border-sky-400 bg-white pr-6 shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer"
    >
      {/* Left Circle with Arrow */}
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-sky-600 text-white">
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 8l4 4-4 4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Text */}
      <span className="ml-3 text-lg font-semibold text-sky-600">
        Pricing
      </span>
    </Link>
  

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
