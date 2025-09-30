import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-2 sm:top-1 md:top-0 left-0 w-full z-50 px-2 sm:px-4">
      <nav className="bg-white rounded-full max-w-[1249px] h-[60px] sm:h-[65px] md:h-[73px] mx-auto flex items-center justify-between px-3 sm:px-6 md:px-8 shadow-md">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img
            src="/clouditecture-Logo.png"
            alt="Clouditecture Logo"
            className="w-[45px] sm:w-[55px] md:w-[63px] h-[25px] sm:h-[30px] md:h-[35px] object-contain"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#2584FF] to-[#00B5DD] bg-clip-text text-transparent">
            Clouditecture
          </span>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Contact Us */}
          <button className="flex items-center justify-center space-x-2 text-base text-[#041925] hover:text-[#2584FF] transition-colors duration-200 rounded-full hover:bg-gray-50 font-medium w-[164px] h-[51px]">
            <div className="w-[45px] h-[45px] bg-gradient-to-r from-[#2584FF] to-[#00B5DD] rounded-full flex items-center justify-center">
              <ArrowRight size={20} className="text-white" />
            </div>
            <span>Contact us</span>
          </button>

          {/* Get Started */}
          <button className="flex items-center justify-center space-x-2 bg-white text-[#041925] rounded-full hover:bg-gray-50 transition-all duration-200 font-medium text-base w-[163px] h-[51px] border border-[#2584FF]">
            <div className="w-[45px] h-[45px] bg-[#2584FF] rounded-full flex items-center justify-center">
              <ArrowRight size={20} className="text-white" />
            </div>
            <span>Get Started</span>
          </button>
        </div>

        {/* Tablet Action Buttons - Compact */}
        <div className="hidden sm:flex md:hidden items-center space-x-2">
          <button className="flex items-center justify-center text-sm text-[#041925] hover:text-[#2584FF] transition-colors duration-200 rounded-full hover:bg-gray-50 font-medium px-3 py-2">
            <div className="w-[35px] h-[35px] bg-gradient-to-r from-[#2584FF] to-[#00B5DD] rounded-full flex items-center justify-center mr-2">
              <ArrowRight size={16} className="text-white" />
            </div>
            <span>Contact</span>
          </button>

          <button className="flex items-center justify-center bg-white text-[#041925] rounded-full hover:bg-gray-50 transition-all duration-200 font-medium text-sm px-3 py-2 border border-[#2584FF]">
            <div className="w-[35px] h-[35px] bg-[#2584FF] rounded-full flex items-center justify-center mr-2">
              <ArrowRight size={16} className="text-white" />
            </div>
            <span>Start</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="w-[45px] h-[45px] bg-gradient-to-r from-[#2584FF] to-[#00B5DD] rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-200 active:scale-95"
          >
            {isMobileMenuOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`
        sm:hidden mt-2 mx-2 transition-all duration-300 ease-in-out transform origin-top
        ${isMobileMenuOpen 
          ? 'opacity-100 scale-y-100 translate-y-0' 
          : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'
        }
      `}>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 space-y-3">
            {/* Contact Us Mobile */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-between p-3 text-[#041925] hover:bg-gray-50 rounded-xl transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="w-[40px] h-[40px] bg-gradient-to-r from-[#2584FF] to-[#00B5DD] rounded-full flex items-center justify-center">
                  <ArrowRight size={18} className="text-white" />
                </div>
                <span className="font-medium text-base">Contact us</span>
              </div>
            </button>

            {/* Get Started Mobile */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-between p-3 bg-white text-[#041925] border border-[#2584FF] rounded-xl hover:bg-gray-50 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="w-[40px] h-[40px] bg-[#2584FF] rounded-full flex items-center justify-center">
                  <ArrowRight size={18} className="text-white" />
                </div>
                <span className="font-medium text-base">Get Started</span>
              </div>
            </button>

            {/* Additional mobile-specific options can be added here */}
            <div className="pt-2 border-t border-gray-100">
              <div className="text-center text-xs text-gray-500 py-2">
                Experience the future of cloud architecture
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;















