import { motion } from "framer-motion";

const Background = () => {
  const bgVars = {
    "--bg-from": "#ABDCFF",
    "--bg-to": "#0396FF",
  };

  return (
    <div
      className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={bgVars}
    >
      {/* Gradient box - Responsive sizing */}
      <div
        className="
          absolute rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--bg-from)] to-[var(--bg-to)]
          shadow-[0_0_30px_rgba(3,150,255,0.15)] sm:shadow-[0_0_45px_rgba(3,150,255,0.2)] md:shadow-[0_0_60px_rgba(3,150,255,0.25)]
        "
        style={{
          width: "min(98vw, 95vw, 1499px)",
          height: "min(85vh, 90vh, 875px)",
        }}
      />

      {/* Left images - Only visible on large laptop screens (xl and above) */}
      <motion.img
        src="/HERO-PICTURES/Rectangle left-01.png"
        alt="Left 01"
        className="hidden xl:block absolute top-24 left-[-10px] w-96 h-auto"
        initial={{ x: "-150%" }}
        animate={{ x: "10%" }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Left pic 2 – Only visible on large laptop screens */}
      <motion.img
        src="/HERO-PICTURES/Rectangle left-02.png"
        alt="Left 02"
        className="hidden xl:block absolute top-48 left-0 w-96 h-auto"
        initial={{ x: "-150%" }}
        animate={{ x: "30%" }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />

      {/* Right pic 1 – Only visible on large laptop screens */}
      <motion.img
        src="/HERO-PICTURES/Rectangle right01.png"
        alt="Right 01"
        className="hidden xl:block absolute top-20 right-[-10px] w-116 h-auto"
        initial={{ x: "150%" }}
        animate={{ x: "-8%" }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Right pic 2 – Only visible on large laptop screens */}
      <motion.img
        src="/HERO-PICTURES/Rectangle -right02.png"
        alt="Right 02"
        className="hidden xl:block absolute top-48 right-[-10px] w-159 h-auto"
        initial={{ x: "150%" }}
        animate={{ x: "-5%" }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />

      {/* Right pic 3 – Only visible on large laptop screens */}
      <motion.img
        src="/HERO-PICTURES/Rectangle right-03.png"
        alt="Right 03"
        className="hidden xl:block absolute bottom-5 right-0 w-148 h-auto"
        initial={{ x: "100%" }}
        animate={{ x: "-30%" }}
        transition={{ duration: 3, ease: "easeOut" }}
      />
    </div>
  );
};

export default Background;
