import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#253057] py-[60px] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          zIndex: "1",
        }}
      >
        <img
          src="/assets/footer-shape.svg"
          alt="Footer Shape"
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            transform: "rotate(0deg)",
            objectFit: "contain",
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="z-10 relative max-w-[1200px] mx-auto w-full px-[15px] pb-[70px] mx-auto flex md:items-center lg:items-start justify-between md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0  text-left">
          <a className="flex title-font font-medium items-center justify-start text-gray-900">
            <span className="text-[20px] font-montserrat text-white font-[700] leading-[30px] mb-[10px]">
              BusyBucket.io
            </span>
          </a>
          <div className="flex flex-col ms-[-10px]">
            <span className="w-[180px] h-[69.65px]">
              <img
                className="h-full w-full object-contain"
                src="/assets/google-play.png"
                alt=""
              />
            </span>
            <span className="w-[180px] h-[53.48px]">
              <img
                className="h-full w-full object-contain"
                src="/assets/app-store.svg"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="flex gap-[30px] -mb-10 md:mt-0 mt-10 text-left">
          <div className="md:min-w-[170px] md:w-[170px] w-full">
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
          <div className="md:min-w-[170px] md:w-[170px] w-full z-[999]">
            <h2 className="text-white font-[600] leading-[24px] text-[18px] mb-[10px]">
              Information
            </h2>
            <nav className="list-none text-[16px] leading-[32px] text-[#c5cee4]">
              <li>
                <NavLink className="hover:text-gray-300" to="/privacy-policy">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
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
