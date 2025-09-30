import PricingCard from "./PricingCard"
import { cn } from "../lib/cn"

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

              <button
                type="button"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-600 hover:bg-sky-50"
                aria-label="See pricing details"
              >
                <span>Pricing</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
                  <path
                    d="M10 8l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
