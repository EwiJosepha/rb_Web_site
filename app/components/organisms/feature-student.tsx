import React from "react";
import bata from "@/public/assets/images/photo_placement_720.png";
import Image from "next/image";

const FeaturedStudent: React.FC = () => {
    const potentialStudents = [
        {
            id: 1,
            image: bata,
            title: "How to manage SEO as a client",
            date: "June 24th, 2024",
            student: "John Mary",
            text: "Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job market",
        },
        {
            id: 2,
            image: bata,
            title: "How to manage SEO as a client",
            date: "June 24th, 2024",
            student: "John Doe",
            text: "Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job markett",
        },
        {
            id: 3,
            image: bata,
            title: "How to manage SEO as a client",
            date: "June 24th, 2024",
            student: "solan Doe",
            text: "Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job markett",
        },
    ];
    return (
        <div className="my-32 mobile:max-md:mx-5 mobile:max-md:mr-[-9rem] lg:mx-20">
            <h1 className="mb-4 text-center font-sans text-6xl mobile:max-md:text-3xl">
                Featured Students
            </h1>
            <h3 className="mb-14 text-center text-xl">
                Here are our Top Three (3) Students Of The Month!
            </h3>
            <div className="flex items-center justify-center gap-10">
                {potentialStudents.slice(0, 2).map((student, key) => (
                    <div
                        className=" w-[25%] bg-orange-50 p-4 text-center mobile:max-md:w-[80%]"
                        key={key}
                    >
                        <div className="mobile:max-md:h-[10%] mobile:max-md:w-[80%] mobile:max-md:pl-8">
                            <Image
                                src={student.image}
                                alt="dp"
                                className="h-full w-full rounded-full border object-cover "
                            />
                        </div>
                        <h2 className="mb-2 text-lg font-semibold mobile:max-md:pt-5">
                            {student.student}
                        </h2>
                        <p className=" font-sans mobile:max-md:hidden">
                            {student.text}.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default FeaturedStudent;
