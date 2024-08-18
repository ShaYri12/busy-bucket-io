import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-[40px] pb-[100px] pt-[25px]">
      <h2 className="mt-[20px] text-text-primary text-[32px] leading-[36px] font-[700] mb-[10px]">
        Cookie Policy
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          We use cookies to help improve your experience of our website at{" "}
          <Link className="text-[#0000EE] underline" to="/">
            busybucket.io
          </Link>
          . This cookie policy is part of Coding Brothers' privacy policy. It
          covers the use of cookies between your device and our site.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          We also provide basic information on third-party services we may use,
          who may also use cookies as part of their service. This policy does
          not cover their cookies.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          If you don’t wish to accept cookies from us, you should instruct your
          browser to refuse cookies from{" "}
          <Link className="text-[#0000EE] underline" to="/">
            busybucket.io
          </Link>
          . In such a case, we may be unable to provide you with some of your
          desired content and services.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        What is a cookie?
      </h2>
      <div className="space-y-[24px]">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          A cookie is a small piece of data that a website stores on your device
          when you visit. It typically contains information about the website
          itself, a unique identifier that allows the site to recognize your web
          browser when you return, additional data that serves the cookie’s
          purpose, and the lifespan of the cookie itself.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Cookies are used to enable certain features (e.g. logging in), track
          site usage (e.g. analytics), store your user settings (e.g. time zone,
          notification preferences), and to personalize your content (e.g.
          advertising, language).
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Cookies set by the website you are visiting are usually referred to as
          first-party cookies. They typically only track your activity on that
          particular site.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Cookies set by other sites and companies (i.e. third parties) are
          called third-party cookies They can be used to track you on other
          websites that use the same third-party service.
        </p>
      </div>

      <h2 className="mt-[20px] text-text-primary text-[24px] leading-[30px] font-[700] mb-[10px]">
        Types of cookies and how we use them
      </h2>
      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        Essential cookies
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Essential cookies are crucial to your experience of a website,
          enabling core features like user logins, account management, shopping
          carts, and payment processing.
        </p>
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          We use essential cookies to enable certain functions on our website.
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        Performance cookies
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Performance cookies track how you use a website during your visit.
          Typically, this information is anonymous and aggregated, with
          information tracked across all site users. They help companies
          understand visitor usage patterns, identify and diagnose problems or
          errors their users may encounter, and make better strategic decisions
          in improving their audience’s overall website experience. These
          cookies may be set by the website you’re visiting (first-party) or by
          third-party services. They do not collect personal information about
          you.
          <br /> We use performance cookies on our site.
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        Functionality cookies
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Functionality cookies are used to collect information about your
          device and any settings you may configure on the website you’re
          visiting (like language and time zone settings). With this
          information, websites can provide you with customized, enhanced, or
          optimized content and services. These cookies may be set by the
          website you’re visiting (first-party) or by third-party services.
          <br /> We use functionality cookies for selected features on our site.
        </p>
      </div>

      <h2 className="mt-[10px] text-text-primary text-[18px] leading-[24px] font-[700] mb-[10px]">
        Targeting/advertising cookies
      </h2>
      <div className="">
        <p className="text-text-secondary text-[16px] leading-[26px] mb-0">
          Targeting/advertising cookies help determine what promotional content
          is most relevant and appropriate to you and your interests. Websites
          may use them to deliver targeted advertising or limit the number of
          times you see an advertisement. This helps companies improve the
          effectiveness of their campaigns and the quality of content presented
          to you. These cookies may be set by the website you’re visiting
          (first-party) or by third-party services.
          <br /> Targeting/advertising cookies set by third-parties may be used
          to track you on other websites that use the same third-party service.
          <br /> We do not use this type of cookie on our site.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
