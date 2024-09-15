import React from "react";
import CarPng from "../../assets/car1.png";
import Experience from "../Experience/Experience";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                At Car Inspection, our mission is to ensure your vehicle's safety and reliability through comprehensive inspections.
              </p>
              <p data-aos="fade-up">
                Our experienced team is dedicated to providing thorough assessments, whether for your annual check-up or post-repair evaluation. We take pride in delivering detailed and transparent reports that help you maintain confidence in your vehicle's condition. With a commitment to excellence, Car Inspection is your trusted partner in road safety.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Experience/>
    </div>
  );
};

export default About;
