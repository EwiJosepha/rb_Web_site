import Image from "next/image";
import React from "react";
import hero from "@/public/assets/images/PXL_20231031_121918648.PORTRAIT.jpg";
// import { playfair } from "@/public/fonts";

const OriginSec: React.FC = () => {
    return (
        <div className="mb-20 flex items-center justify-around lg:mx-20 mobile:max-md:mx-5 mobile:max-md:flex-col mobile:max-md:mr-[-9rem]">
            <div className=" h-[400px] w-[48%] mobile:max-md:w-[100%] mobile:max-md:mt-10 ">
                <Image
                    src={hero}
                    alt="sectionimage"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="ml-10 w-[48%] mobile:max-md:w-[100%] mobile:max-md:ml-1">
                <h1 className={`font-serif mb-4 text-6xl mobile:max-md:text-3xl mobile:max-md:pt-4`}>
                    Origin and Mission
                </h1>
                <p className="w-[80%] font-sans text-lg mobile:max-md:w-[100%]  ">
                    Rebase Code Camp was founded in response to the growing
                    demand for digital skills and the need to bridge the gap
                    between traditional education and industry requirements.
                    With a team of experienced instructors and industry
                    professionals, we are dedicated to empowering individuals to
                    thrive in the digital economy.
                </p>
            </div>
        </div>
    );
};
export default OriginSec;
