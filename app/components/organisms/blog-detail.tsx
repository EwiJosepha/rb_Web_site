import React from "react";
import Image from "next/image";
import mainPicture from "@/public/assets/images/blog_rebase_photo_720.png";
import subPicture1 from "@/public/assets/images/blog_rebase_photo__1__720.png";
import { FaShare, FaThumbsUp } from "react-icons/fa";
// import { playfair } from "@/public/fonts";

function BlogDetails() {
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
            image: subPicture1,
            title: "How to manage SEO as a client",
            date: "June 24th, 2024",
            owner: "John Doe",
            text: "Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job market",
        },
        {
            id: 3,
            image: subPicture1,
            title: "How to manage SEO as a client",
            date: "June 24th, 2024",
            owner: "John Doe",
            text: "Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job market",
        },
    ];
    return (
        <>
            <div className=" pb-8">
                <div className=" w-full px-20 py-40  mobile:max-md:mr-[-9rem] mobile:max-md:grid-cols-1 mobile:max-md:pl-5 mobile:max-md:pr-5">
                    <h1
                        className={` pb-6  text-6xl mobile:max-md:text-3xl`}
                    >
                        The Beginning
                    </h1>
                    <div className=" grid grid-cols-5 gap-5   align-middle mobile:max-md:mr-[-9rem] mobile:max-md:grid-cols-1">
                        <div className="mobile:max-md:w-4/4 col-span-4">
                            <div>
                                <Image
                                    src={mainPicture}
                                    alt="our blog"
                                    style={{
                                        height: "554px",
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>

                            <div className=" pt-7 font-sans text-[0.75rem]">
                                <p className=" pb-5 text-lg mobile:max-md:text-lg">
                                    This space gives you more room to expound on
                                    your message. Remember that writing
                                    effectively is an art. Start by using
                                    simple, everyday words people can easily
                                    understand. Be clear and direct to the
                                    point. Keep your thoughts flowing logically,
                                    and aim for brevity.
                                </p>
                                <p className=" pb-5 text-lg mobile:max-md:text-lg">
                                    Your ideas have a purpose, so choose words
                                    that accurately express them. Ensure your
                                    grammar is flawless as it impacts your
                                    credibility. Use the active voice whenever
                                    possible as it makes any narrative easier to
                                    read.{" "}
                                </p>
                                <p className=" pb-5 text-lg mobile:max-md:text-lg">
                                    This space gives you more room to expound on
                                    your message. Remember that writing
                                    effectively is an art. Start by using
                                    simple, everyday words people can easily
                                    understand. Be clear and direct to the
                                    point. Keep your thoughts flowing logically,
                                    and aim for brevity.
                                </p>
                                <p className=" pb-5 text-lg mobile:max-md:text-lg">
                                    Your ideas have a purpose, so choose words
                                    that accurately express them. Ensure your
                                    grammar is flawless as it impacts your
                                    credibility. Use the active voice whenever
                                    possible as it makes any narrative easier to
                                    read.{" "}
                                </p>
                                <p className=" pb-5 text-lg mobile:max-md:text-lg">
                                    This space gives you more room to expound on
                                    your message. Remember that writing
                                    effectively is an art. Start by using
                                    simple, everyday words people can easily
                                    understand. Be clear and direct to the
                                    point. Keep your thoughts flowing logically,
                                    and aim for brevity.
                                </p>
                                <p className=" pb-5 text-lg mobile:max-md:text-lg">
                                    Your ideas have a purpose, so choose words
                                    that accurately express them. Ensure your
                                    grammar is flawless as it impacts your
                                    credibility. Use the active voice whenever
                                    possible as it makes any narrative easier to
                                    read.
                                </p>
                                <p className=" pb-5 text-lg mobile:max-md:text-lg">
                                    Your ideas have a purpose, so choose words
                                    that accurately express them.
                                </p>
                                <p className=" pb-5 text-lg mobile:max-md:text-lg">
                                    This space gives you more room to expound on
                                    your message. Remember that writing
                                    effectively is an art. Start by using
                                    simple, everyday words people can easily
                                    understand. Be clear and direct to the
                                    point. Keep your thoughts flowing logically,
                                    and aim for brevity.
                                </p>
                                <p className=" pb-5 text-lg mobile:max-md:text-lg">
                                    Your ideas have a purpose, so choose words
                                    that accurately express them. Ensure your
                                    grammar is flawless as it impacts your
                                    credibility. Use the active voice whenever
                                    possible as it makes any narrative easier to
                                    read.
                                </p>
                                <p className=" pb-5 text-lg mobile:max-md:text-lg">
                                    Your ideas have a purpose, so choose words
                                    that accurately express them.
                                </p>
                                <div className=" flex justify-between gap-8 pt-5">
                                    <h1 className=" text-lg font-bold ">
                                        Jane Doe
                                    </h1>
                                    <div className=" flex justify-around gap-8 align-middle">
                                        <p className=" font-meduim p-1 font-sans  text-lg mobile:max-md:hidden">
                                            JUNE 24 2024
                                        </p>
                                        <div className=" flex  mobile:max-md:h-8 mobile:max-md:w-8">
                                            <div
                                                className="rounded-full p-3 mobile:max-md:hidden "
                                                style={{
                                                    background: "#6220ec",
                                                }}
                                            >
                                                <FaThumbsUp className=" text-xs text-white mobile:max-md:h-5 mobile:max-md:w-5" />
                                            </div>
                                            <p className=" p-1 font-sans text-lg font-medium text-gray-500 mobile:max-md:hidden">
                                                29
                                            </p>
                                        </div>
                                        <div className=" flex mobile:max-md:h-8 mobile:max-md:w-8">
                                            <div className=" rounded-full bg-orange-400 p-3 mobile:max-md:hidden">
                                                <FaShare className=" text-xs text-white mobile:max-md:h-5 mobile:max-md:w-5 " />
                                            </div>
                                            <p className="  p-1 font-sans text-lg font-medium text-gray-500 mobile:max-md:hidden">
                                                10
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-span-1 h-[240px] mobile:max-md:mr-[-4rem] mobile:max-md:h-[100%]">
                            <h2 className="pb-2 font-sans font-bold mobile:max-md:text-2xl">
                                More Stories
                            </h2>

                            {blogPost.map((post, index) => (
                                <div
                                    key={index}
                                    className=" flex flex-col gap-5 pb-4"
                                >
                                    <div>
                                        <Image
                                            src={post.image}
                                            alt="our blog"
                                            className=" h-[110px] object-cover mobile:max-md:h-[160px]"
                                        />
                                    </div>

                                    <div className=" font-sans">
                                        <p className=" text-[0.65rem] text-orange-500 mobile:max-md:text-lg">
                                            {post.date}
                                        </p>
                                        <p
                                            className="text-xs font-medium mobile:max-md:text-lg"
                                            style={{ color: "#6220ec" }}
                                        >
                                            {post.title}
                                        </p>
                                        <span className=" text-center text-xs mobile:max-md:text-lg">
                                            {post.text}.
                                        </span>
                                        <p className=" pb-3 text-[0.75rem] font-bold">
                                            {post.owner}
                                        </p>
                                        <div className=" flex gap-3 pt-2 font-sans">
                                            <div
                                                className=" p-2 text-[0.65rem]"
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
                </div>
                <hr className=" ml-20 mr-20 mt-[-7rem] border-b border-gray-500 mobile:max-md:ml-5 mobile:max-md:mr-[-7rem]" />
            </div>
        </>
    );
}

export default BlogDetails;
