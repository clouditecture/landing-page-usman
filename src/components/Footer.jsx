export default function Footer() {
  return (
    <section className="relative mx-auto w-full max-w-[1243px] px-4 py-10 md:py-16">
      {/* Wavy lines background (top-left) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <svg
          className="absolute -left-6 -top-10 h-[260px] w-[480px] text-border/60"
          viewBox="0 0 480 260"
          fill="none"
          role="img"
          aria-label="decorative wavy lines"
        >
          <defs>
            <linearGradient id="waveFade" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="currentColor" stopOpacity="0.35" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M-60 210 C 60 140, 150 170, 280 95 S 450 65 560 10" stroke="url(#waveFade)" strokeWidth="2" />
          <path
            d="M-60 235 C 60 165, 150 195, 280 120 S 450 90 560 35"
            stroke="url(#waveFade)"
            strokeWidth="2"
            opacity="0.8"
          />
          <path
            d="M-60 185 C 60 115, 150 145, 280 70 S 450 40 560 -15"
            stroke="url(#waveFade)"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d="M-60 160 C 60 90, 150 120, 280 45 S 450 15 560 -40"
            stroke="url(#waveFade)"
            strokeWidth="2"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Footer card */}
      <footer className="mx-auto max-w-[1243px] h-[344px] rounded-xl bg-footer-surface text-footer-foreground shadow-sm ring-1 ring-border">
        <div className="px-6 py-8 md:px-10 md:py-12 h-full flex flex-col justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center justify-center gap-3">
            {/* NOTE: Use your provided asset in /public. The runtime path is /clouditecture-Logo.png */}
            <img
              src="/clouditecture-Logo.png"
              alt="Clouditecture logo"
              width={115}
              height={64}
              className="h-[64px] w-[115px] rounded-md object-contain"
            />
            <h2 className="text-balance text-2xl font-semibold leading-none text-brand md:text-3xl">
              Clouditecture
            </h2>
          </div>

          {/* Tagline */}
          <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-6 text-footer-foreground/75 md:text-base">
            Empower individuals and teams to create, manage, and collaborate on architecture projects with AI-driven
            tools.
          </p>

          {/* Sub-link */}
          <p className="mt-3 text-center text-xs text-footer-foreground/65">
            <a
              href="#"
              className="underline decoration-footer-foreground/30 underline-offset-4 hover:text-footer-foreground"
            >
              A product by nextnode technologies
            </a>
          </p>

          {/* Divider */}
          <div className="mt-6 border-t border-footer-foreground/10" />

          {/* Social icons */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-footer-foreground/15 text-footer-foreground/80 transition-colors hover:text-footer-foreground"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12.06C22 6.504 17.523 2 12 2S2 6.504 2 12.06c0 5.018 3.657 9.183 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.47h-1.26c-1.243 0-1.63.775-1.63 1.57v1.886h2.773l-.443 2.91h-2.33V22C18.343 21.243 22 17.078 22 12.06z" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a
              href="#"
              aria-label="X"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-footer-foreground/15 text-footer-foreground/80 transition-colors hover:text-footer-foreground"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.146 3H21l-6.51 7.44L22 21h-6.828l-4.266-5.2L5.92 21H3.062l6.986-7.978L2 3h6.984l3.82 4.66L18.146 3zm-1.196 16h1.958L8.18 5H6.153l10.797 14z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-footer-foreground/15 text-footer-foreground/80 transition-colors hover:text-footer-foreground"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.38.57A3.01 3.01 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .62 5.8 3.01 3.01 0 0 0 2.12 2.13C4.52 20.5 12 20.5 12 20.5s7.6 0 9.38-.57a3.01 3.01 0 0 0 2.12-2.13A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z" />
              </svg>
            </a>
            {/* Dribbble */}
            <a
              href="#"
              aria-label="Dribbble"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-footer-foreground/15 text-footer-foreground/80 transition-colors hover:text-footer-foreground"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.486 2 2 6.486 2 12c0 5.513 4.486 10 10 10s10-4.487 10-10C22 6.486 17.514 2 12 2zm6.917 6.9a7.96 7.96 0 0 1 1.07 3.877 17.5 17.5 0 0 0-5.538-.2 26.2 26.2 0 0 0-.818-1.78c2.53-1.02 4.07-2.49 5.286-1.897zM12 4.05c2.016 0 3.857.76 5.255 2.006-1.018.98-2.383 1.746-4.182 2.38A39.2 39.2 0 0 0 11.02 5.1c.318-.033.644-.05.98-.05zm-2.546.42a37.9 37.9 0 0 1 1.98 3.304c-2.64.75-5.967.95-8.282.91A8.01 8.01 0 0 1 9.454 4.47zM4.05 12c0-.145.004-.29.013-.432 2.61.058 6.333-.164 9.155-1.02.24.45.466.91.673 1.376a16.6 16.6 0 0 0-7.408 5.67A7.94 7.94 0 0 1 4.05 12zm7.95 7.95a7.94 7.94 0 0 1-4.24-1.228c1.57-2.52 4.69-5.5 8.995-5.28.225.93.36 1.893.4 2.874-1.67.528-3.45 2.025-5.155 3.633zM14.9 19.64a7.94 7.94 0 0 0 4.052-3.93c.007-.938-.077-1.864-.25-2.767 1.315.055 2.62.21 3.647.49a7.96 7.96 0 0 1-7.45 6.207z" />
              </svg>
            </a>
          </div>

          {/* Bottom row */}
          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-footer-foreground/10 pt-5 text-xs text-footer-foreground/70 md:flex-row">
            <span className="order-2 md:order-1">2025 copyright</span>
            <nav className="order-1 flex gap-5 md:order-2 md:ml-auto">
              <a href="#" className="hover:text-footer-foreground">
                Terms &amp; Conditions
              </a>
              <a href="#" className="hover:text-footer-foreground">
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </section>
  )
}
