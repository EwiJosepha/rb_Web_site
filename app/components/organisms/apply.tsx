import Image from "next/image";
import apply from "@/public/assets/images/applynow-1653368202-170667a.webp";
import React from "react";
import Button from "../molecules/button";
import Link from "next/link";
// import { playfair } from "@/public/fonts";
// import Button from "./Button";

const ApplyNow: React.FC = () => {
    
    return (
        <div className="relative h-screen mx-20 bg-white">
            <div className="h-4/6  w-full">
                <Image
                    src={apply}
                    alt="sectionimage"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="absolute inset-0 top-64 px-6 text-white lg:mx-20">
                <h1 className={` w-3/5 font-mono text-6xl mobile:max-md:text-3xl`}>Apply Now</h1>
                <h2 className="mt-10 w-1/2 text-2xl font-sans mobile:max-md:w-[100%]">
                    Join us for an opportunity 
                </h2>
            </div>

            <div className=" bg-white">
                <form className=" mobile:max-md: mx-auto my-20 flex flex-col space-y-3 mobile:max-md:mx-5 mobile:max-md:my-5 mobile:max-md:space-y-0 bg-white">

                    <label className="text-xl font-semibold mobile:max-md">
                        Full Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                        className=" bg-gray-200 py-4"
                        type="text"
                        name="fullName"
                    />
                    
                    <div className="flex justify-between py-8 mobile:max-md:flex-col bg-white">
                        
                        <div className="flex w-[45%] flex-col space-y-5 mobile:max-md:w-[100%]">
                         
                            <label className="text-xl font-semibold">
                                Phone Number{" "}
                                <span className="text-orange-500">*</span>
                            </label>
                            <input
                                className=" mb-6 bg-gray-200  py-4"
                                type="tel"
                                name="number"
                            />
                         

                            <p className="font-sans text-xl font-semibold">
                                Gender{" "}
                                <span className="text-orange-500">*</span>
                            </p>
                            <div className="mt-6 flex flex-col space-y-3 bg-gray-200 p-4 text-lg ">
                                <label className=" font-sans">
                                    <input
                                        className=" bg-gray-200 py-4"
                                        type="radio"
                                        name="gender"
                                    />{" "}
                                    Male
                                </label>
                                <label className=" font-sans">
                                    <input
                                        className=" bg-gray-200 py-4"
                                        type="radio"
                                        name="gender"
                                    />{" "}
                                    Female
                                </label>
                                {/* <label className=" font-sans">
                  <input className=" bg-gray-200 py-4" type="radio" name="gender" /> Other
                </label> */}
                            </div>
                            <label className="text-xl font-semibold">
                                Highest Academic Qualification{" "}
                                <span className="text-orange-500">*</span>
                            </label>
                            <input
                                className=" bg-gray-200 py-4"
                                type="text"
                                name="schoolQualification"
                            />

                            <p className="text-xl font-semibold">
                                Program of Interest{" "}
                                <span className="text-orange-500">*</span>
                            </p>
                            <div className="mt-6 flex flex-col space-y-3 bg-gray-200 p-4 text-lg">
                                <label className=" font-sans">
                                    <input
                                        className=" bg-gray-200 py-4"
                                        type="radio"
                                        name="programOfInterest"
                                        value="Web Development"
                                    />{" "}
                                    Full Stack Web Development
                                </label>
                                <label className=" font-sans">
                                    <input
                                        className=" bg-gray-200 py-4"
                                        type="radio"
                                        name="programOfInterest"
                                        value="Data Science"
                                    />{" "}
                                    UI/UX Design
                                </label>
                                <label className=" font-sans">
                                    <input
                                        className=" bg-gray-200 py-4"
                                        type="radio"
                                        name="programOfInterest"
                                        value="UI/UX Design"
                                    />{" "}
                                    Other
                                </label>
                            </div>
                        </div>

                        
                        <div className="flex w-[45%] flex-col space-y-5 mobile:max-md:w-[100%] mobile:max-md:pt-10">
                            <label className="text-xl font-semibold">
                                Email <span className="text-orange-500">*</span>
                            </label>
                            <input
                                className=" bg-gray-200 py-4"
                                type="email"
                                name="email"
                            />

                            <label className="text-xl font-semibold">
                                Age <span className="text-orange-500">*</span>
                            </label>
                            <input
                                className=" bg-gray-200 py-4 pl-5"
                                type="number"
                                name="age"
                            />

                            <label className="pt-14 text-xl font-semibold">
                                Place of Residence{" "}
                                <span className="text-orange-500">*</span>
                            </label>
                            <input
                                className=" bg-gray-200 py-4"
                                type="text"
                                name="residence"
                            />

                            <label className="pt-4 text-xl font-semibold">
                                If Other, specify
                            </label>
                            <input
                                className=" bg-gray-200 py-4 pl-5"
                                type="text"
                                name="other"
                            />
                        </div>
                    </div>

                    <label className="text-xl font-semibold">
                        What do you intend to gain from Rebase Code Camp?{" "}
                        <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                        name="intentionsBefore"
                        className=" bg-gray-200 py-10 pl-5"
                    />

                    <label className="pt-4 text-xl font-semibold">
                        What do you intend to do after your time at Rebase Code
                        Camp?
                    </label>
                    <textarea
                        name="intentionsAfter"
                        className=" bg-gray-200 py-10 pl-5"
                    />

                    <label className="pt-4 text-xl font-semibold">
                        Full Name of Guardian{" "}
                        <span className="text-orange-500">*</span>
                    </label>
                    <input
                        className=" bg-gray-200 py-4 pl-5"
                        type="text"
                        name="guardianName"
                    />

                    {/* all div  */}
                    <div className="flex justify-between py-8 bg-white">
                        {/* div 3  */}
                        <div className="flex w-[45%] flex-col space-y-5">
                            <p className="text-xl font-semibold">
                                Relationship wit Guardian{" "}
                                <span className="text-orange-500">*</span>
                            </p>
                            <div className="mt-6 flex flex-col space-y-3 bg-gray-200 p-4 text-lg">
                                <label className=" font-sans">
                                    <input
                                        className=" bg-gray-200 py-4 pl-5"
                                        type="radio"
                                        name="gender"
                                    />{" "}
                                    Mother
                                </label>
                                <label className=" font-sans">
                                    <input
                                        className=" bg-gray-200 py-4"
                                        type="radio"
                                        name="gender"
                                    />{" "}
                                    Father
                                </label>
                                <label className=" font-sans">
                                    <input
                                        className=" bg-gray-200 py-4 pl-5"
                                        type="radio"
                                        name="gender"
                                    />{" "}
                                    Other
                                </label>
                            </div>

                            <label className="text-xl font-semibold">
                                Guardian&apos;s Phone Number{" "}
                                <span className="text-orange-500">*</span>
                            </label>
                            <input
                                className=" bg-gray-200 py-4 pl-5"
                                type="tel"
                                name="guardianNumber"
                            />
                        </div>
                        {/* div 4  */}
                        <div className="flex w-[45%] flex-col space-y-5">
                            <label className="text-xl font-semibold">
                                If Other, specify{" "}
                                <span className="text-orange-500">*</span>
                            </label>
                            <input
                                className=" bg-gray-200 py-4 pl-4"
                                type="text"
                                name="other"
                            />

                            <label className="pt-20 text-xl font-semibold">
                                Email of Guardian{" "}
                                <span className="text-orange-500">*</span>
                            </label>
                            <input
                                className=" bg-gray-200 py-4 pl-5"
                                type="email"
                                name="guardianEmail"
                            />
                        </div>
                    </div>
                    <div className=" pb-10 items-center justify-center  text-center">
                    <Link
                        href="/"
                        className=""
                    >
                        <Button
                            className="bg-purple font-mono text-white"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyNow;



