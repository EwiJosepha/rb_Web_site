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
      <div className="flex items-center justify-center gap-10 mobile:max-md:gap-2">
        {retrievedData.slice(0, 3).map((student, key) => (
          <div
            className=" w-[50%] bg-orange-50 text-center mobile:max-md:w-[80%] md:h-[480px] md:p-8"
            key={key}
          >
            <div className="mobile:max-md:h-[10%] mobile:max-md:w-[80%] mobile:max-md:pl-8">
              <Image
                src={imageConvertion(student?.studImage)?.url() || ""}
                alt="dp"
                width={100}
                height={100}
                className="mobile: mobile: mx-auto h-[250px] w-[250px] rounded-full border object-cover max-md:h-[50%] max-md:w-[50%]"
              />
            </div>
            <h2 className="mobile: mb-2 text-lg font-semibold max-md:text-xs mobile:max-md:pt-5 xl:text-2xl">
              {student?.name}
            </h2>
            <p className=" mobile:max-md:text-1xl font-sans text-gray-500  mobile:max-md:hidden xl:text-2xl">
              {student?.descriptions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturedStudent;
