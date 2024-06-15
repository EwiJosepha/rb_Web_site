import Link from "next/link";
import React from "react";
import Image from "next/image";
import hero from "@/public/assets/images/Lumii_20231207_111535768.jpg";
// import { playfair } from "@/public/fonts";

const HeroSection: React.FC = () => {
  return (
    <div className="relative mb-20 flex h-screen flex-col w-full items-center mobile:max-md:h-full mobile:max-md:w-[100%]">
      <div className=" relative h-4/5  mobile:max-md:mr-[-14rem] mobile:max-md:pt-20 xl:h-4/5">
        <div className="absolute inset-0 bg-black opacity-35 "></div>
        <Image src={hero} alt="sectionimage" className="h-full object-cover " />
      </div>

      <div className="absolute inset-0 top-40 px-6 text-white mobile:max-md:top-32  lg:mx-10 xl:top-32">
        <h1
          className={`font-serif font-semi-bold lg: w-5/5   mb-4  mobile:max-md:w-4/5  mobile:max-md:text-2xl ipad:text-3xl md:text-3xl lg:text-4xl  xl:text-6xl xl:font-extrabold`}
        >
          Revolutionizing education and skill
        </h1>
        <span
          className={`  font-semi-bold  mb-4 w-3/5   font-serif text-7xl mobile:max-md:w-2/5 mobile:max-md:text-2xl ipad:text-4xl md:text-3xl lg:text-4xl  xl:text-7xl`}
        >
          development at Rebase Code Camp.
        </span>
        <h2
          className="text-1xl font-semi-bold lg:text-1xl mt-10 w-[75%]
                 font-sans mobile:max-md:invisible ipad:visible ipad:text-lg xl:pt-20 xl:text-3xl
                 "
        >
          Welcome to Rebase Code Camp, where we empower learners to excel in the
          real life and rapidly evolving tech job market.
        </h2>
      </div>

      <div className=" flex space-x-8 text-white mobile:max-md:mr-[-11rem]  mobile:max-md:px-5 xl:mt-20">
        <Link href="/apply-now">
          <button className="bg-orange-500 p-4 font-bold hover:cursor-pointer">
            Apply Now
          </button>
        </Link>
        <Link href="/about-us">
          <button className="bg-purple p-4 font-bold hover:cursor-pointer">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
