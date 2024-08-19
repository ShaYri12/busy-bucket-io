import React from "react";

const Android = () => {
  return (
    <div className="px-[15px] bg-white lg:pt-[65px] pt-[25px] pb-[120px]">
      <div className="bg-white max-w-[1200px] mx-auto flex flex-col text-center items-center justify-center">
        <h1 className="text-text-primary font-[700] text-[32px] leading-[36px] mb-[20px] mt-[20px]">
          Android App
        </h1>
        <p className="text-text-secondary text-[18px] leading-[28px] mt-[20px] mb-[30px]">
          To download our Android app, simply click on the badge below. <br />
          Once the download is complete, you can start using the app right away.
        </p>
        <span className="w-[249px] sm:mb-[104px] mb-[45px]">
          <a href="https://apps.apple.com/us/app/busybucket/id1665758339?ign-itscg=30200&ign-itsct=apps_box_badge">
            <img
              className="w-full h-full"
              src="/assets/google-play.png"
              alt="google-play-img"
            />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Android;
