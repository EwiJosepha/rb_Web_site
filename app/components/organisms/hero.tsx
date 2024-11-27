import Link from "next/link";
import React from "react";
import Image from "next/image";
import hero from "@/public/assets/images/Lumii_20231207_111535768.jpg";
import { playfair } from "@/public/fonts";

const HeroSection: React.FC = () => {
  return (
    <div className=" mt-20 flex h-[800px] w-full flex-col items-center justify-center  mobile:max-md:h-full md:mt-0 md:pt-0 lg:pt-0 ">
      <div className=" relative h-3/5  w-full  md:h-4/5">
        <Image
          src={hero}
          alt="sectionimage"
          className=" h-full object-cover object-center "
        />
        <div className="absolute inset-0 bg-black opacity-35"></div>
        <div className="absolute inset-0 flex    h-full   w-full  flex-col justify-center gap-3 px-3 text-white md:gap-14 md:px-24">
          <div className="flex flex-col gap-3 md:gap-10">
            <h1
              className={` ${playfair.className} font-semi-bold mobile:max-md:w-4/5    mobile:max-md:text-lg ipad:text-3xl md:text-3xl lg:w-3/5  lg:text-3xl xl:text-5xl`}
            >
              Revolutionizing education and skill{" "}
              <span
                className={` ${playfair.className} font-semi-bold w-full  font-serif   mobile:max-md:w-2/5   mobile:max-md:text-lg ipad:text-4xl md:w-3/5 md:text-3xl  lg:text-4xl  xl:text-5xl`}
              >
                development at Rebase Code Camp.
              </span>
            </h1>

            <h2
              className="font-semi-bold  lg:text-1xl w-[40%] font-sans
                 text-xs  mobile:max-md:w-[100%] ipad:visible  ipad:text-lg
                 xl:text-2xl"
            >
              Welcome to Rebase Code Camp, where we empower learners to excel in
              the real life and rapidly evolving tech job market.
            </h2>
          </div>
          <div className=" flex items-center space-x-3 text-white md:space-x-8">
            <Link href="/about-us">
              <button className="translate-x-0 border-2 border-white bg-transparent px-8 py-3  text-white  transition-transform duration-500 hover:translate-x-2 hover:cursor-pointer mobile:max-md:px-2 mobile:max-md:py-1 mobile:max-md:text-xs">
                Learn More
              </button>
            </Link>
            <Link href="/apply-now">
              <button className="translate-x-0 border-2 border-orange-500 bg-orange-500    px-10 py-4 text-white transition-transform duration-500 hover:translate-x-2 hover:cursor-pointer mobile:max-md:px-2 mobile:max-md:py-1 mobile:max-md:text-xs">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
