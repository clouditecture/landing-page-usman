


// // src/components/HeroContent.jsx
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const HeroContent = ({ heading, subheading, primaryCTA }) => {
//   return (
//     <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-28 sm:-mt-32 lg:-mt-40">
//       {/* Heading */}
//       <motion.h1
//         className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-snug"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//       >
//         {heading}
//       </motion.h1>

//       {/* Subheading */}
//       <motion.p
//         className="text-sm sm:text-base md:text-lg text-white/90 mb-5 max-w-xl mx-auto leading-relaxed"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//       >
//         {subheading}
//       </motion.p>

//       {/* CTA Button */}
//       <motion.div
//         className="flex items-center justify-center"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
//       >
//         <a
//           href={primaryCTA.href}
//           className="group relative inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
//         >
//           <span>{primaryCTA.text}</span>
//           <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
//         </a>
//       </motion.div>
//     </div>
//   );
// };

// export default HeroContent;

"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const HeroContent = ({ heading, subheading, primaryCTA }) => {
  return (
    <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28">
      {/* Heading */}
      <motion.h1
        className="text-[clamp(28px,5vw,64px)] font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {heading}
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-[clamp(14px,2.1vw,20px)] text-white/90 mb-5 sm:mb-7 md:mb-8 max-w-[42rem] lg:max-w-[48rem] mx-auto leading-relaxed px-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {subheading}
      </motion.p>

      {/* CTA Button */}
      <motion.div
        className="flex items-center justify-center mb-6 sm:mb-8 md:mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href={primaryCTA.href}
          className="group relative inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-[clamp(14px,1.6vw,18px)]"
        >
          <span>{primaryCTA.text}</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </motion.div>
    </div>
  )
}

export default HeroContent
