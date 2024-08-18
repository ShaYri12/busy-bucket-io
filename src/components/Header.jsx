import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Add smooth scrolling behavior to the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Scroll to section when location hash changes
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="w-full h-[75px] bg-white">
      <header
        className={`bg-white max-w-[1200px] mx-auto flex fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-[75px]"
        }`}
      >
        <div className="relative flex flex-row w-full min-h-[75px] lg:px-[15px] justify-between items-center z-[999] bg-white">
          <div className="flex w-full justify-between lg:px-0 px-[15px] z-[999] bg-white">
            <NavLink to="/" className="flex items-center">
              <span className="text-[20px] font-montserrat text-primary-color font-[700] leading-[30px]">
                BusyBucket.io
              </span>
            </NavLink>
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-primary-text focus:outline-none relative w-8 h-8 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div
                className={`w-[28px] h-[2.5px] bg-[#37446f] transition-transform duration-300 ease-in-out absolute ${
                  isMenuOpen ? "rotate-45" : "translate-y-2"
                }`}
                style={{ transformOrigin: "center" }}
              ></div>
              <div
                className={`w-[28px] h-[2.5px] bg-[#37446f] transition-opacity duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></div>
              <div
                className={`w-[28px] h-[2.5px] bg-[#37446f] transition-transform duration-300 ease-in-out absolute ${
                  isMenuOpen ? "-rotate-45 " : "-translate-y-2"
                }`}
                style={{ transformOrigin: "center" }}
              ></div>
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-row gap-[20px]">
            <nav className="flex text-text-primary text-[16px] font-[600] leading-[20px] flex lg:flex-row items-center text-base">
              <a
                className="hover:text-gray-900 px-[24px] py-[14px]"
                href="/#features"
              >
                Features
              </a>
              <a
                className="hover:text-gray-900 px-[24px] py-[14px]"
                href="/#pricing"
              >
                Pricing
              </a>
              <a
                className="hover:text-gray-900 px-[24px] py-[14px]"
                href="/#team"
              >
                Team
              </a>
              <a
                className="hover:text-gray-900 px-[24px] py-[14px]"
                href="/#contact"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-[10px] text-[#4e74ff]">
              <button className="inline-flex w-max items-center border-[1.6px] text-[14px] font-[600] rounded-[4px] border-[#4e74ff] py-[10px] px-[24px] focus:outline-none hover:bg-[#D8EFFF] transition-all duration-300 ease-in-out">
                Sign In
              </button>
              <button className="inline-flex w-max items-center border-[1.6px] border-[#4e74ff] py-[10px] px-[24px] text-[14px] font-[600] rounded-[4px] bg-[#4e74ff] text-white focus:outline-none hover:bg-[#3898ec] transition-all duration-300 ease-in-out">
                Try it Free
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-[75px] left-0 right-0 bg-white overflow-hidden transition-transform duration-300 ease-in-out z-[99] py-[20px] ${
            isMenuOpen
              ? "translate-y-0 max-h-[500px] opacity-100"
              : "-translate-y-full max-h-0 opacity-0"
          }`}
          style={
            isMenuOpen ? { boxShadow: "0 20px 60px rgba(55, 68, 111, .4)" } : {}
          }
        >
          <nav className="text-text-primary text-[16px] font-[600] leading-[20px] flex flex-col items-center text-base">
            <a
              className="hover:text-gray-900 px-[24px] py-[14px]"
              href="/#features"
            >
              Features
            </a>
            <a
              className="hover:text-gray-900 px-[24px] py-[14px]"
              href="/#pricing"
            >
              Pricing
            </a>
            <a
              className="hover:text-gray-900 px-[24px] py-[14px]"
              href="/#team"
            >
              Team
            </a>
            <a
              className="hover:text-gray-900 px-[24px] py-[14px]"
              href="/#contact"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-[10px] text-[#4e74ff] py-4 w-fit mx-auto">
            <button className="inline-flex items-center border-[1.6px] text-[14px] font-[600] rounded-[4px] border-[#4e74ff] py-[10px] px-[24px] focus:outline-none hover:bg-[#D8EFFF] transition-all duration-300 ease-in-out">
              Sign In
            </button>
            <button className="inline-flex items-center border-[1.6px] border-[#4e74ff] py-[10px] px-[24px] text-[14px] font-[600] rounded-[4px] bg-[#4e74ff] text-white focus:outline-none hover:bg-[#3898ec] transition-all duration-300 ease-in-out">
              Try it Free
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
