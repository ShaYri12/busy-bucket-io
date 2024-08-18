import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#eff3fb] py-[80px] overflow-hidden">
      <div className="mx-auto">
        <h1 className="text-[32px] text-center font-[700] leading-[36px] mt-[20px] mb-[10px] text-text-primary">
          Pricing
        </h1>
        <div className="w-[665px] mx-auto">
          <div className="flex flex-col justify-center mt-[45px] mx-auto md:flex-row gap-[30px]">
            {/* Paid Plan */}
            <div
              className=" max-w-[315.2px] w-[315.2px] flex-1 bg-white h-[612px] rounded-[10px] p-[30px] pb-[40px]"
              style={{ boxShadow: "0 30px 50px rgba(55, 68, 111, .1)" }}
            >
              <div className="flex flex-col h-full items-center">
                <div className="w-[50px] h-[50px] p-[8px] bg-[#eff0ff] rounded-[10px] flex items-center justify-center">
                  <img
                    className="h-full w-full object-contain"
                    src="/assets/icons/star1.svg"
                    alt="star-icon1"
                  />
                </div>
                <h2 className="text-[24px] leading-[32px] font-[700] text-text-primary mb-[10px] mt-[20px]">
                  Paid Plan
                </h2>
                <p className="flex">
                  <span className="text-[16px] leading-[24px] font-montserrat text-[#37446f]">
                    ${" "}
                  </span>
                  <span className="text-[54px] font-montserrat leading-[54px] px-[4px] text-text-primary">
                    10
                  </span>
                  <span className="text-[16px] leading-[24px] text-text-secondary mt-auto tracking-[1px]">
                    /mo per user *
                  </span>
                </p>
                <div className="flex flex-col items-center justify-between h-full">
                  <ul className="text-text-secondary mt-[20px] mb-[30px]">
                    <li className="flex items-center leading-[26px] text-[16px] py-[4px]">
                      <img
                        className="me-[8px]"
                        src="/assets/icons/check_icon.svg"
                        alt="checkmark"
                      />
                      Businesses with 2+ employees
                    </li>
                    <li className="flex items-center leading-[26px] text-[16px] py-[4px]">
                      <img
                        className="me-[8px]"
                        src="/assets/icons/check_icon.svg"
                        alt="checkmark"
                      />
                      Web app
                    </li>
                    <li className="flex items-center leading-[26px] text-[16px] py-[4px]">
                      <img
                        className="me-[8px]"
                        src="/assets/icons/check_icon.svg"
                        alt="checkmark"
                      />
                      Mobile app
                    </li>
                    <li className="flex items-center leading-[26px] text-[16px] py-[4px]">
                      <img
                        className="me-[8px]"
                        src="/assets/icons/check_icon.svg"
                        alt="checkmark"
                      />
                      Full access to features
                    </li>
                    <li className="flex items-center leading-[26px] text-[16px] py-[4px]">
                      <img
                        className="me-[8px]"
                        src="/assets/icons/check_icon.svg"
                        alt="checkmark"
                      />
                      Unlimited report history
                    </li>
                    <li className="flex items-center leading-[26px] text-[16px] py-[4px]">
                      <img
                        className="me-[8px]"
                        src="/assets/icons/check_icon.svg"
                        alt="checkmark"
                      />
                      Unlimited attachments
                    </li>
                    <li className="flex items-center leading-[26px] text-[16px] py-[4px]">
                      <img
                        className="me-[8px]"
                        src="/assets/icons/check_icon.svg"
                        alt="checkmark"
                      />
                      Basic support
                    </li>
                  </ul>
                  <button className="w-[255px] py-[12px] px-[28px] bg-[#4e74ff] text-white rounded-[4px] text-[16px] font-[600] hover:bg-[#3a5ebc]">
                    Get Free Trial
                  </button>
                </div>
              </div>
            </div>

            {/* Custom Plan */}
            <div
              className="flex-1 bg-white rounded-[10px] p-[30px] pb-[40px] max-w-[315.2px] w-[315.2px] h-[612px]"
              style={{ boxShadow: "0 30px 50px rgba(55, 68, 111, .1)" }}
            >
              <div className="flex flex-col items-center h-full">
                <div className="w-[50px] h-[50px] p-[8px] bg-[#eff0ff] rounded-[10px] flex items-center justify-center">
                  <img
                    className="h-full w-full object-contain"
                    src="/assets/icons/star2.svg"
                    alt="star-icon2"
                  />
                </div>
                <h2 className="text-[24px] leading-[32px] font-[700] text-text-primary mb-[10px] mt-[20px]">
                  Custom Plan
                </h2>
                <div className="flex flex-col items-center justify-between h-full">
                  <ul className="text-text-secondary mt-[20px] mb-[30px]">
                    <li className="flex items-center leading-[26px] text-[16px] py-[4px]">
                      <img
                        className="me-[8px]"
                        src="/assets/icons/check_icon.svg"
                        alt="checkmark"
                      />
                      Businesses with 50+ employees
                    </li>
                    <li className="flex items-center leading-[26px] text-[16px] py-[4px]">
                      <img
                        className="me-[8px]"
                        src="/assets/icons/check_icon.svg"
                        alt="checkmark"
                      />
                      Web app
                    </li>
                    <li className="flex items-center leading-[26px] text-[16px] py-[4px]">
                      <img
                        className="me-[8px]"
                        src="/assets/icons/check_icon.svg"
                        alt="checkmark"
                      />
                      Mobile app
                    </li>
                    <li className="flex items-center leading-[26px] text-[16px] py-[4px]">
                      <img
                        className="me-[8px]"
                        src="/assets/icons/check_icon.svg"
                        alt="checkmark"
                      />
                      Full access to features
                    </li>
                    <li className="flex items-center leading-[26px] text-[16px] py-[4px]">
                      <img
                        className="me-[8px]"
                        src="/assets/icons/check_icon.svg"
                        alt="checkmark"
                      />
                      Unlimited report history
                    </li>
                    <li className="flex items-center leading-[26px] text-[16px] py-[4px]">
                      <img
                        className="me-[8px]"
                        src="/assets/icons/check_icon.svg"
                        alt="checkmark"
                      />
                      Unlimited attachments
                    </li>
                    <li className="flex items-center leading-[26px] text-[16px] py-[4px]">
                      <img
                        className="me-[8px]"
                        src="/assets/icons/check_icon.svg"
                        alt="checkmark"
                      />
                      Premium 24x7 support
                    </li>
                    <li className="flex items-center leading-[26px] text-[16px] py-[4px]">
                      <img
                        className="me-[8px]"
                        src="/assets/icons/check_icon.svg"
                        alt="checkmark"
                      />
                      Payroll software integration
                    </li>
                    <li className="flex items-center leading-[26px] text-[16px] py-[4px]">
                      <img
                        className="me-[8px]"
                        src="/assets/icons/check_icon.svg"
                        alt="checkmark"
                      />
                      On-demand custom integrations and features
                    </li>
                  </ul>
                  <button className="w-full py-[12px] px-[28px] bg-[#4e74ff] text-white rounded-[4px] text-[16px] font-[600] hover:bg-[#3a5ebc]">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="ps-[33px] py-[4px] text-[14px] italic leading-[26px] text-text-secondary text-left">
            * Minimum 2 users purchase required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
