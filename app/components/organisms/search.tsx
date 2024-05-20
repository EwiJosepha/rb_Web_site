import React from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import subPicture2 from "@/public/assets/images/blog_rebase_photo__2__720.png";
import Link from "next/link";

function SearchCourse() {
    const blogPost = [
        {
            id: 1,
            image: subPicture2,
            title: "How to manage SEO as a client",
            date: "June 24th, 2024",
            owner: "John Doe",
            text: "Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job market",
        },
        {
            id: 2,
            image: subPicture2,
            title: "How to manage SEO as a client",
            date: "June 24th, 2024",
            owner: "John Doe",
            text: "Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job market",
        },
        {
            id: 3,
            image: subPicture2,
            title: "How to manage SEO as a client",
            date: "June 24th, 2024",
            owner: "John Doe",
            text: "Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job market",
        },
        {
            id: 4,
            image: subPicture2,
            title: "How to manage SEO as a client",
            date: "June 24th, 2024",
            owner: "John Doe",
            text: "Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job market",
        },
    ];

    return (
        <div>
            <div className=" h-full w-full pl-20 pr-2 pt-10 mobile:max-md:mr-[-9rem] mobile:max-md:pl-5  mobile:max-md:pr-5">
                <div className="flex ">
                    <div className=" relative">
                        <input
                            type="text"
                            placeholder=""
                            className="float-right bg-slate-100 p-2 mobile:max-md:pl-48"
                        />
                        <FaSearch
                            className=" absolute ml-4 mt-4 "
                            style={{ color: "#6220ec" }}
                        />
                    </div>
                    <button
                        className=" p-2 font-sans text-white"
                        style={{ background: "#6220ec" }}
                    >
                        Search
                    </button>
                </div>

                <div className=" mr-10 grid grid-cols-2 justify-center gap-10 pt-8 align-middle mobile:max-md:mr-[-9rem] mobile:max-md:grid-cols-1">
                    {blogPost.map((blog, index) => (
                        <div key={index} className=" cursor-pointer">
                            <div className=" flex gap-5">
                                <div>
                                    <Link href={`/details/${blog.id}`}>
                                        <Image
                                            src={blog.image}
                                            alt="our blog"
                                            className=" h-[170px] object-cover mobile:max-md:h-[225px]"
                                        />
                                    </Link>
                                </div>

                                <div className="">
                                    <p className=" text-[0.65rem] text-orange-500 mobile:max-md:text-lg">
                                        {blog.date}
                                    </p>
                                    <p
                                        className="text-xs font-medium mobile:max-md:text-lg"
                                        style={{ color: "#6220ec" }}
                                    >
                                        {blog.title}
                                    </p>
                                    <span className=" font-sans text-xs">
                                        {blog.text}
                                    </span>
                                    <p className=" pb-3 text-[0.75rem] font-bold mobile:max-md:text-lg">
                                        {blog.owner}
                                    </p>
                                    <div className=" flex gap-3 font-sans">
                                        <div
                                            className="  p-2 text-[0.65rem]"
                                            style={{
                                                borderRadius: "2px",
                                                background: "#efefef",
                                            }}
                                        >
                                            News
                                        </div>
                                        <div
                                            className="  p-2 text-[0.65rem]"
                                            style={{
                                                borderRadius: "2px",
                                                background: "#efefef",
                                            }}
                                        >
                                            Tech
                                        </div>
                                        <div
                                            className="  p-2 text-[0.65rem]"
                                            style={{
                                                borderRadius: "2px",
                                                background: "#efefef",
                                            }}
                                        >
                                            SEO
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchCourse;
