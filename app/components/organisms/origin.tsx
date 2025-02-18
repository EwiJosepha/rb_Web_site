import Image from "next/image";
import React from "react";
import hero from "@/public/assets/images/PXL_20231031_121918648.PORTRAIT.jpg";
import { playfair } from "@/public/fonts";

const OriginSec: React.FC = () => {
  return (
    <div className=" flex items-center justify-around pb-10 mobile:max-md:mx-5 mobile:max-md:flex-col  mobile:max-md:pt-20 md:px-5 md:pb-20 lg:mx-20">
      <div className=" h-[400px] w-[48%] mobile:max-md:h-[280px] mobile:max-md:w-[98%] ">
        <Image
          src={hero}
          alt="sectionimage"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="ml-10 w-[48%] mobile:max-md:ml-1 mobile:max-md:w-[100%]">
        <h1
          className={`${playfair.className} mb-4 text-4xl mobile:max-md:pt-4 mobile:max-md:text-3xl`}
        >
          Origin and Mission
        </h1>
        <p className="mobile:max-md:text-1xl text-text-sm w-[100%] font-sans text-gray-500 mobile:max-md:w-[100%] md:text-2xl">
          Rebase Code Camp was founded in response to the growing demand for
          digital skills and the need to bridge the gap between traditional
          education and industry requirements. With a team of experienced
          instructors and industry professionals, we are dedicated to empowering
          individuals to thrive in the digital economy.
        </p>
      </div>
    </div>
  );
};
export default OriginSec;
