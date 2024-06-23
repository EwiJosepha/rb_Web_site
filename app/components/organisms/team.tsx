"use client"
import React, { useState } from "react";
import Image from "next/image";
import popImage from "@/public/assets/images/photo_placement_720.png";
import { GrNext, GrPrevious } from "react-icons/gr";

function Team() {
    const [currentTeam, setCurrentTeam ]= useState(0)
    const handlePrev = () =>{
        setCurrentTeam((prevTeam)=> prevTeam === 0? teamProfile.length - 0: prevTeam - 1)
    }
    const handleNext = () => {
        setCurrentTeam((nextTeam)=> teamProfile.length - 1? 0 : nextTeam + 1)
    }
     
    const teamProfile = [
        {
            name: "Mr Ngoran Aristide",
            image: popImage,
            post: "web Developer, abc company.",
            duty: "she is the Chief support staff. she oversees the smooth running of all operations, projects and programs at Rebase Academy.",
        },
        {
            name: "Miss Kimie Salah",
            image: popImage,
            post: "web Developer, abc company.",
            duty: "He is the Chief support staff. she oversees the smooth running of all operations, projects and programs at Rebase Academy.",
        },
    ];
    return (
        <>
            <div className="mobile:max-md:pl-15 pl-20 pr-20 pt-10 mobile:max-md:mr-[-6rem]  mobile:max-md:pr-5">
                <h1
                    className={` mb-3 text-center text-6xl mobile:max-md:text-3xl `}
                >
                    Meet The Team
                </h1>
                <h3 className="mx-auto mb-10 w-[70%] text-center font-sans text-base mobile:max-md:w-[98%]">
                    Get to know our team of dedicated staff, experienced
                    instructors and industry professionals who have shared in
                    our goals and vision
                </h3>
                <div className="flex items-center  justify-around mobile:max-md:overflow-hidden">
                    <div className=" mobile:max-md:ml-[-50px]">
                        <button className=" left-7 flex -translate-y-1/2 transform items-center justify-center rounded-full bg-orange-500 px-5 py-5 font-bold mobile:max-md:px-1 mobile:max-md:py-1">
                            <GrPrevious className="text-2xl text-white" onClick={handlePrev}/>
                        </button>
                    </div>

                    {teamProfile.map((person, index) => (
                        <div
                            key={index}
                            className="mobile:max-md:w-38 w-64 border-4 border-orange-500  bg-gray-200 mobile:max-md:ml-[-16px]"
                        >
                            <div className="mb-1 h-44 w-full mobile:max-md:h-24">
                                <Image
                                    src={person.image}
                                    alt="dp"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-3 text-center">
                                <h2 className="mb-1 font-sans text-lg font-semibold">
                                    {person.name}
                                </h2>
                                <i className=" font-sans text-xs font-medium">
                                    {person.post}
                                </i>
                                <p className="w-full font-sans text-xs">
                                    {person.duty}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className=" mobile:max-md:ml-[50px]">
                        <button className=" left-7 -translate-y-1/2 transform rounded-full bg-orange-500 px-5 py-5 font-bold mobile:max-md:px-1 mobile:max-md:py-1 ">
                            <GrNext className="text-2xl text-white"  onClick={handleNext}/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;
