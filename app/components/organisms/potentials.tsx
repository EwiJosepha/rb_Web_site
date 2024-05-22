import Image from "next/image";
import React from "react";
import keyboard from "@/public/assets/images/blog_rebase_photo__1__720.png";
import Button from "../molecules/button";
import Link from "next/link";

const Potentialsection: React.FC = () => {

    return (
        <div className="relative mobile:max-md:mr-[-9rem] mobile:max-md:mx-5">
            <Image
                src={keyboard}
                alt="sectionimage"
                className="h-96 w-full object-cover"
            />

            <div className="absolute inset-0 bg-purple opacity-60 "></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white mobile:max-md:pl-4">
                <h2 className="mb-6 text-4xl font-bold">
                    Unlock Your Potential with Rebase Code Camp
                </h2>
                <h3 className="mb-14">
                    Join our innovative programs and gain the skills to thrive
                    in the digital age.
                </h3>

                <div className="space-x-8">
                    <Link href="/dashboard" className="bg-orange-500 py-3.5">
                        <Button className="font-bold" type="button">
                            Apply Now
                        </Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button
                            className="border-2 border-white bg-transparent font-bold"
                            type="button"
                        >
                            Learn More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Potentialsection;
