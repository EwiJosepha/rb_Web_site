"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { getdata } from "@/app/lib/utilss";
import { imageConvertion, client } from "../../lib/sanity-clientt";
import { simpleblogcardsanity } from "../../lib/interfaces";
const fetchFilteredData = async (query: string) => {
  const queryStr = `*[_type == "blog" && slug.current == $slug]{
        title,
        smallDescription,
        "slug": slug.current,
        titleImage,
        author,
        content,
        createdAt,
    }`;
  const result = await client.fetch(queryStr, {
    slug: query.trim().toLocaleLowerCase().replace(/\s+/g, "-"),
  });
  return result;
};

function SearchCourse() {
  const [data, setData] = useState<simpleblogcardsanity[]>();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [hideSearch, setHideSearch] = useState(true);

  const inputFieldValue = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const value = e.target.value;
    setQuery(value);
    setHideSearch(value === "");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const retrievedData = await getdata();
        console.log("data", retrievedData);

        setData(retrievedData);

        if (!query.trim()) {
          setData(retrievedData);
        } else {
          const filteredData = await fetchFilteredData(query);
          setData(filteredData);
        }
      } catch (error) {
        throw new Error("Error occured.");
      } finally {
        setLoading(false);
      }
    };

    

    const intId = setTimeout(fetchData, 2000);

    return () => {
      clearTimeout(intId);
    };
  }, [query]);

  return (
    <div className="">
      <div className=" grid-cols mt-20 grid h-full w-full pl-20 pr-20  ">
        <div className="flex  mobile:max-md:w-full">
          <div className="relative mobile:max-md:w-[100%] md:w-[100%] lg:w-[25%]">
            <div className="relative  ipad:w-[100%]">
              <input
                type="text"
                placeholder=""
                className=" w-[100%] bg-slate-100 mobile:max-md:p-3 md:w-[100%] md:px-4 
                                md:py-4 lg:px-4 lg:py-4"
                onChange={inputFieldValue}
              />
            </div>
            {hideSearch && (
              <FaSearch
                className=" absolute bottom-4 ml-4 mt-4"
                style={{ color: "#6220ec" }}
              />
            )}
          </div>
          <button
            className=" p-2 px-4 font-sans  text-xs text-white"
            style={{ background: "#6220ec" }}
          >
            Search
          </button>
        </div>

        {loading ? (
          <div>Loading</div>
        ) : (
          <div className=" mr-10 grid grid-cols-2 justify-center gap-3 pt-8 align-middle mobile:max-md:mr-[-9rem] mobile:max-md:grid-cols-1">
            {data?.map(blog => (
              <Link key={blog.slug} href={`/details/${blog.slug}`}>
                <div className=" cursor-pointer">
                  <div className=" flex flex-col gap-5 mobile:max-md:flex-col lg:pb-20">
                    <div className="relative h-[190px] w-full mobile:max-md:h-[300px] md:h-[300px] lg:h-[300px]">
                      {blog.titleImage ? (
                        <Image
                          src={imageConvertion(blog.titleImage)?.url() || ""}
                          alt="our blog"
                          layout="fill"
                          className="objectfit-cover"
                        />
                      ) : (
                        <div className="image-placeholder">
                          No Image Available
                        </div>
                      )}
                    </div>

                    <div className="">
                      <p className="md-text-lg  text-orange-500 mobile:max-md:text-lg lg:text-lg xl:text-lg">
                        {blog.title}
                      </p>
                      <p
                        className="md-text-lg font-medium mobile:max-md:text-lg  lg:text-lg  xl:text-lg"
                        style={{ color: "#6220ec" }}
                      >
                        {blog.author}
                      </p>
                      <span className=" font-sans text-lg">
                        {blog.smallDescription}
                      </span>
                      <p className=" pb-3 text-[0.75rem] font-bold mobile:max-md:text-lg">
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
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
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchCourse;
