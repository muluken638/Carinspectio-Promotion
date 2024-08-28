import React from "react";
import { FaCar, FaCheckCircle } from "react-icons/fa";
import { GiChecklist } from "react-icons/gi";

const skillsData = [
  {
    name: "Thorough Inspections",
    icon: (
      <FaCar className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Ensure your vehicle's safety with our comprehensive inspection services. Our expert team provides detailed assessments to keep you confidently on the road.",
    aosDelay: "0",
  },
  {
    name: "Post-Repair Checks",
    icon: (
      <GiChecklist className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Get peace of mind after repairs with our meticulous post-repair inspections. We ensure that your vehicle is safe and roadworthy, giving you confidence in your drive.",
    aosDelay: "500",
  },
  {
    name: "Expert Technicians",
    icon: (
      <FaCheckCircle className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Our skilled technicians are dedicated to providing high-quality inspections and services. Trust us for reliable and professional vehicle assessments.",
    aosDelay: "1000",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
