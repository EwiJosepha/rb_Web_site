"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { simpleFeatureStudentblogCard } from "@/app/lib/interfaces";
import { getFeatureStudent } from "@/app/lib/getstudents";
import { imageConvertion } from "@/app/lib/sanity-clientt";
import { playfair } from "@/public/fonts";

const FeaturedStudent: React.FC = () => {
  const [retrievedData, setRetrievedData] = useState<
  simpleFeatureStudentblogCard[]
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getFeatureStudent();
      
      setRetrievedData(data);
    };
    fetchData();
  }, []);
  return (
    <div className=" my-5 mobile:max-md:mx-5 md:my-20 lg:mx-20">
      <h1
        className={`${playfair.className} mb-6 text-center text-6xl mobile:max-md:text-3xl`}
      >
        Featured Students
      </h1>
      <h3 className="mobile:max-md:text-1xl mb-14 text-center font-sans text-xs text-gray-500 md:text-2xl">
        Here are our Top Three (3) Students Of The Month!
      </h3>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10 mobile:max-md:gap-2">
        {retrievedData.slice(0, 3).map((student, key) => (
          <div
            className=" bg-orange-50 p-4 h-auto md:p-8"
            key={key}
          >
            <div className="">
              <img
                src={imageConvertion(student?.studImage)?.url() || ""}
                alt="dp"
                className=" mx-auto xl:h-[250px] xl:w-[250px] h-[150px]  w-[150px] rounded-full border object-cover"
              />
            </div>
            <h2 className="md:my-6 my-2 text-center  text-lg font-semibold max-md:text-xs  xl:text-2xl">
              {student?.name}
            </h2>
            <p className="mobile:max-md:text-1xl font-sans text-gray-500  xl:text-2xl">
              {student?.descriptions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturedStudent;
