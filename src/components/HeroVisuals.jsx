import { motion } from "framer-motion";

const HeroVisuals = () => {
  const floatAnimation = {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };

  // True glowing bloom directly from the image
const glowClass = `
  rounded-lg
  shadow-[0_0_40px_15px_rgba(255,255,255,0.6),
          0_0_80px_30px_rgba(255,255,255,0.45),
          0_0_140px_60px_rgba(255,255,255,0.3)]
  filter drop-shadow(0 0 30px rgba(255,255,255,0.5))
`;
  const cards = [
    { id: 1, src: "/HERO-PICTURES/HERO-CONTENT-01.png", alt: "Hero Content 01", style: { top: "375px", left: "78px", width: "clamp(280px,25vw,480px)" }, delay: 0.6, floatDuration: 4 },
    { id: 2, src: "/HERO-PICTURES/HERO-CONTENT-02.png", alt: "Hero Content 02", style: { bottom: "20px", left: "450px", width: "clamp(240px,20vw,400px)" }, delay: 1, floatDuration: 5 },
    { id: 3, src: "/HERO-PICTURES/HERO-CONTENT-03.png", alt: "Hero Content 03", style: { top: "520px", left: "50%", transform: "translateX(-50%)", width: "clamp(260px,22vw,420px)", zIndex: 20 }, delay: 0.8, floatDuration: 4.5 },
    { id: 4, src: "/HERO-PICTURES/HERO-CONTENT-04.png", alt: "Hero Content 04", style: { top: "320px", right: "20px", width: "clamp(260px,23vw,440px)" }, delay: 1.2, floatDuration: 4.2 },
    { id: 5, src: "/HERO-PICTURES/HERO-CONTENT-05.png", alt: "Hero Content 05", style: { bottom: "30px", right: "820px", width: "clamp(340px,28vw,560px)" }, delay: 1.4, floatDuration: 4.8 },
    { id: 6, src: "/HERO-PICTURES/HERO-CONTENT-06.png", alt: "Hero Content 06", style: { left: "0px", bottom: "115px", width: "123px", height: "298px", objectFit: "contain", zIndex: 15 }, delay: 1.6, floatDuration: 4.6 },
  ];

  return (
    <>
      {/* Desktop & Tablet */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="absolute"
            style={card.style}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: card.delay, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={card.src}
              alt={card.alt}
              className={`w-full h-auto ${glowClass}`}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: card.floatDuration, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile */}
      <div className="sm:hidden absolute inset-0 pointer-events-none flex items-center justify-center pt-114">
        <motion.div
          className="w-[clamp(220px,70vw,320px)] mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.img
            src="/HERO-PICTURES/HERO-CONTENT-03.png"
            alt="Hero Content Mobile"
            className={`w-full h-auto ${glowClass}`}
            animate={floatAnimation}
          />
        </motion.div>
      </div>
    </>
  );
};

export default HeroVisuals;
