import React from "react";
import Image from "next/image";
import program1 from "@/public/assets/images/programs_rebase_photo_720.png";
import program2 from "@/public/assets/images/programs_rebase_photo__1__720.png";
import program3 from "@/public/assets/images/programs_rebase_photo__2__720.png";
// import { GrNext, GrPrevious } from 'react-icons/gr';
import { playfair } from "@/public/fonts";

function OurPrograms() {
  const programs = [
    {
      image: program1,
      name: "FULL Stack Web Development",
      text: "Full stack development involves building both the front-end (user interface) and back-end (server-side logic) of a web application. This includes technologies such as HTML, CSS, JavaScript, databases, APIs, and server-side frameworks. A full stack developer has the skills to design, implement, and maintain an entire web application from the ground up.",
    },
    {
      image: program2,
      name: "Web Design Bootcamp.",
      text: "A web design bootcamp focuses on teaching the fundamentals of visual and user interface design for the web. Participants learn about responsive design, color theory, typography, layout, and user experience best practices. The curriculum covers HTML, CSS, and basic JavaScript to bring web design concepts to life. The aim is to equip students with the creativity and technical abilities to design high-quality, functional websites",
    },
    {
      image: program3,
      name: "WordPress Bootcamp",
      text: "A WordPress bootcamp is an intensive training program that teaches participants how to build websites using the WordPress content management system. Students learn how to install and configure WordPress, design custom themes, develop plugins, and manage WordPress-powered websites. The goal is to provide the skills needed to become a professional WordPress developer or website administrator.",
    },
  ];
  return (
    <div className="h-full-screen mt-5 bg-white pl-20 pr-20 mobile:max-md:mr-[-9rem] mobile:max-md:pl-5 mobile:max-md:pr-5">
      <h1
        className={`${playfair.className} pt-10 text-center text-6xl mobile:max-md:text-3xl`}
      >
        {" "}
        Our Programs
      </h1>
      <div className="text-1xl flex justify-center  pb-10 align-middle ">
        <p className="p-3 text-center font-sans text-lg mobile:max-md:text-lg">
          Discover the numerous programs that we have been running at Rebase
        </p>
      </div>
      <div className=" flex flex-col  gap-10 ">
        {programs.map((course, index) => (
          <div
            key={index}
            className=" flex max-w-full gap-20 mobile:max-md:flex-col mobile:max-md:gap-4"
          >
            <div className=" flex w-1/3 border-2 border-black  mobile:max-md:w-[100%] md:h-[100%]">
              <Image
                src={course.image}
                alt="program Image"
                className=" h-[180px] w-[100%] object-cover mobile:max-md:h-[295px]"
              />
            </div>
            <div className=" flex w-2/3 flex-col mobile:max-md:w-[100%] ">
              <h1 className=" pb-2 text-2xl font-normal">{course.name}</h1>
              <div className=" text-lg md:text-lg">
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
