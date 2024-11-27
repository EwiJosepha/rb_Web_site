"use client";
import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { playfair } from "@/public/fonts";
import { simpleTeamsBlogCard } from "@/app/lib/interfaces";
import { getTeams } from "@/app/lib/getteams";
import { imageConvertion } from "@/app/lib/sanity-clientt";

function Team() {
  const [retrievedData, setRetrievedData] = useState<simpleTeamsBlogCard[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeams();
      setRetrievedData(data);
    };
    fetchData();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? retrievedData?.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === retrievedData?.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentTeam = [
    retrievedData[currentIndex],
    retrievedData[(currentIndex + 1) % retrievedData.length],
  ];

  console.log("teams",retrievedData);
  
  return (
    <>
      <div className=" md:px-20">
        <h1
          className={`${playfair.className} mb-3 text-center text-6xl mobile:max-md:text-3xl`}
        >
          Meet The Team
        </h1>
        <h3 className="mb-10 w-full text-justify font-sans text-base text-gray-600 mobile:max-md:w-[98%] md:mx-auto md:w-[50%] md:items-center md:text-center">
          Get to know our team of dedicated staff, experienced instructors and
          industry professionals who have shared in our goals and vision
        </h3>
        <div className="flex items-center gap-2 md:justify-center  md:gap-20">
          <button
            className=" left-7 -translate-y-1/2 transform rounded-full bg-orange-500 px-5 py-5 font-bold mobile:max-md:px-2 mobile:max-md:py-2"
            onClick={handlePrev}
          >
            <GrPrevious className=" previousbtn text-2xl text-white" />
          </button>

          <div className="lg:h-100% grid w-[100%] grid-cols-1 gap-6 overflow-hidden md:w-[50%] md:grid-cols-2  md:gap-8 lg:gap-20 ">
            {currentTeam.map((person, index) => (
              <div
                key={index}
                className="border-4 border-orange-500 bg-gray-200 md:mx-auto md:w-[100%]"
              >
                <div className="mb-1 h-64 w-full  md:h-72">
                  <img
                    src={imageConvertion(person?.teamsImage)?.url() || ""}
                    alt="Avatar"
                    className="h-full w-[100%] object-cover"
                  />
                </div>
                <div className="h-64 p-3 text-center mobile:max-md:h-[100%]">
                  <h2 className="mb-1 pt-6 font-sans text-lg font-semibold">
                    {person?.name}
                  </h2>
                  <i className=" font-sans text-xs font-medium">
                    {person?.position}
                  </i>
                  <p className="text-1xl w-full font-sans">
                    {person?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            className=" left-7 -translate-y-1/2 transform rounded-full bg-orange-500 px-5 py-5 font-bold mobile:max-md:px-2 mobile:max-md:py-2"
            onClick={handleNext}
          >
            <GrNext
              className="next-button
                    text-2xl text-white"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Team;
