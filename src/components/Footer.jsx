import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#253057] py-[60px] overflow-hidden">
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <img
          src="/assets/footer-shape.svg"
          alt="Footer Shape"
          className="absolute bottom-0 right-0 transform rotate-0 w-auto sm:h-auto h-[120px] max-w-none sm:max-w-full object-cover sm:object-contain"
        />
      </div>

      <div className="z-10 relative max-w-[1200px] mx-auto w-full px-[15px] lg:pb-[70px] pb-[50px] mx-auto flex items-start justify-between sm:flex-row flex-wrap flex-col gap-[41px]">
        <div className="w-64 flex-shrink-0  text-left">
          <a className="flex title-font font-medium items-start justify-start text-gray-900">
            <span className="text-[20px] font-montserrat text-white font-[700] leading-[30px] mb-[10px]">
              BusyBucket.io
            </span>
          </a>
          <div className="flex flex-col ms-[-10px]">
            <span className="w-[180px] h-[69.65px]">
              <a href="https://play.google.com/store/apps/details?id=com.busybucket.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img
                  className="h-full w-full object-contain"
                  src="/assets/google-play.png"
                  alt=""
                />
              </a>
            </span>
            <span className="w-[180px] h-[53.48px]">
              <a href="https://apps.apple.com/us/app/busybucket/id1665758339?ign-itscg=30200&ign-itsct=apps_box_badge">
                <img
                  className="h-full w-full object-contain"
                  src="/assets/app-store.svg"
                  alt=""
                />
              </a>
            </span>
          </div>
        </div>
        <div className="flex gap-[30px] text-left justify-between sm:w-auto w-full">
          <div className="lg:min-w-[170px] lg:w-[170px] md:min-w-[140px] md:w-[140px] sm:min-w-[98px] sm:w-[98px] w-full">
            <h2 className="text-white font-[600] leading-[24px] text-[18px] mb-[10px]">
              Navigation
            </h2>
            <nav className="list-none text-[16px] leading-[32px] text-[#c5cee4]">
              <li>
                <a className="hover:text-gray-300" href="/#features">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:text-gray-300" href="/#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-gray-300" href="/#contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:text-gray-300">Sign In</a>
              </li>
              <li>
                <a className="hover:text-gray-300">Sign Up</a>
              </li>
            </nav>
          </div>
          <div className="lg:min-w-[170px] lg:w-[170px] md:min-w-[140px] md:w-[140px] sm:min-w-[98px] sm:w-[99px] w-full">
            <h2 className="text-white font-[600] leading-[24px] text-[18px] mb-[10px]">
              Information
            </h2>
            <nav className="list-none text-[16px] leading-[32px] text-[#c5cee4]">
              <li>
                <NavLink className="hover:text-gray-300" to="/privacy-policy">
                  Privacy Policy
                </NavLink>
              </li>
              <li className="w-max">
                <NavLink className="hover:text-gray-300" to="/terms-of-service">
                  Terms of Service
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-gray-300" to="/cookie-policy">
                  Cookie Policy
                </NavLink>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
