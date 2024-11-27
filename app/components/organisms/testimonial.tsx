"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";
import { playfair } from "@/public/fonts";
import { getStudentTestimony } from "@/app/lib/getTestimonial";
import { simpleStudentTestimonyblogCard } from "@/app/lib/interfaces";
import { imageConvertion } from "@/app/lib/sanity-clientt";

function Testimonials() {
  const [retrievedData, setRetrievedData] = useState<
    simpleStudentTestimonyblogCard[]
  >([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? retrievedData?.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === retrievedData?.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentTestimonials = [
    retrievedData[currentIndex],
    retrievedData[(currentIndex + 1) % retrievedData.length],
  ];
  useEffect(() => {
    const fetchData = async () => {
      const data = await getStudentTestimony();
      setRetrievedData(data);
    };
    fetchData();
  }, []);

  console.log("retrieved testimonial", retrievedData);
  

  return (
    <div className="flex  flex-col gap-6 px-3 md:mb-14 md:px-0 md:py-10 lg:mx-36">
      <h1
        className={`${playfair.className} text-center text-6xl mobile:max-md:text-3xl`}
      >
        Testimonials
      </h1>
      <h3 className="mobile:max-md:text-1xl  text-center font-sans text-sm text-gray-500 md:text-2xl">
        Hear what our students, former students and industry professionals have
        to say
      </h3>
      <div className="flex items-center justify-around">
        <button
          className=" left-7 -translate-y-1/2 transform rounded-full bg-orange-500 px-5 py-5 font-bold mobile:max-md:px-2 mobile:max-md:py-2"
          onClick={handlePrev}
        >
          <GrPrevious className=" previousbtn text-2xl text-white" />
        </button>

        <div className="lg:h-100% grid w-[75%] grid-cols-2 gap-10 overflow-hidden mobile:max-md:grid-cols-1">
          {currentTestimonials.map((testimony, index) => (
            <div
              className="card h-[310px] bg-gray-200 p-10 md:h-[300px] lg:h-[550px] xl:h-[100%]"
              key={index}
            >
              <div className="mb-4 flex">
                <FaStar className="text-xl" />
                <FaStar className="text-xl" />
                <FaStar className="text-xl" />
                <FaStar className="text-xl" />
                <FaStar className="text-xl" />
              </div>

              <div className="h-80 mobile:max-md:h-[98%]">
                <h2 className="mobile:max-md:font-xs font-sans text-xs  font-bold xl:text-2xl">
                  {testimony?.testimony.slice(0, 300)}
                </h2>
              </div>
              <div className="my-8 h-24 w-20">
                <Image
                  src={imageConvertion(testimony?.studImage)?.url() || ""}
                  width={100}
                  height={100}
                  alt="dp"
                  className="h-full w-full rounded-t-full border border-gray-200 object-cover mobile:max-md:invisible"
                />
              </div>
              <h2 className="visible text-lg font-semibold">
                {testimony?.name}
              </h2>
              <p className=" visible text-xs">{testimony?.description}</p>
            </div>
          ))}
        </div>

        <button
          className=" left-7 -translate-y-1/2 transform rounded-full bg-orange-500 px-5 py-5 font-bold mobile:max-md:px-2 mobile:max-md:py-2"
          onClick={handleNext}
        >
          <GrNext
            className="next-button
                    text-2xl text-white"
          />
        </button>
      </div>
    </div>
  );
}
export default Testimonials;
