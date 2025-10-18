"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <header
      className="
        fixed inset-x-0 top-4 z-50
        px-3 sm:px-4 md:px-6
      "
      aria-label="Primary"
    >
      {/* Shell */}
    <nav
  className="
    mx-auto
    max-w-[1410px]
    h-[60px] sm:h-[66px] md:h-[72px]   /* reduced height */
    rounded-full
    bg-white
    shadow-md
    ring-1 ring-black/5
    flex items-center justify-between
    px-4 sm:px-5 md:px-7
  "
  role="navigation"
>
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          
          <img
            src="/clouditecture-Logo.png"
            alt="Clouditecture"
            className="
              h-7 w-auto sm:h-8 md:h-9
              object-contain
            "
          />
          <span
            className="
              font-semibold text-base sm:text-lg md:text-xl
              bg-gradient-to-r from-[#2584FF] to-[#00B5DD]
              bg-clip-text text-transparent
              leading-none
            "
          >
            Clouditecture
          </span>
        </Link>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">

          {/* PRICING   */}

          <Link to="/pricing" onClick={close} className="contents">
  <button
    type="button"
    className="
      relative
      inline-flex items-center justify-center
      font-medium
      text-sm lg:text-base
      text-black
      bg-transparent
      transition-all duration-300
      cursor-pointer
      group
    "
  >
    Pricing
    {/* Smooth underline effect */}
    <span
      className="
        absolute left-0 -bottom-[2px]
        h-[1.5px] w-0
        bg-black
        transition-all duration-300 ease-out
        group-hover:w-full
      "
    ></span>
  </button>
</Link>

          {/* Contact Us */}
          

         <Link to="/contact" onClick={close} className="contents">
  <button
    type="button"
    className="
      relative
      inline-flex items-center justify-center
      font-medium
      text-sm lg:text-base
      text-black
      bg-transparent
      transition-all duration-300
      cursor-pointer
      group
    "
  >
    Contact Us

    {/* Smooth underline effect */}
    <span
      className="
        absolute left-0 -bottom-[2px]
        h-[1.5px] w-0
        bg-black
        transition-all duration-300 ease-out
        group-hover:w-full
      "
    ></span>
  </button>
</Link>



          {/* Get Started */}
          


           <button
      className="
        flex items-center gap-2
        border border-blue-500
        text-blue-500
        bg-white
        font-medium
        px-5 py-2
        rounded-full
        transition-all duration-300
        hover:bg-blue-50
        hover:shadow-[0_0_8px_rgba(59,130,246,0.4)]
        cursor-pointer
      "
    >
      Get started
      <ArrowRight className="w-4 h-4" />
    </button>
    

    
        </div>

        {/* Tablet compact actions (sm to md) */}
        <div className="hidden sm:flex md:hidden items-center gap-2">
          <Link to="/contact" onClick={close} className="contents">
            <button
              type="button"
              className="
                inline-flex items-center
                h-10 rounded-full
                px-3 pr-3.5
                font-medium
                text-sm
                text-[#041925]
                hover:text-[#2584FF]
                transition-colors
                bg-transparent hover:bg-gray-50
              "
            >
              <span
                className="
                  mr-2 inline-flex items-center justify-center
                  h-9 w-9 rounded-full
                  bg-gradient-to-r from-[#2584FF] to-[#00B5DD]
                  text-white
                "
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>Contact</span>
            </button>
          </Link>

          <button
            type="button"
            className="
              inline-flex items-center
              h-10 rounded-full
              px-3 pr-3.5
              font-medium
              text-sm
              text-[#041925]
              bg-white
              border border-[#2584FF]
              hover:bg-gray-50
              transition-colors
            "
          >
            <span
              className="
                mr-2 inline-flex items-center justify-center
                h-9 w-9 rounded-full
                bg-[#2584FF] text-white
              "
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>Start</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="
              inline-flex items-center justify-center
              h-11 w-11 rounded-full
              bg-gradient-to-r from-[#2584FF] to-[#00B5DD]
              text-white
              shadow-sm
              transition-transform active:scale-95
            "
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        id="mobile-menu"
        className={`
          sm:hidden mt-2 mx-1.5
          transition-all duration-300 ease-out
          ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }
        `}
      >
        <div
          className="
            mx-auto max-w-[1160px]
            rounded-2xl bg-white
            shadow-lg ring-1 ring-black/5
            overflow-hidden
          "
        >
          <div className="px-3 py-3.5">
            <div className="flex flex-col gap-2.5">
              <Link to="/contact" onClick={close}>
                <button
                  type="button"
                  className="
                    w-full
                    flex items-center
                    rounded-xl
                    px-3.5 py-3
                    text-[#041925]
                    hover:bg-gray-50
                    transition-colors
                  "
                >
                  <span
                    className="
                      mr-3 inline-flex items-center justify-center
                      h-10 w-10 rounded-full
                      bg-gradient-to-r from-[#2584FF] to-[#00B5DD]
                      text-white
                    "
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-base">Contact us</span>
                </button>
              </Link>

              <button
                type="button"
                onClick={close}
                className="
                  w-full
                  flex items-center
                  rounded-xl
                  px-3.5 py-3
                  text-[#041925]
                  bg-white
                  border border-[#2584FF]
                  hover:bg-gray-50
                  transition-colors
                "
              >
                <span
                  className="
                    mr-3 inline-flex items-center justify-center
                    h-10 w-10 rounded-full
                    bg-[#2584FF] text-white
                  "
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-medium text-base">Get Started</span>
              </button>
            </div>

            <div className="mt-3 border-t border-gray-100 pt-2">
              <p className="text-center text-xs text-gray-500">
                Experience the future of cloud architecture
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
