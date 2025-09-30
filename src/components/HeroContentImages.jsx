// src/components/HeroContentImages.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroContentImages = () => {
  return (
    <div className="relative flex flex-wrap gap-6 justify-center mt-10 z-20">
      {/* Image 1 */}
      <motion.img
        src="/HERO-PICTURES/HERO-CONTENT-01.png"
        alt="E-commerce Checkout Flow"
        className="w-[405px] h-[319px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.05, rotateY: 5 }}
      />

      {/* Image 2 */}
      <motion.img
        src="/HERO-PICTURES/HERO-CONTENT-02.png"
        alt="Invite Member Modal"
        className="w-[258px] h-[238px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        style={{ animationDelay: '0.5s' }}
        whileHover={{ scale: 1.05, rotateY: -5 }}
      />

      {/* Image 3 */}
      <motion.img
        src="/HERO-PICTURES/HERO-CONTENT-03.png"
        alt="Insights Dashboard"
        className="w-[324px] h-[318px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        style={{ animationDelay: '1s' }}
        whileHover={{ scale: 1.05, rotateY: 3 }}
      />

      {/* Image 4 */}
      <motion.img
        src="/HERO-PICTURES/HERO-CONTENT-04.png"
        alt="Role Management"
        className="w-[323px] h-[318px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        style={{ animationDelay: '1.5s' }}
        whileHover={{ scale: 1.05, rotateY: -3 }}
      />

      {/* Image 5 – beneath first row */}
      <motion.img
        src="/HERO-PICTURES/HERO-CONTENT-05.png"
        alt="Recent Projects"
        className="w-[633px] h-[275px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-6"
        style={{ animationDelay: '2s' }}
        whileHover={{ scale: 1.05, rotateY: 4 }}
      />
    </div>
  );
};

export default HeroContentImages;
