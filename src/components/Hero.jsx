import React from "react";

const Hero = () => {
  return (
    <section className="max-w-[1200px] pt-[65px] pb-[120px] mx-auto ">
      <div className="flex md:flex-row flex-col items-center gap-[30px]">
        <div className="lg:flex-grow md:w-[42.9%] px-[15px] flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="text-[48px] font-[800] text-text-primary leading-[50px]">
            Simple app for businesses
          </h1>
          <p className="text-[18px] leading-[28px] text-text-secondary pt-[20px] pb-[30px]">
            Modern software is often complex and there is a learning curve. We
            are solving this problem by building a simple business app.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-[#4e74ff] text-white py-[13px] px-[34px] focus:outline-none hover:bg-primary-color rounded-[4px] text-[18px] font-[600]">
              Try it Free
            </button>
          </div>
        </div>
        <div className="md:w-[60%] w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/assets/hero.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
