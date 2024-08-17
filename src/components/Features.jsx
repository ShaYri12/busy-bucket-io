import React from "react";

const featureData = [
  {
    name: "Time Tracking",
    description:
      "Track your employees' time using a mobile or desktop app that includes photo attachments, comments and reporting.",
    imageSrc: "/assets/icons/watch.svg",
    about: "Released",
  },
  {
    name: "Job Scheduling",
    description:
      "Schedule jobs, assign them to team members, and track the job progress.",
    imageSrc: "/assets/icons/list.svg",
    about: "In Development",
  },
  {
    name: "Quotes and Invoices",
    description:
      "Create quotes and invoices, communicate with customers, and manage payments.",
    imageSrc: "/assets/icons/clipboard.svg",
    about: "In Development",
  },
  {
    name: "Inventory Management",
    description:
      "Keep track of your inventory in real-time, track quantities, assign items to employees, integrate with e-commerce platforms, and use barcode printers and scanners to make it robust.",
    imageSrc: "/assets/icons/box.svg",
    about: "In Development",
  },
  {
    name: "Sales",
    description:
      "Track and manage your leads and opportunities with features like customizable pipelines, alerts, communication templates and various integrations to close deals faster.",
    imageSrc: "/assets/icons/bar-chart.svg",
    about: "Future Feature",
  },
  {
    name: "Marketing",
    description:
      "Spin up a website in a single click, select a template and use various plugins to make a modern mobile-friendly website.",
    imageSrc: "/assets/icons/pie-chart.svg",
    about: "Future Feature",
  },
  {
    name: "Accounting",
    description:
      "Manage financial records and processes with features like invoicing, expense tracking, and accounts payable and receivable.",
    imageSrc: "/assets/icons/book.svg",
    about: "Future Feature",
  },
  {
    name: "HR",
    description:
      "Streamline HR processes with features like employee onboarding, benefits enrollment, training management, recruiting and performance evaluations.",
    imageSrc: "/assets/icons/user.svg",
    about: "Future Feature",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="max-w-[1200px] py-[60px] mx-auto px-[15px]"
    >
      <div className="flex flex-col text-center w-full">
        <h1 className="text-2xl font-medium title-font mb-[30px] text-gray-900 tracking-widest">
          Features
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px]">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="h-full flex md:flex-row flex-col md:items-start justify-center text-center sm:text-left gap-[20px]"
          >
            <span className="p-[14px] h-fit w-fit bg-[#eff0ff] rounded-[10px]">
              <img
                alt={feature.name}
                className="flex-shrink-0 rounded-lg min-w-[42px] min-h-[42px] w-[42px] h-[42px] object-cover object-center"
                src={feature.imageSrc}
              />
            </span>
            <div className="flex-grow lg:me-auto lg:max-w-[240px] text-left">
              <h2 className="text-[24px] font-[700] text-text-primary leading-[32px] mb-[10px]">
                {feature.name}
              </h2>
              <p className="text-text-secondary text-[16px] leading-[26px]">
                {feature.description}
              </p>
              <span
                className={`inline-flex text-[16px] leading-[24px] text-text-primary ${
                  feature.about === "Released" && "text-[#30c762]"
                }`}
              >
                {feature.about}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
