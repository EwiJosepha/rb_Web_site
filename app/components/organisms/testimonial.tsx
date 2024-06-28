"use client"
import Image from "next/image";
import React, { useState } from "react";
import dp from "@/public/assets/images/photo_placement_720.png";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";
import { playfair } from "@/public/fonts";

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testifier = [
    {
      id: 1,
      image: dp,
      title: "How to manage SEO as a client",
      date: "June 24th, 2024",
      owner: "Nora k.",
      text: "Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job market",
    },
    {
      id: 2,
      image: dp,
      title: "How to manage SEO as a client",
      date: "June 24th, 2024",
      owner: "Orashus l.",
      text: "Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job markett",
    },
    {
      id: 3,
      image: dp,
      title: "How to manage SEO as a client",
      date: "June 24th, 2024",
      owner: "Gmarvis N.",
      text: "Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job markett",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testifier.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testifier.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonials = [
    testifier[currentIndex],
    testifier[(currentIndex + 1) % testifier.length],
  ];

  return (
    <div className="mb-14 mobile:max-md:mx-5 mobile:max-md:mr-[-9rem] lg:mx-20">
      <h1
        className={`${playfair.className} mb-6 text-center text-6xl mobile:max-md:text-3xl`}
      >
        Testimonials
      </h1>
      <h3 className="mb-10 text-center font-sans text-xl">
        Hear what our students, former students and industry professionals have
        to say
      </h3>
      <div className="flex items-center justify-around">
        <button className=" left-7 -translate-y-1/2 transform rounded-full bg-orange-500 px-5 py-5 font-bold mobile:max-md:px-2 mobile:max-md:py-2" onClick={handlePrev}>
          <GrPrevious className=" previousbtn text-2xl text-white" />
        </button>

        <div className="grid w-[75%] grid-cols-2 gap-10 overflow-hidden lg:h-[600px]">
          {currentTestimonials.map((testimony, index) => (
            <div
              className="card bg-gray-200 p-10 lg:h-[580px] xl:h-[500px]"
              key={index}
              style={{}}
            >
              <div className="mb-4 flex">
                <FaStar className="text-xl" />
                <FaStar className="text-xl" />
                <FaStar className="text-xl" />
                <FaStar className="text-xl" />
                <FaStar className="text-xl" />
              </div>

              <h2 className="font-sans text-lg font-bold mobile:max-md:hidden xl:text-2xl">
                {testimony.text}
              </h2>
              <div className="my-8 h-24 w-20">
                <Image
                  src={dp}
                  alt="dp"
                  className="h-full w-full rounded-t-full border border-gray-200 object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold">{testimony.owner}</h2>
              <p className=" mobile:max-md:hidden">
                Software Engineer, xyz company.
              </p>
            </div>
          ))}
        </div>

        <button className=" left-7 -translate-y-1/2 transform rounded-full bg-orange-500 px-5 py-5 font-bold mobile:max-md:px-2 mobile:max-md:py-2" onClick={handleNext}>
          <GrNext
            className="next-button
                    text-2xl text-white"
          />
        </button>
      </div>
    </div>
  );
};
export default Testimonials;
