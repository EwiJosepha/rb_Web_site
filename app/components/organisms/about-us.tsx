import Image from "next/image";
import React from "react";
import beri from "@/public/assets/images/Lumii_20231201_144647543 (1).jpg";
// import { playfair } from "@/public/fonts";

const AboutUs: React.FC = () => {
    return (
        <div className="items-center justify-around mobile:max-md:mx-5 lg:mx-20">
            <div className="flex-col items-center justify-center lg:flex lg:h-screen lg:flex-row">
                <div className="w-full lg:w-2/5">
                    <h1
                        className={` mb-10  text-6xl mobile:max-md:pt-5`}
                    >
                        About Us
                    </h1>
                    <p className="mb-6 w-[80%] font-sans mobile:max-md:w-[100%]">
                        Rebase Code Camp is an innovative on-site learning
                        institution that aims to provide individuals with the
                        knowledge and skills needed to thrive in the digital
                        age. We are a leading provider of comprehensive and
                        industry-aligned training programs in the field of web
                        development and technology.
                    </p>

                    <p className="w-[80%] font-sans mobile:max-md:w-[100%]">
                        With experienced instructors and industry professionals,
                        our immersive programs empower individuals to thrive in
                        the digital landscape. We offer boot camp courses in
                        WordPress, web design, HTML/CSS, JavaScript, and other
                        in-demand technologies. Through hands-on experience and
                        real-world projects, students gain practical skills and
                        deep understanding of the subject matter.
                    </p>
                </div>

                <div className="h-4/6 w-full mobile:max-md:pt-10 lg:w-2/5">
                    <Image
                        src={beri}
                        alt="sectionimage"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>

            <div className="flex-col items-center justify-center md:flex lg:flex-row">
                <div className="w-full lg:w-2/5">
                    <div className="space-y-6">
                        <span className="animate-pulse text-2xl mobile:max-md:hidden">
                            💡
                        </span>

                        <h2 className="font-serif text-2xl font-medium mobile:max-md:pt-10">
                            Origin
                        </h2>
                        <p className="w-[80%] font-sans mobile:max-md:w-[100%]">
                            Rebase Code Camp was born out of the realization
                            that there is a pressing need to address the
                            increasing demand for digital skills and the
                            ever-widening gap between traditional education and
                            the specific requirements of industries.
                        </p>
                        <p className="w-[80%] font-sans mobile:max-md:w-[100%]">
                            We recognized the limitations of conventional
                            schools that focus on providing general education
                            and certificates, while falling short in equipping
                            students with the practical proficiency needed to
                            excel in the job market.
                        </p>
                        <p className="w-[80%] font-sans mobile:max-md:w-[100%]">
                            It is this recognition that led to the establishment
                            of Rebase Code Camp.
                        </p>
                    </div>
                    <div className="mt-10 space-y-6">
                        <span className="animate-pulse text-2xl mobile:max-md:hidden">
                            🧩
                        </span>

                        <h2 className="font-serif text-2xl font-medium ">
                            Mission Statement
                        </h2>
                        <p className="w-[80%] font-sans mobile:max-md:w-[100%]">
                            At Rebase Code Camp, our mission is clear - to
                            empower individuals to not just survive, but thrive
                            in the digital economy.
                        </p>
                        <p className="w-[80%] font-sans mobile:max-md:w-[100%]">
                            We have assembled a team of experienced instructors
                            and industry professionals who are passionate about
                            imparting practical knowledge and skills to our
                            students.
                        </p>
                        <p className="w-[80%] font-sans mobile:max-md:w-[100%]">
                            Our aim is to bridge the gap between education and
                            industry requirements by offering comprehensive and
                            industry-aligned training programs.
                        </p>
                    </div>
                </div>
                <div className="w-full space-y-4 lg:w-2/5">
                    <h2 className="font-sans text-2xl font-medium mobile:max-md:pt-10">
                        Our Story
                    </h2>
                    <p className=" font-sans">
                        After witnessing the changing landscape of the job
                        market, where digital skills were becoming increasingly
                        vital for success. Recognizing the inadequacies of
                        traditional education in preparing students for this new
                        era, we embarked on a mission to bridge the gap and
                        empower individuals to thrive in the digital economy. We
                        pondered on ways to make a meaningful impact, an idea
                        began to take shape - the creation of Rebase Academy
                        (now Rebase Code Camp). With this vision, we set out on
                        a journey that would shape the lives of countless
                        individuals.
                    </p>
                    <p className=" font-sans">
                        We designed a curriculum that embraced the latest
                        industry trends, cutting-edge technologies, and
                        real-world applications. Our courses were crafted to be
                        practical, immersive, and hands-on, ensuring that
                        students gained the knowledge and expertise demanded by
                        the ever-evolving digital landscape.
                    </p>
                    <p className=" font-sans">
                        But Rebase Code Camp was more than just a school. It
                        became a vibrant community, a place where like-minded
                        individuals came together to learn, collaborate, and
                        support each other&apos;s growth.
                    </p>
                    <p className=" font-sans">
                        The journey of Rebase Code Camp continues, fueled by our
                        unwavering commitment to equipping individuals with the
                        skills they need to thrive in the digital era. We remain
                        dedicated to pushing the boundaries of education,
                        embracing new technologies, and adapting to the
                        ever-changing demands of the industry...
                    </p>
                    <p className=" font-sans">
                        The journey of Rebase Code Camp continues, fueled by our
                        unwavering commitment to equipping individuals with the
                        skills they need to thrive in the digital era. We remain
                        dedicated to pushing the boundaries of education,
                        embracing new technologies, and adapting to the
                        ever-changing demands of the industry...
                    </p>
                </div>
            </div>

            <video controls className="mx-auto my-36 w-[80%]">
                <source src="/video.mp4" type="video/mp4" />
            </video>
        </div>
    );
};
export default AboutUs;
