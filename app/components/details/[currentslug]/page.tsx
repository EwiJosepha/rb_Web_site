import React from "react";
import Image from "next/image";
import { FaShare, FaThumbsUp } from "react-icons/fa";
// import { playfair } from "@/public/fonts";
import {
  client,
  imageConvertion,
} from "../../../lib/sanity-clientt";
import {
  oneBlogCardsanity,
  simpleblogcardsanity,
} from "../../../lib/interfaces";
import { getAllData } from "../../../lib/getblogs";
import Link from "next/link";

interface Params {
  params: { [k: string]: string };
  currentslug: string;
}

const getOneData = async (slug: string) => {
  try {
    const query = `*[_type == 'blog' && slug.current == "${slug}"] {
        title,
        smallDescription,
        "slug": slug.current,
        titleImage,
        content,
        author,
        createdAt
      }[0]`;

    const params = { slug };

    const data = await client.fetch(query, params);

    if (!data) {
      return <div>Loading...</div>;
    }

    return data;
  } catch (error) {
    return [];
  }
};

async function BlogDetails(params: Params) {
  const currentslug = params?.params?.currentslug;
  const data: oneBlogCardsanity = await getOneData(currentslug);
  const alldata = await getAllData();
  const convertedImage = imageConvertion(data.titleImage.asset._ref);
  const imageUrl = convertedImage ? convertedImage.url() : '';

  return (
    <>
      <div className=" pb-8">
        <div className=" w-full px-20 pb-32 pt-20  mobile:max-md:mr-[-9rem] mobile:max-md:grid-cols-1 mobile:max-md:pl-5 mobile:max-md:pr-5">
          <h1
            className={` pb-6  text-6xl mobile:max-md:text-3xl`}
          >
            The Beginning
          </h1>

          <div className=" grid grid-cols-5 gap-5   align-middle mobile:max-md:mr-[-9rem] mobile:max-md:grid-cols-1">
            <div className="mobile:max-md:w-4/4 col-span-4">
              <div>
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt="our blog"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                ) : (
                  <div className="image-placeholder">
                    No Image Available yet
                  </div>
                )}
              </div>

              <div className=" pt-7 font-sans text-[0.75rem]">
                <p className=" py-4 font-serif text-3xl font-extrabold ">
                  {data?.title}
                </p>
                <p className="pb-5 mobile:max-md:text-lg lg:text-2xl lg:leading-loose">
                  {data?.content}
                </p>
                <div className=" flex justify-between gap-8 pt-5">
                  <h1 className=" text-lg font-bold ">{data.author}</h1>
                  <div className=" flex justify-around gap-8 align-middle">
                    <p className=" font-meduim p-1 font-sans text-lg  font-bold mobile:max-md:hidden">
                      {new Date(data.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
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

              {alldata?.slice(1,5).map((post: simpleblogcardsanity, index: number) => (
                <Link href={`${post.slug}`} key={index}>
                  <div className=" flex flex-col gap-5 pb-4">
                    <div>
                      <Image
                        src={imageConvertion(post.titleImage)?.url() || ""}
                        alt="our blog"
                        width={100}
                        height={100}
                        layout="responsive"
                        className=" h-[110px] object-cover mobile:max-md:h-[160px] mobile:max-md:w-[97%]"
                      />
                    </div>

                    <div className=" font-sans">
                      <p className=" text-[0.65rem] text-orange-500 mobile:max-md:text-lg">
                        {post.title}
                      </p>
                      <p
                        className="text-xs font-medium mobile:max-md:text-lg"
                        style={{ color: "#6220ec" }}
                      >
                        {post.author}
                      </p>
                      <span className=" text-center text-[0.85rem] mobile:max-md:text-lg">
                        {post.smallDescription}.
                      </span>
                      <p className=" pb-3 text-[0.75rem] font-bold">
                        {new Date(post.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
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
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* <hr className=" ml-20 mr-20 mt-[-7rem] border-b border-gray-500 mobile:max-md:ml-5 mobile:max-md:mr-[-7rem]" /> */}
      </div>
    </>
  );
}

export default BlogDetails;
