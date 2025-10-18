export default function Footer() {
  return (
    <section className="relative mx-auto w-full max-w-[1243px] px-4 py-10 md:py-16">
      {/* Wavy lines background (top-left) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <svg
          className="absolute -left-6 -top-10 h-[260px] w-[480px] text-cyan-400/20"
          viewBox="0 0 480 260"
          fill="none"
          role="img"
          aria-label="decorative wavy lines"
        >
          <defs>
            <linearGradient id="waveFade" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="currentColor" stopOpacity="0.4" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M-60 210 C 60 140, 150 170, 280 95 S 450 65 560 10" stroke="url(#waveFade)" strokeWidth="2.5" />
          <path
            d="M-60 235 C 60 165, 150 195, 280 120 S 450 90 560 35"
            stroke="url(#waveFade)"
            strokeWidth="2.5"
            opacity="0.8"
          />
          <path
            d="M-60 185 C 60 115, 150 145, 280 70 S 450 40 560 -15"
            stroke="url(#waveFade)"
            strokeWidth="2.5"
            opacity="0.6"
          />
          <path
            d="M-60 160 C 60 90, 150 120, 280 45 S 450 15 560 -40"
            stroke="url(#waveFade)"
            strokeWidth="2.5"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Footer card */}
      <footer className="mx-auto max-w-[1243px] h-[344px] rounded-2xl bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 text-slate-200 shadow-2xl border border-slate-700/50">
        <div className="px-6 py-8 md:px-10 md:py-10 h-full flex flex-col justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <img
              src="/clouditecture-Logo.png"
              alt="Clouditecture logo"
              width={115}
              height={64}
              className="h-[64px] w-[115px] object-contain drop-shadow-lg"
            />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Clouditecture
            </h2>
          </div>

          {/* Tagline */}
          <p className="mx-auto max-w-2xl text-center text-sm md:text-base leading-relaxed text-slate-300">
            Empower individuals and teams to create, manage, and collaborate on cloud projects with AI-driven features.
          </p>

          {/* Sub-link */}
          <p className="text-center text-sm text-slate-400 -mt-1">
            <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
            >
              A product by NeatNode Technologies
            </a>
          </p>

          {/* Divider */}
          <div className="border-t border-slate-700/50" />

          {/* Social icons */}
          <div className="flex items-center justify-center gap-4">
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-700/50 border border-slate-600/50 text-slate-400 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 hover:scale-110"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-700/50 border border-slate-600/50 text-slate-400 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 hover:scale-110"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12.06C22 6.504 17.523 2 12 2S2 6.504 2 12.06c0 5.018 3.657 9.183 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.47h-1.26c-1.243 0-1.63.775-1.63 1.57v1.886h2.773l-.443 2.91h-2.33V22C18.343 21.243 22 17.078 22 12.06z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-700/50 border border-slate-600/50 text-slate-400 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 hover:scale-110"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-t border-slate-700/50 pt-4 text-xs text-slate-400">
            <span className="order-2 md:order-1 flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-slate-500">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              © 2025 Clouditecture. All rights reserved.
            </span>
            <nav className="order-1 md:order-2 flex gap-6">
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium">
                Terms &amp; Conditions
              </a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium">
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </section>
  )
}