import Image from "next/image";
import React from "react";
import hero from "@/public/assets/images/PXL_20231031_121918648.PORTRAIT.jpg";
import { playfair } from "@/public/fonts";

const OriginSec: React.FC = () => {
    //     id: 3,
    //     image: bata,
    //     title: "How to manage SEO as a client",
    //     date: "June 24th, 2024",
    //     student: "Humphrey Bata",
    //     text: "Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job markett",
    // },

    return (
        <div className="mb-20 flex items-center justify-around mobile:max-md:mx-5 mobile:max-md:mr-[-12rem] mobile:max-md:flex-col lg:mx-20">
            <div className=" h-[400px] w-[48%] mobile:max-md:mt-10 mobile:max-md:w-[100%] ">
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
                <p className="w-[90%] font-sans text-lg mobile:max-md:w-[100%] xl:text-2xl ">
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
