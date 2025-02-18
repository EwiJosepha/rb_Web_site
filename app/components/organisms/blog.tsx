import React from "react";
import Image from "next/image";
import mainPicture from "@/public/assets/images/blog_rebase_photo_720.png";
import SearchCourse from "./search";
import { playfair } from "@/public/fonts";

async function Blog() {
  return (
    <>
      <div className=" space-y-3 pt-20">
        <h1
          className={` ${playfair.className} text-center  text-6xl  mobile:max-md:text-3xl sm:max-md:text-4xl`}
        >
          Blog
        </h1>
        <p className=" pb-3 text-center font-sans text-lg ">
          Find out what the people are talking about.
        </p>
      </div>
      <div className="grid h-full grid-cols-1 justify-center gap-10  align-middle mobile:max-md:grid-cols-1 mobile:max-md:gap-4 mobile:max-md:pl-3 mobile:max-md:pr-3 md:px-20 md:pt-6">
        <div className="h-[100%] mobile:max-md:h-96">
          <div className="relative flex flex-col justify-center mobile:max-md:w-full">
            <Image
              src={mainPicture}
              alt="our blog"
              className="h-[780px] w-[100%] mobile:max-md:h-96 mobile:max-md:w-[98%]"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute flex flex-col pl-6 font-sans text-lg  text-white">
              <span>June 24 2024</span>
              <span className=" pt-2 font-sans text-2xl font-bold text-white">
                The Beginning
              </span>
              <span className=" pt-2 font-sans text-xs text-white">
                Kimie Salah
              </span>
            </div>
          </div>
        </div>

        {/* <div className="xl:h-[500px]bg-red-500 flex hidden flex-col justify-center gap-4 mobile:max-md:h-full lg:h-[350px]">
          {retrievedData
            ?.slice(0, 2)
            .map((post: simpleblogcardsanity, index: number) => (
              <div key={index} className="flex gap-4 ipad:max-ipadMax:flex-col">
                <Link href={`/details/${post.slug}`}>
                  <div className="flex mobile:max-md:flex-col ipad:flex-row">
                    <div className="w-2/2 cursor-pointer object-cover mobile:max-md:visible mobile:max-md:h-[200px] mobile:max-md:w-full ipad:h-[200px] ipad:max-ipadMax:visible lg:h-[200px]">
                      {post.titleImage ? (
                        <div className="w-[100%]">
                          <Image
                            src={imageConvertion(post.titleImage)?.url() || ""}
                            alt="our blog"
                            width={10}
                            height={10}
                            className="h-[200px] w-[200px]"
                          />
                        </div>
                      ) : (
                        <div className="image-placeholder">
                          No Image Available
                        </div>
                      )}
                    </div>
                    <div className="w-2/2 flex flex-col gap-4 mobile:max-md:w-full">
                      <p className="text-lg text-orange-500 mobile:max-md:text-lg">
                        {post.title}
                      </p>
                      <p
                        className="text-lg font-medium mobile:max-md:text-lg"
                        style={{ color: "#6220ec" }}
                      >
                        {post.author}
                      </p>
                      <span className="text-lg md:text-xs lg:text-lg">
                        {post.smallDescription}
                      </span>
                      <div className="flex gap-3 pt-2 font-sans md:invisible">
                        <div
                          className="mobile:max-md: p-2 text-[0.65rem]"
                          style={{ borderRadius: "2px", background: "#efefef" }}
                        >
                          News
                        </div>
                        <div
                          className="p-2 text-[0.65rem]"
                          style={{ borderRadius: "2px", background: "#efefef" }}
                        >
                          Tech
                        </div>
                        <div
                          className="p-2 text-[0.65rem]"
                          style={{ borderRadius: "2px", background: "#efefef" }}
                        >
                          SEO
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div> */}
      </div>
      <SearchCourse />
    </>
  );
}

export default Blog;
