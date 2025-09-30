"use client"
import { cn } from "../lib/cn"

function CheckIcon({ className }) {
  return (
    <svg
      className={cn("h-5 w-5 shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="11"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="2"
      />
      <path
        d="M7.5 12.5l3 3 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function PricingCard({
  title,
  price,
  period = "/Month",
  subtitle,
  features = [],
  ctaText = "Get Started",
  onCtaClick,
  variant = "outline",
  badge,
  bgImage, // pass an image path when needed
  className,
}) {
  const isFilled = variant === "filled"

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border",
        isFilled
          ? "border-sky-200 bg-gradient-to-br from-sky-500 to-blue-600 text-white"
          : "border-slate-200 bg-white text-slate-900",
        "shadow-sm",
        className
      )}
      role="region"
      aria-label={`${title || "Pricing"} Card`}
    >
      {/* Background image for mobile */}
      {bgImage ? (
        <div className="absolute inset-0 block md:hidden">
          <img
            src={bgImage}
            alt="background"
            className="h-full w-full object-cover opacity-20 blur-sm"
          />
        </div>
      ) : null}

      {/* Badge */}
      {badge ? (
        <div
          className={cn(
            "absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-medium z-10",
            isFilled
              ? "bg-white/20 text-white backdrop-blur"
              : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
          )}
        >
          {badge}
        </div>
      ) : null}

      {/* Content */}
      <div className="relative z-10 p-6 md:p-7">
        {/* Title */}
        {title ? (
          <p
            className={cn(
              "text-sm font-medium",
              isFilled ? "text-white/90" : "text-slate-600"
            )}
          >
            {title}
          </p>
        ) : null}

        {/* Price */}
        <div className="mt-2 flex items-baseline gap-2">
          <span
            className={cn(
              "text-4xl font-bold tracking-tight",
              isFilled ? "text-white" : "text-slate-900"
            )}
          >
            {"$ "}
            {price}
          </span>
          <span
            className={cn(
              "text-sm font-semibold",
              isFilled ? "text-white/80" : "text-slate-600"
            )}
          >
            {period}
          </span>
        </div>

        {/* Subtitle */}
        {subtitle ? (
          <p
            className={cn(
              "mt-1 text-sm",
              isFilled ? "text-white/80" : "text-slate-600"
            )}
          >
            {subtitle}
          </p>
        ) : null}

        {/* CTA */}
        <button
          type="button"
          onClick={onCtaClick}
          className={cn(
            "mt-5 w-full rounded-full px-5 py-3 text-sm font-semibold transition-all",
            isFilled
              ? "bg-white text-slate-900 hover:bg-white/90"
              : "bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:opacity-95"
          )}
          aria-label={`${ctaText} for ${title || "plan"}`}
        >
          {ctaText}
        </button>

        {/* Features */}
        {features.length > 0 ? (
          <ul className="mt-5 space-y-3" role="list">
            {features.map((f, i) => (
              <li key={i} className={cn("flex items-start gap-3")}>
                <CheckIcon
                  className={cn(isFilled ? "text-white" : "text-slate-700")}
                />
                <span
                  className={cn(
                    "text-sm leading-relaxed",
                    isFilled ? "text-white/90" : "text-slate-700"
                  )}
                >
                  {f}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
