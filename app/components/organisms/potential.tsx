import Image from "next/image";
import React from "react";
import keyboard from "@/public/assets/images/blog_rebase_photo__1__720.png";
import Link from "next/link";

const Potentialsection: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="relative">
        <Image
          src={keyboard}
          alt="sectionimage"
          className="h-400px w-full object-cover md:h-[600px]"
        />

        <div className="absolute inset-0 bg-purple opacity-60 "></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-3 text-white">
          <h2 className="text:2xl mb-6 font-bold mobile:max-md:w-[95%] md:text-4xl">
            Unlock Your Potential with Rebase Code Camp
          </h2>
          <h3 className="mb-14 mobile:max-md:w-[93%]">
            Join our innovative programs and gain the skills to thrive in the
            digital age.
          </h3>

          <div className="space-x-8">
            <Link href="/about-us">
              <button className="translate-x-0 cursor-pointer border-2 border-white px-8 py-3 font-bold text-white  transition-transform duration-500 hover:translate-x-2 hover:cursor-pointer mobile:max-md:px-2 mobile:max-md:py-1 mobile:max-md:text-xs">
                Learn More
              </button>
            </Link>
            <Link
              href="/dashboard"
              className="translate-x-0  border-2 border-orange-500 bg-orange-500 px-10 py-4  font-bold  text-white transition-transform duration-500 hover:translate-x-2 hover:cursor-pointer mobile:max-md:px-2 mobile:max-md:py-1"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Potentialsection;
