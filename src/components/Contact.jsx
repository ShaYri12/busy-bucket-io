import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-white py-[120px] border border-[#eff3fb]"
    >
      <div
        className="max-w-[560px] px-[15px] bg-white rounded-[6px] mx-auto pb-[30px]"
        style={{ boxShadow: "0 18px 40px rgba(55, 68, 111, .14)" }}
      >
        <div className="flex flex-col w-full">
          <h1 className="mt-[40px] text-center mb-[20px] text-[32px] font-[700] leading-[36px] text-text-primary">
            Contact Us
          </h1>
          <p className="mx-auto max-w-[259px] text-left text-text-secondary text-[16px] leading-[26px]">
            Email us at{" "}
            <a className="text-[#0000EE] underline" href="#">
              info@busybucket.io
            </a>{" "}
            or <br /> fill out the form below to contact us.
          </p>
        </div>
        <div className="max-w-[380px] mx-auto mt-[40px] mb-[15px]">
          <div className="flex flex-col gap-[20px]">
            <div className="w-full">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full h-[46px] bg-[#eff3fb] border border-[#eff3fb] rounded-[4px] px-[24px] py-[12px] text-[14px] transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full h-[46px] bg-[#eff3fb] border border-[#eff3fb] rounded-[4px] px-[24px] py-[12px] text-[14px] transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="relative">
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full h-[46px] bg-[#eff3fb] border border-[#eff3fb] rounded-[4px] px-[24px] py-[12px] text-[14px] transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="w-full mb-[5px]">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="w-full min-h-[200px] bg-[#eff3fb] border border-[#eff3fb] rounded-[4px] px-[24px] py-[16px] text-[14px] transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="w-full">
              <button className="flex justify-center items-center rounded-[4px] px-[24px] py-[12px] w-full mx-auto text-white text-[16px] bg-[#4e74ff]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
