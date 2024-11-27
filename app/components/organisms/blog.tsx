import React from "react";
import Image from "next/image";
import mainPicture from "@/public/assets/images/blog_rebase_photo_720.png";
import SearchCourse from "./search";
import Link from "next/link";
import { imageConvertion } from "../../lib/sanity-clientt";
import { simpleblogcardsanity } from "../../lib/interfaces";
import { getAllData } from "../../lib/getblogs";


async function Blog() {

    //debugging
    
    const retrievedData = await getAllData();
    return (
        <div>
            <div className=" space-y-3 py-10 mobile:max-md:pl-20 ">
                <h1
                    className={` }  text-center  text-6xl  mobile:max-md:text-3xl sm:max-md:text-4xl`}
                >
                    Blog
                </h1>
                <p className=" text-center font-sans text-lg ">
                    Find out what the people are talking about.
                </p>
            </div>
            <div className="grid grid-cols-2 justify-center gap-10  pl-20 pr-20   align-middle  mobile:max-md:mr-[-9rem] mobile:max-md:grid-cols-1 mobile:max-md:gap-4 mobile:max-md:pl-5 mobile:max-md:pr-5">
                <div className="h-[100%] mobile:max-md:h-96">
                    <div className=" relative mobile:max-md:w-full ipad:mb-10">
                        <Image
                            src={mainPicture}
                            alt="our blog"
                            className=" h-[425px] mobile:max-md:h-96 mobile:max-md:w-[98%] "
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
                <div className="  flex flex-col gap-6 object-cover mobile:max-md:h-full lg:h-[350px]">
                    {retrievedData?.slice(0, 2).map(
                        (post: simpleblogcardsanity, index: number) => (
                            <div
                                key={index}
                                className=" flex h-[100%] w-[95%] gap-5 ipad:max-ipadMax:flex-col"
                            >
                                <Link
                                    href={`/details/${post.slug}`}
                                >
                                    <div className="gap-3 ipad:flex">
                                        <div
                                            className="mobile:max-md:h-[200px], cursor-pointer object-cover mobile:max-md:visible ipad:h-[200px]
                                            ipad:max-ipadMax:visible lg:h-[150px]"
                                        >
                                            {post.titleImage ? (
                                                <Image
                                                    src={imageConvertion(post.titleImage)?.url() || ""}
                                                    alt="our blog"
                                                    width={100}
                                                    height={100}
                                                    layout="responsive"
                                                />
                                            ) : (
                                                <div className="image-placeholder">No Image Available</div>
                                            )}

                                        </div>
                                        <div className=" font-sans ipad:h-[200px] md:h-[190px]">
                                            <p className=" text-xs text-orange-500 mobile:max-md:text-lg">
                                                {post.title}
                                            </p>
                                            <p
                                                className=" text-xs font-medium mobile:max-md:text-lg"
                                                style={{ color: "#6220ec" }}
                                            >
                                                {post.author}
                                            </p>
                                            <span className=" text-lg lg:text-xs md:text-xs">
                                                {post.smallDescription}
                                            </span>
            
                                            <div className=" flex gap-3 pt-2 font-sans md:invisible">
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
                                </Link>
                            </div>
                        ),
                    )}
                </div>
            </div>
            <SearchCourse />
        </div>
    );
}

export default Blog;
