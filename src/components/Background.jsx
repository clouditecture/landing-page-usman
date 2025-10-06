


import { motion } from "framer-motion";

const Background = ({ fullHeight = false, showImages = true }) => {
  const bgVars = {
    "--bg-from": "#ABDCFF",
    "--bg-to": "#0396FF",
  };

  // Define base animation duration and ease for a smoother sequence
  const baseDuration = 1.2;
  const imageEase = [0.22, 1, 0.36, 1]; // Custom ease for a punchy, smooth effect

  return (
    <div
      className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={bgVars}
    >
      {/* Gradient box - This is the central element, starts first */}
      <motion.div
        className="absolute rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-[var(--bg-from)] to-[var(--bg-to)] shadow-[0_0_40px_rgba(3,150,255,0.2)] sm:shadow-[0_0_50px_rgba(3,150,255,0.25)] md:shadow-[0_0_70px_rgba(3,150,255,0.3)] lg:shadow-[0_0_90px_rgba(3,150,255,0.35)]"
        style={{
          width: fullHeight ? "100%" : "min(96vw, 98vw, 1600px)",
          height: fullHeight ? "100%" : "min(92vh, 94vh, 920px)",
          maxWidth: fullHeight ? "100%" : "calc(100vw - 32px)",
          maxHeight: fullHeight ? "100%" : "calc(100vh - 32px)",
        }}
        // Add a slight scale-in or fading animation to the main box
        initial={{ opacity: 0.5, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Subtle overlay pattern for depth */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_50%)]" />
        {/* Edge glow effects */}
        <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]" />
      </motion.div>

      {/* Ambient background elements for mobile/tablet */}
      <div className="xl:hidden absolute inset-0">
        {/* Top gradient orb - Starts after main box has appeared (e.g., delay of 0.3s) */}
        <motion.div
          className="absolute -top-20 left-1/4 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-radial from-blue-300/20 to-transparent blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: baseDuration, delay: 0.3, ease: "easeOut" }}
        />
        {/* Bottom gradient orb - Starts after the top orb has begun (e.g., delay of 0.5s) */}
        <motion.div
          className="absolute -bottom-20 right-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-radial from-cyan-300/20 to-transparent blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: baseDuration, delay: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Left and Right images - Visible on large laptop screens (xl and above) */}
      {showImages && (
        <>
          {/* Group 1: Left Top and Right Top - Start around the same time (e.g., 0.8s) */}
          <motion.img
            src="/HERO-PICTURES/Rectangle left-01.png"
            alt=""
            className="hidden xl:block absolute top-24 left-[-10px] w-96 h-auto drop-shadow-2xl"
            initial={{ x: "-150%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: baseDuration + 0.3, delay: 0.8, ease: imageEase }}
          />
          <motion.img
            src="/HERO-PICTURES/Rectangle right01.png"
            alt=""
            className="hidden xl:block absolute top-20 right-[-10px] w-116 h-auto drop-shadow-2xl"
            initial={{ x: "150%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: baseDuration + 0.3, delay: 0.8, ease: imageEase }}
          />

          {/* Group 2: Left Middle and Right Middle - Start shortly after Group 1 (e.g., 1.1s) */}
          <motion.img
            src="/HERO-PICTURES/Rectangle left-02.png"
            alt=""
            className="hidden xl:block absolute top-48 left-0 w-96 h-auto drop-shadow-2xl"
            initial={{ x: "-150%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: baseDuration + 0.5, delay: 1.1, ease: imageEase }}
          />
          <motion.img
            src="/HERO-PICTURES/Rectangle -right02.png"
            alt=""
            className="hidden xl:block absolute top-48 right-[-10px] w-159 h-auto drop-shadow-2xl"
            initial={{ x: "150%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: baseDuration + 0.5, delay: 1.1, ease: imageEase }}
          />

          {/* Group 3: Right Bottom - Starts last (e.g., 1.4s) */}
          <motion.img
            src="/HERO-PICTURES/Rectangle right-03.png"
            alt=""
            className="hidden xl:block absolute bottom-5 right-0 w-148 h-auto drop-shadow-2xl"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: baseDuration + 0.7, delay: 1.4, ease: imageEase }}
          />
        </>
      )}
    </div>
  );
};

export default Background;

