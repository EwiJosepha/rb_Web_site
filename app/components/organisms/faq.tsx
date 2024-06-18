import React from "react";
import QuizPicture from "./quix-pic";
import { playfair } from "@/public/fonts";

function Faqs() {

    return (
        <>
            <div className="bg-white">
                <div className=" mobile:max-md:ml-[1rem]mobile:max-md:pl-5   h-full bg-white pl-20 pr-20 pt-20  mobile:max-md:mr-[-9rem] mobile:max-md:px-5 mobile:max-md:pr-5 mobile:max-md:pt-10">
                    <h1
                        className={` ${playfair.className} pb-10  pt-8 text-center text-6xl mobile:max-md:text-3xl`}
                    >
                        FAQs
                    </h1>
                    <p className=" pb-10 text-center font-sans text-lg ">
                        Discover and learn from our frequently asked questions
                    </p>
                </div>
                <div className="grid grid-cols-2 justify-center gap-10 pl-20 pr-20 align-middle  mobile:max-md:mr-[-9rem] mobile:max-md:grid-cols-1 mobile:max-md:gap-4 mobile:max-md:pl-5 mobile:max-md:pr-5 bg-white">
                    <div
                        className="  rounded-lx p-3 py-3 mobile:max-md:w-[100%]"
                        style={{ height: "100%", background: "#efefef" }}
                    >
                        <h2 className=" text-1xl pb-2 pt-2 text-center font-sans font-bold mobile:max-md:text-lg">
                            What are the prerequisites to join Rebase Code Camp?
                        </h2>
                        <p className=" pb-1 pl-5 pr-5 text-center font-sans text-lg text-gray-500 mobile:max-md:text-lg">
                            We train people with or without a background in
                            programming. To study with us, all you need are:
                        </p>
                        <div className="">
                            <ul className="list-disc pl-10 text-xs text-gray-500">
                                <li className=" pl-5 font-sans text-lg mobile:max-md:text-lg">
                                    At least a GCE A-level certificate or
                                    equivalent qualification
                                </li>
                                <li className="pl-5 font-sans text-lg mobile:max-md:text-lg">
                                    Your personal computer (laptop)
                                </li>

                                <li className=" pl-5 font-sans text-lg mobile:max-md:text-lg">
                                    Stable internet at home for home studies
                                    (the institution provides internet
                                    connection on campus.)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="  rounded-lx py-3"
                        style={{ height: "100%", background: "#efefef" }}
                    >
                        <h2 className="text-1xl pb-2 pt-2 text-center font-sans font-bold mobile:max-md:text-lg">
                            What is the teaching approach at Rebase Code Camp?
                        </h2>
                        <div className="">
                            <p className=" pl-8 pr-8 text-center font-sans text-lg text-gray-500 mobile:max-md:text-lg">
                                Rebase Code Camp follows a hands-on and
                                project-based learning approach. Students work
                                on real-world projects to gain practical
                                experience and develop their skills.
                            </p>
                        </div>
                    </div>
                    <div
                        className="  rounded-lx py-3"
                        style={{ height: "100%", background: "#efefef" }}
                    >
                        <h2 className="text-1xl pb-2 pt-2 text-center font-sans font-bold mobile:max-md:text-lg">
                            What are the prerequisites to join Rebase Code Camp?
                        </h2>
                        <div className="">
                            <p className=" pl-8 pr-8 text-center font-sans text-lg text-gray-500 mobile:max-md:text-lg">
                                Rebase Code Camp does not provide certificates.
                                However, we offer possibility for students to
                                obtain internationally recognised certificates
                                that can be a valuable addition to your resume
                                and showcase your skills to potential employers.
                            </p>
                        </div>
                    </div>
                    <div
                        className="  rounded-lx py-3"
                        style={{ height: "100%", background: "#efefef" }}
                    >
                        <h2 className="text-1xl pb-2 pt-2 text-center font-sans font-bold mobile:max-md:text-lg">
                            What are the prerequisites to join Rebase Code Camp?
                        </h2>
                        <div className="">
                            <p className=" pl-8 pr-8 text-center font-sans text-lg text-gray-500 mobile:max-md:text-lg">
                                Rebase Code Camp offers training in various
                                programming languages, with main focus on MERN
                                stack.
                            </p>
                        </div>
                    </div>
                </div>
            <QuizPicture />
            </div>
            <div className="grid grid-cols-2 justify-center gap-10 pl-20 pr-20 align-middle  mobile:max-md:mr-[-9rem] mobile:max-md:grid-cols-1 mobile:max-md:gap-4 mobile:max-md:pl-5 mobile:max-md:pr-5 mobile:max-md:pt-10 bg-white">
                <div
                    className="  rounded-lx p-2 py-3 pr-5"
                    style={{ height: "100%", background: "#efefef" }}
                >
                    <h2 className="text-1xl pb-2 pt-2 text-center font-sans font-bold mobile:max-md:text-lg">
                        What are the prerequisites to join Rebase Code Camp?
                    </h2>
                    <p className=" pb-3 pl-5 pr-5 text-center font-sans text-lg text-gray-500 mobile:max-md:text-lg">
                        We train people with or without a background in
                        programming. To study with us, all you need are:
                    </p>
                    <div className="">
                        <ul className="list-disc pl-10 text-xs text-gray-500">
                            <li className=" pl-5 font-sans  text-lg mobile:max-md:text-lg">
                                At least a GCE A-level certificate or equivalent
                                qualification
                            </li>
                            <li className=" pl-5 font-sans text-lg mobile:max-md:text-lg">
                                Your personal computer (laptop)
                            </li>

                            <li className=" pl-5 font-sans text-lg mobile:max-md:text-lg">
                                Stable internet at home for home studies (the
                                institution provides internet connection on
                                campus.)
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="  rounded-lx py-3 pr-5"
                    style={{ height: "100%", background: "#efefef" }}
                >
                    <h2 className=" text-1xl pb-2 pt-2 text-center font-sans font-bold mobile:max-md:pl-1 mobile:max-md:text-lg">
                        What are the prerequisites to join Rebase Code Camp?
                    </h2>
                    <p className=" pb-3 pl-5 pr-5 text-center font-sans text-lg text-gray-500 mobile:max-md:text-lg">
                        We train people with or without a background in
                        programming. To study with us, all you need are:
                    </p>
                    <div className=" font-sans">
                        <ul className="list-disc pl-10 text-xs text-gray-500">
                            <li className=" pl-5 text-lg mobile:max-md:text-lg">
                                At least a GCE A-level certificate or equivalent
                                qualification
                            </li>
                            <li className="pl-5 font-sans text-lg mobile:max-md:text-lg">
                                Your personal computer (laptop)
                            </li>

                            <li className=" pl-5 font-sans text-lg mobile:max-md:text-lg">
                                Stable internet at home for home studies (the
                                institution provides internet connection on
                                campus.)
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="  rounded-lx py-3"
                    style={{ height: "100%", background: "#efefef" }}
                >
                    <h2 className=" text-1xl pb-2 pt-2 text-center font-sans font-bold mobile:max-md:pl-1 mobile:max-md:text-lg">
                        What are the prerequisites to join Rebase Code Camp?
                    </h2>
                    <div className="">
                        <p className=" pl-8 pr-8 text-center font-sans text-lg text-gray-500 mobile:max-md:text-lg">
                            Rebase Code Camp offers training in various
                            programming languages, with main focus on MERN
                            stack.
                        </p>
                    </div>
                </div>
                <div
                    className="  rounded-lx py-3"
                    style={{ height: "100%", background: "#efefef" }}
                >
                    <h2 className=" text-1xl pb-2 pt-2 text-center font-sans font-bold mobile:max-md:text-lg">
                        What are the prerequisites to join Rebase Code Camp?
                    </h2>
                    <div className="">
                        <p className=" pl-8 pr-8 text-center font-sans text-lg text-gray-500 mobile:max-md:text-lg">
                            Rebase Code Camp offers training in various
                            programming languages, with main focus on MERN
                            stack.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faqs;
