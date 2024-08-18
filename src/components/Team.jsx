import React from "react";

const teamData = [
  {
    name: "Artur Sentsov",
    role: "Founder / Backend Engineer",
    location: "Roseville, CA",
    imageSrc: "/assets/member1.jpg",
  },
  {
    name: "Roman Sentsov",
    role: "Cofounder / Backend Engineer",
    location: "Sacramento, CA",
    imageSrc: "/assets/member2.jpg",
  },
  {
    name: "Danil Ivashchenko",
    role: "UI/UX Designer",
    location: "Sacramento, CA",
    imageSrc: "/assets/member3.png",
  },
  {
    name: "Anatoliy Dankov",
    role: "Lead Software Engineer",
    location: "Khmelnytskyi, Ukraine",
    imageSrc: "/assets/member4.jpg",
  },
  {
    name: "Alexei Savchuk",
    role: "Senior Frontend Engineer",
    location: "Khmelnytskyi, Ukraine",
    imageSrc: "/assets/member5.jpg",
  },
  {
    name: "Alex Pylypchuk",
    role: "Junior Frontend Engineer",
    location: "Khmelnytskyi, Ukraine",
    imageSrc: "/assets/member6.jpg",
  },
  {
    name: "Vince Yelets",
    role: "QA Engineer",
    location: "Rancho Cordova, CA",
    imageSrc: "/assets/member7.jpg",
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-white">
      <div className="max-w-[1200px] px-[15px] mx-auto py-[60px] bg-white">
        <h1 className="text-[32px] text-center text-text-primary font-[700] leading-[36px] mb-[40px] mt-[20px]">
          Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[30px] gap-y-[50px] max-w-[870px] mx-auto">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="h-full flex flex-col items-center text-center p-[30px]"
              style={{
                boxShadow: "0 16px 24px rgba(55, 68, 111, .1)",
              }}
            >
              <img
                alt={member.name}
                className="flex-shrink-0 rounded-full w-[124px] h-[124px] object-cover object-center mb-[24px]"
                src={member.imageSrc}
              />
              <div className="w-full text-center">
                <h2 className="text-[18px] leading-[24px] font-[600] text-[#37446f]">
                  {member.name}
                </h2>
                <h5 className="text-[#37446f] text-[14px] leading-[24px]">
                  {member.role}
                </h5>
                <p className="text-[#8087a6] text-[14px] leading-[24px]">
                  {member.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
