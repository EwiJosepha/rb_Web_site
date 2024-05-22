import Link from "next/link";
import React from "react";
import Button from "../molecules/button";
import Image from "next/image";
import hero from '@/public/assets/images/Lumii_20231207_111535768.jpg'

const HeroSection: React.FC = () => {
    return (
        <div className="relative flex h-screen flex-col items-center mobile:max-md:h-full mobile:max-md:w-[100%]">
            <div className=" relative h-4/5  mobile:max-md:mr-[-14rem] mobile:max-md:pt-20">
                <div className="absolute inset-0 bg-black opacity-35"></div>
                <Image
                    src={hero}
                    alt="sectionimage"
                    className="h-full object-cover"
                />
            </div>

            <div className="absolute inset-0 top-40 px-6 text-white mobile:max-md:top-32  lg:mx-20">
                <h1
                    className={` mb-4 w-4/5 font-mono  text-5xl mobile:max-md:w-4/5  mobile:max-md:text-2xl md:text-3xl `}
                >
                    Revolutionizing education and skill
                </h1>
                <span
                    className={`  mb-4 w-3/5 font-mono  text-5xl mobile:max-md:w-2/5 mobile:max-md:text-2xl md:text-3xl `}
                >
                    development at Rebase Code Camp.
                </span>
                <h2 className="mt-12 w-1/2 font-sans text-2xl mobile:max-md:hidden md:hidden">
                    Welcome to Rebase Code Camp, where we empower learners to
                    excel in the real life and rapidly evolving tech job market.
                </h2>
            </div>

            <div className="mt-10 flex space-x-8 text-white  mobile:max-md:mr-[-11rem] mobile:max-md:px-5">
                <Link href="/apply-now">
                    <Button
                        className="cursor-pointer bg-orange-500 font-bold"
                        type="button"
                    >
                        Apply Now
                    </Button>
                </Link>
                <Link href="/dashboard">
                    <Button
                        className="cursor-pointer bg-purple font-bold"
                        type="button"
                    >
                        Learn More
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;