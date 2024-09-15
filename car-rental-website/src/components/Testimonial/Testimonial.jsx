import React from "react";
import CarPng from '../../assets/car1.png';

const testimonialData = [
  {
    name: "Muluken Zeleke",
    image: CarPng,

    description: "Exceptional service! The team at Car Inspection provided a thorough and detailed report that gave me complete peace of mind. Highly recommend their expertise!",
    aosDelay: "0",
  },
  {
    name: "Alemu Solomon",
    image: "",
    description: "I had my car inspected after an accident, and the technicians were incredibly professional and knowledgeable. They ensured everything was repaired to perfection. Great experience!",
    aosDelay: "300",
  },
  {
    name: "Azimeraw Aschale",
    image: "",
    description: "The annual inspection was quick and efficient. The staff explained everything clearly, and I left feeling confident that my car is in top shape. Fantastic service!",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Our Service
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">

              At Car Inspection, customer satisfaction is our top priority. Here's what our clients have to say about their experience with our thorough and reliable vehicle inspection services:
            </p>
          </div>

          <div
          
           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src={skill.image}
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
