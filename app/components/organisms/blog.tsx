import React from "react";
import Image from "next/image";
import mainPicture from "@/public/assets/images/blog_rebase_photo_720.png";
import subPicture1 from "@/public/assets/images/blog_rebase_photo__1__720.png";
import subPicture2 from "@/public/assets/images/blog_rebase_photo__2__720.png";
// import { playfair } from "@/public/fonts";
import SearchCourse from "./search";
import Link from "next/link";
function Blog() {
    const blogPost = [
        {
            id: 1,
            image: subPicture1,
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
    ];

    return (
        <div>
            <div className=" space-y-3 py-10 mobile:max-md:pl-20 ">
                <h1
                    className={`  text-center  text-6xl  mobile:max-md:text-3xl sm:max-md:text-4xl`}
                >
                    Blog
                </h1>
                <p className=" text-center font-sans text-lg ">
                    Find out what the people are talking about.
                </p>
            </div>
            <div className="grid grid-cols-2 justify-center gap-10 pl-20 pr-20 align-middle  mobile:max-md:mr-[-9rem] mobile:max-md:grid-cols-1 mobile:max-md:gap-4 mobile:max-md:pl-5 mobile:max-md:pr-5">
                <div className="h-[380px] mobile:max-md:h-96">
                    <div className=" relative mobile:max-md:w-full">
                        <Image
                            src={mainPicture}
                            alt="our blog"
                            className=" h-[390px] mobile:max-md:h-96 mobile:max-md:w-[100%] "
                            style={{ objectFit: "cover" }}
                        />

                        <span className=" absolute top-64 pl-6 font-sans text-lg text-white">
                            June 24 2024
                        </span>
                        <span className=" absolute top-60 pl-6 pt-10 font-sans text-2xl font-bold  text-white">
                            The Beginning
                        </span>
                        <span className="  absolute top-72  pl-6 pt-6 font-sans text-xs text-white">
                            Jone Doe
                        </span>
                    </div>
                </div>
                <div className="  flex h-[330px] flex-col gap-6 object-cover mobile:max-md:h-full">
                    {blogPost.map((post, index) => (
                        <div
                            key={index}
                            className=" flex gap-5 ipad:max-ipadMax:flex-col "
                        >
                            <div>
                                <Link href={`/details/${post.id}`}>
                                    <Image
                                        src={post.image}
                                        alt="our blog"
                                        className=" h-[180px] cursor-pointer object-cover mobile:max-md:h-[200px] ipad:max-ipadMax:hidden"
                                    />
                                </Link>
                            </div>
                            <div className=" font-sans">
                                <p className=" text-[0.65rem] text-orange-500">
                                    {post.date}
                                </p>
                                <p
                                    className=" text-xs font-medium"
                                    style={{ color: "#6220ec" }}
                                >
                                    {post.title}
                                </p>
                                <span className=" text-xs">{post.text}</span>
                                <p className=" pb-3 text-[0.75rem] font-bold">
                                    {post.owner}
                                </p>
                                <div className=" flex gap-3 pt-2 font-sans">
                                    <div
                                        className=" mobile:max-md: p-2 text-[0.65rem]"
                                        style={{
                                            borderRadius: "2px",
                                            background: "#efefef",
                                        }}
                                    >
                                        News
                                    </div>
                                    <div
                                        className=" p-2 text-[0.65rem]"
                                        style={{
                                            borderRadius: "2px",
                                            background: "#efefef",
                                        }}
                                    >
                                        Tech
                                    </div>
                                    <div
                                        className=" p-2 text-[0.65rem]"
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
                    ))}
                </div>
            </div>
            <SearchCourse />
        </div>
    );
}

export default Blog;
