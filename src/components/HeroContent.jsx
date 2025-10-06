// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const HeroContent = ({ heading, subheading, primaryCTA }) => {
//   return (
//     <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-28 sm:-mt-32 lg:-mt-40">
//       {/* Heading */}
//       <motion.h1
//         className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 leading-snug"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//       >
//         {heading}
//       </motion.h1>

//       {/* Subheading */}
//       <motion.p
//         className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-5 max-w-xl mx-auto leading-relaxed"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//       >
//         {subheading}
//       </motion.p>

//       {/* Single CTA Button */}
//       <motion.div
//         className="flex items-center justify-center"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
//       >
//         <a
//           href={primaryCTA.href}
//           className="group relative inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
//         >
//           <span>{primaryCTA.text}</span>
//           <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
//         </a>
//       </motion.div>
//     </div>
//   );
// };

// export default HeroContent;





// src/components/HeroContent.jsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroContent = ({ heading, subheading, primaryCTA }) => {
  return (
    <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-28 sm:-mt-32 lg:-mt-40">
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-snug"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {heading}
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-sm sm:text-base md:text-lg text-white/90 mb-5 max-w-xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {subheading}
      </motion.p>

      {/* CTA Button */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href={primaryCTA.href}
          className="group relative inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
        >
          <span>{primaryCTA.text}</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </motion.div>
    </div>
  );
};

export default HeroContent;
