import Link from "next/link";
import React from "react";
import Button from "../molecules/button";
import Image from "next/image";
import hero from '@/public/assets/images/Lumii_20231207_111535768.jpg'

const HeroSection: React.FC = () => {
    return (
        <div className="relative h-screen flex flex-col items-center">
            <div className="w-full h-4/5">
                <Image
                    src={hero}
                    alt="sectionimage"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute inset-0 top-64 text-white px-6 lg:mx-20">
                <h1 className="text-5xl font-mono mb-8 w-3/5">Revolutionizing education and skill</h1>
                <span className="text-5xl font-mono w-3/5">development at Rebase Code Camp.</span>
                <h2 className="text-2xl mt-12 w-1/2">Welcome to Rebase Code Camp, where we empower learners to excel in the real life and rapidly evolving tech job market.</h2>
            </div>

            <div className="space-x-8 text-white mt-10 flex">
                <Link href="/dashboard">
                    <Button className='font-bold bg-orange-500' type='button'>Apply Now</Button>
                </Link>
                <Link href="/dashboard">
                    <Button className='font-bold bg-purple' type='button'>Learn More</Button>
                </Link>
            </div>
        </div>
    )
};

export default HeroSection;