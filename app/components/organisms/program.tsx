import React from "react";
import Image from "next/image";
import program1 from "@/public/assets/images/programs_rebase_photo_720.png";
import program2 from "@/public/assets/images/programs_rebase_photo__1__720.png";
import program3 from "@/public/assets/images/programs_rebase_photo__2__720.png";
// import { GrNext, GrPrevious } from 'react-icons/gr';
// import { playfair } from "@/public/fonts";

function OurPrograms() {
    const programs = [
        {
            image: program1,
            name: "FULL Stack Web Development",
            text: "Explain what you did in this role. This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand.Explain what you did in this role. This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand.",
        },
        {
            image: program2,
            name: "Web Design Bootcamp.",
            text: "Explain what you did in this role. This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand.Explain what you did in this role. This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand.",
        },
        {
            image: program3,
            name: "WordPress Bootcamp",
            text: "Explain what you did in this role. This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand.Explain what you did in this role. This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand.",
        },
    ];
    return (
        <div className="h-full-screen mt-5 bg-white pl-20 pr-20 mobile:max-md:mr-[-9rem] mobile:max-md:pl-5 mobile:max-md:pr-5">
            <h1
                className={` pt-10 text-center text-6xl mobile:max-md:text-3xl`}
            >
                {" "}
                Our Programs
            </h1>
            <div className="text-1xl flex justify-center  pb-10 align-middle ">
                <p className="p-3 text-center font-sans text-lg mobile:max-md:text-lg">
                    Discover the numerous programs that we have been running at
                    Rebase
                </p>
            </div>
            <div className=" flex flex-col  gap-10 ">
                {programs.map((course, index) => (
                    <div
                        key={index}
                        className=" flex max-w-full gap-20 mobile:max-md:flex-col mobile:max-md:gap-4"
                    >
                        <div className=" flex w-1/3 border-2 border-black mobile:max-md:h-[300px] mobile:max-md:w-[100%]">
                            <Image
                                src={course.image}
                                alt="program Image"
                                className=" h-[180px] w-[100%] object-cover mobile:max-md:h-[295px]"
                            />
                        </div>
                        <div className=" flex w-2/3 flex-col mobile:max-md:w-[100%] ">
                            <h1 className=" pb-2 text-2xl font-normal">
                                {course.name}
                            </h1>
                            <div className=" text-lg">
                                <p className=" font-sans text-gray-500 mobile:max-md:text-lg">
                                    {course.text}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurPrograms;
