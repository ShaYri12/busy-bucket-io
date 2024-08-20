import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="max-w-[1200px] md:pt-[65px] pt-[25px] pb-[120px] mx-auto ">
      <div className="flex md:flex-row flex-col items-center gap-[30px]">
        <div className="lg:flex-grow lg:w-[42.9%] md:w-[50%] sm:w-[490px] px-[15px] flex flex-col md:items-start md:text-left items-center text-center md:mb-0 mb-[30px]">
          <h1 className="sm:text-[48px] text-[42px] font-[800] text-text-primary sm:leading-[50px] leading-[46px]">
            Simple app for businesses
          </h1>
          <p className="text-[18px] leading-[28px] text-text-secondary pt-[20px] pb-[30px]">
            Modern software is often complex and there is a learning curve. We
            are solving this problem by building a simple business app.
          </p>
          <div className="flex justify-center">
            <Link to="https://app.busybucket.io/sign-up">
              <button className="inline-flex text-white bg-[#4e74ff] text-white py-[13px] px-[34px] focus:outline-none hover:bg-primary-color rounded-[4px] text-[18px] font-[600] transition-all duration-300 ease-in-out">
                Try it Free
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-[60%] md:w-[50%]  md:max-w-auto max-w-[700px]">
          <img
            className="object-cover object-center rounded sm:px-0 px-[15px]"
            alt="hero"
            src="/assets/hero.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
