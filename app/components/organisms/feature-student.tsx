import React from "react";
import bata from "@/public/assets/images/WhatsApp Image 2024-05-20 at 14.21.59_53835e41.jpg";
import dorine from "@/public/assets/images/WhatsApp Image 2024-05-20 at 14.22.00_517e2a3d.jpg";
import josepha from "@/public/assets/images/WhatsApp Image 2024-05-20 at 14.22.00_cc5dca0e.jpg";
import Image from "next/image";

const FeaturedStudent: React.FC = () => {
    const potentialStudents = [
        {
            id: 1,
            image: josepha,
            title: "How to manage SEO as a client",
            date: "June 24th, 2024",
            student: "Josepha Mbong",
            text: "Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job market",
        },
        {
            id: 2,
            image: dorine,
            title: "How to manage SEO as a client",
            date: "June 24th, 2024",
            student: "Dorine Ngapdoh",
            text: "Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job markett",
        },
        {
            id: 3,
            image: bata,
            title: "How to manage SEO as a client",
            date: "June 24th, 2024",
            student: "Humphrey Bata",
            text: "Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job markett",
        },
    ];
    return (
        <div className="my-20 mobile:max-md:mx-5 mobile:max-md:mr-[-12rem] lg:mx-20">
            <h1 className="mb-4 text-center font-sans text-6xl mobile:max-md:text-3xl">
                Featured Students
            </h1>
            <h3 className="mb-14 text-center text-xl">
                Here are our Top Three (3) Students Of The Month!
            </h3>
            <div className="flex items-center justify-center gap-10">
                {potentialStudents.slice(0, 3).map((student, key) => (
                    <div
                        className=" w-[50%] bg-orange-50 p-4 text-center mobile:max-md:w-[80%] md:h-[480px] xl:h-[480px]  specificScreen:h-[580px]"
                        key={key}
                    >
                        <div className="mobile:max-md:h-[10%] mobile:max-md:w-[80%] mobile:max-md:pl-8">
                            <Image
                                src={student.image}
                                alt="dp"
                                className="mobile: mobile: mx-auto h-[250px] w-[250px] rounded-full border object-cover max-md:h-[50%] max-md:w-[50%]"
                            />
                        </div>
                        <h2 className="mobile: mb-2 text-lg font-semibold max-md:text-xs mobile:max-md:pt-5 xl:text-2xl">
                            {student.student}
                        </h2>
                        <p className=" font-sans mobile:max-md:hidden  xl:text-2xl">
                            {student.text}.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default FeaturedStudent;
