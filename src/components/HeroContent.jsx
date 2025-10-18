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

  

<a
  href="#"
  style={{
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 32px',
    borderRadius: '9999px',
    fontWeight: '600',
    color: 'white',
    border: '2px solid white',
    fontSize: 'clamp(14px, 1.6vw, 18px)',
    textDecoration: 'none',
    overflow: 'hidden',
    minWidth: 'clamp(250px, 40vw, 340px)',
    height: '64px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.4)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.transform = 'translateY(0)';
  }}
>
  {/* Icon - Moves from left to right on hover */}
  <span
    className="icon"
    style={{
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'clamp(36px, 5vw, 44px)',
      height: 'clamp(36px, 5vw, 44px)',
      backgroundColor: 'white',
      color: '#667eea',
      borderRadius: '50%',
      fontSize: 'clamp(18px, 2vw, 22px)',
      fontWeight: '700',
      left: '12px',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    }}
  >
    →
  </span>

  {/* Text - Moves from right to left on hover */}
  <span
    className="text"
    style={{
      position: 'absolute',
      left: 'clamp(60px, 10vw, 72px)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      whiteSpace: 'nowrap',
    }}
  >
    Get started for free
  </span>

  <style>{`
    a:hover .icon {
      left: calc(100% - clamp(48px, 7vw, 56px)) !important;
      box-shadow: 0 0 16px rgba(255, 255, 255, 0.8) !important;
      transform: rotate(0deg) !important;
    }
    
    a:hover .text {
      left: 24px !important;
    }

    @media (max-width: 640px) {
      a:hover .icon {
        left: calc(100% - 48px) !important;
      }
    }

    @media (min-width: 641px) and (max-width: 1024px) {
      a:hover .icon {
        left: calc(100% - 52px) !important;
      }
    }
  `}</style>
</a>





      
    </div>
  )
}

export default HeroContent
