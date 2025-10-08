"use client"

import { motion } from "framer-motion"

export default function Background({ fullHeight = false, showImages = true }) {
  const EDGE = "clamp(12px, 2.2vw, 28px)"

  return (
    <div aria-hidden="true" className={`absolute inset-0 -z-10 overflow-hidden ${fullHeight ? "min-h-screen" : ""}`}>
      {/* Core gradient to match reference */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-[1.25rem] md:rounded-[1.75rem] lg:rounded-[2rem] shadow-[0_0_50px_rgba(3,150,255,0.25)]"
          style={{
            top: EDGE,
            left: EDGE,
            right: EDGE,
            // keep bottom slightly higher when not full-height to avoid touching footer area
            bottom: fullHeight ? EDGE : `calc(${EDGE} + 4vh)`,
            background: "linear-gradient(135deg, rgba(171,220,255,1) 0%, rgba(3,150,255,1) 70%)",
          }}
        />
        {/* Subtle texture and inner highlight */}
        <div
          className="absolute pointer-events-none rounded-[1.25rem] md:rounded-[1.75rem] lg:rounded-[2rem]"
          style={{
            top: EDGE,
            left: EDGE,
            right: EDGE,
            bottom: fullHeight ? EDGE : `calc(${EDGE} + 4vh)`,
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35)",
            background: "radial-gradient(80% 50% at 50% 0%, rgba(255,255,255,0.28), rgba(255,255,255,0))",
            opacity: 0.9,
          }}
        />
      </div>

      {/* Subtle vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(255,255,255,0.35),rgba(255,255,255,0))]" />

      {/* Large rounded translucent panels (mimic layered rounded shapes in screenshot) */}
      {/* Remove any full-bleed shapes that could touch edges */}
      {/* Ensure decorative pill if desired */}
      {showImages && (
        <div className="hidden lg:block absolute left-4 bottom-[18%] w-8 h-64 rounded-full bg-white/30 backdrop-blur-sm border border-white/40" />
      )}

      {/* Background floating pictures (xl and up only). They live inside a wrapper that
          uses the same inset as the gradient so they never touch screen edges. */}
      {showImages && (
        <div
          className="hidden xl:block absolute pointer-events-none"
          style={{
            top: EDGE,
            left: EDGE,
            right: EDGE,
            bottom: fullHeight ? EDGE : `calc(${EDGE} + 4vh)`,
          }}
          aria-hidden="true"
        >
          <div className="relative w-full h-full">
            {/* Group 1: Left Top and Right Top */}
            <motion.img
              src="/HERO-PICTURES/Rectangle left-01.png"
              alt=""
              className="absolute top-24 left-[-10px] w-[clamp(260px,18vw,440px)] h-auto drop-shadow-2xl"
              initial={{ x: "-150%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.img
              src="/HERO-PICTURES/Rectangle right01.png"
              alt=""
              className="absolute top-20 right-[-10px] w-[clamp(300px,20vw,480px)] h-auto drop-shadow-2xl"
              initial={{ x: "150%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Group 2: Left Middle and Right Middle */}
            <motion.img
              src="/HERO-PICTURES/Rectangle left-02.png"
              alt=""
              className="absolute top-48 left-0 w-[clamp(280px,19vw,460px)] h-auto drop-shadow-2xl"
              initial={{ x: "-150%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ duration: 1.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.img
              src="/HERO-PICTURES/Rectangle -right02.png"
              alt=""
              className="absolute top-48 right-[-10px] w-[clamp(320px,22vw,520px)] h-auto drop-shadow-2xl"
              initial={{ x: "150%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ duration: 1.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Group 3: Right Bottom */}
            <motion.img
              src="/HERO-PICTURES/Rectangle right-03.png"
              alt=""
              className="absolute right-0 bottom-5 w-[clamp(300px,21vw,500px)] h-auto drop-shadow-2xl"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ duration: 1.7, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      )}

      {/* Soft orbs */}
      <div className="absolute left-[max(24px,2.2vw)] -bottom-24 w-80 h-80 rounded-full bg-white/25 blur-3xl" />
      <div className="absolute right-[max(24px,2.2vw)] bottom-0 w-96 h-96 rounded-full bg-white/20 blur-3xl" />

      {/* Optional faint dotted grid for texture on very large screens */}
      <div className="hidden 2xl:block absolute inset-0 opacity-[0.08]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>
    </div>
  )
}
