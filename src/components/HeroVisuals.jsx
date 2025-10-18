"use client"

import { motion } from "framer-motion"

// Increase any clamp to grow images (middle value = growth with viewport, last = max).
const SIZES = {
  card1: "clamp(360px, 24vw, 580px)", // E-commerce Checkout (left bottom)
  card2: "clamp(340px, 23vw, 560px)", // Recent Projects (bottom center-left)
  card3: "clamp(400px, 28vw, 620px)", // Insights donut (center)
  card4: "clamp(360px, 24vw, 580px)", // Role Management (right)
  card5: "clamp(380px, 26vw, 600px)", // Invite Member (right lower)
  card6: "clamp(120px, 10vw, 180px)", // Small chip (left edge)
  mobileMain: "clamp(280px, 75vw, 380px)",
}

const HeroVisuals = () => {
  const glowClass = `rounded-lg shadow-[0_0_40px_15px_rgba(255,255,255,0.6), 0_0_80px_30px_rgba(255,255,255,0.45), 0_0_140px_60px_rgba(255,255,255,0.3)] filter drop-shadow(0 0 30px rgba(255,255,255,0.5))`

  return (
    <>
      {/* Desktop & Large Laptop View - Now scales properly on all screen sizes */}
      <div className="hidden xl:block absolute inset-0 pointer-events-none z-0">
        <div className="relative w-full h-full">
          {/* Card 1 - Left Bottom */}
          <motion.div
            className="absolute"
            style={{ 
              width: SIZES.card1,
              bottom: "15%",
              left: "8%"
            }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src="/HERO-PICTURES/HERO-CONTENT-01.png"
              alt="Hero Content 01"
              className={`w-full h-auto ${glowClass}`}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Card 2 - Bottom Center-Left */}
          <motion.div
            className="absolute"
            style={{ 
              width: SIZES.card2,
              bottom: "8%",
              left: "30%"
            }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src="/HERO-PICTURES/HERO-CONTENT-02.png"
              alt="Hero Content 02"
              className={`w-full h-auto ${glowClass}`}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Card 3 - Center */}
          <motion.div
            className="absolute"
            style={{ 
              width: SIZES.card3,
              bottom: "5%",
              left: "50%",
              transform: "translateX(-50%)"
            }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src="/HERO-PICTURES/HERO-CONTENT-03.png"
              alt="Hero Content 03"
              className={`w-full h-auto ${glowClass}`}
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Card 4 - Right Edge */}
          <motion.div
            className="absolute"
            style={{ 
              width: SIZES.card4,
              bottom: "3%",
              right: "2%"
            }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src="/HERO-PICTURES/HERO-CONTENT-04.png"
              alt="Hero Content 04"
              className={`w-full h-auto ${glowClass}`}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Card 5 - Right Lower */}
          <motion.div
            className="absolute"
            style={{ 
              width: SIZES.card5,
              bottom: "6%",
              right: "60%"
            }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src="/HERO-PICTURES/HERO-CONTENT-05.png"
              alt="Hero Content 05"
              className={`w-full h-auto ${glowClass}`}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Card 6 - Small chip (left edge) */}
          <motion.div
            className="absolute"
            style={{ 
              width: SIZES.card6,
              left: "1%",
              bottom: "2%"
            }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src="/HERO-PICTURES/HERO-CONTENT-06.png"
              alt="Hero Content 06"
              className={`w-full h-auto object-contain ${glowClass}`}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Tablet View */}
      <div className="hidden md:block xl:hidden absolute inset-0 pointer-events-none z-0">
        <div className="relative w-full h-full mx-auto max-w-[1100px]">
          {/* Center Main Card */}
          <motion.div
            className="absolute bottom-[11%] left-1/2 -translate-x-1/2"
            style={{ width: "clamp(320px, 30vw, 520px)" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.img
              src="/HERO-PICTURES/HERO-CONTENT-03.png"
              alt="Hero Content"
              className={`w-full h-auto ${glowClass}`}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Left Card */}
          <motion.div
            className="absolute bottom-[21%] left-[8%]"
            style={{ width: "clamp(260px, 22vw, 460px)" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.img
              src="/HERO-PICTURES/HERO-CONTENT-01.png"
              alt="Hero Content"
              className={`w-full h-auto ${glowClass}`}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="absolute bottom-[21%] right-[8%]"
            style={{ width: "clamp(260px, 22vw, 460px)" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.img
              src="/HERO-PICTURES/HERO-CONTENT-04.png"
              alt="Hero Content"
              className={`w-full h-auto ${glowClass}`}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className="md:hidden absolute left-0 right-0 bottom-0 pointer-events-none flex items-start justify-center z-0"
        style={{ top: "50vh" }}
      >
        <motion.div
          style={{ width: SIZES.mobileMain, marginTop: "-3rem" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.img
            src="/HERO-PICTURES/HERO-CONTENT-03.png"
            alt="Hero Content Mobile"
            className={`w-full h-auto ${glowClass}`}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </>
  )
}

export default HeroVisuals