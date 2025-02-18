"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { getdata } from "@/app/lib/utilss";
import { imageConvertion, client } from "../../lib/sanity-clientt";
import { simpleblogcardsanity } from "../../lib/interfaces";
import DotsLoader from "../molecules/dotloader";

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
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [hideSearch, setHideSearch] = useState(true);

  const inputFieldValue = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const value = e.target.value;
    setQuery(value);
    setHideSearch(value === "");
    // setLoading(true)
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const retrievedData = await getdata();
        setData(retrievedData);
        if (!query.trim()) {
          setData(retrievedData);
        } else {
          const filteredData = await fetchFilteredData(query);
          setData(filteredData);
        }
      } catch (error) {
        throw new Error("Error occurred.");
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
    <div className=" grid-cols mt-20 grid h-full w-full md:pl-20 md:pr-10">
      <div className="flex  px-3  mobile:max-md:w-full md:pb-6">
        <div className="relative mobile:max-md:w-[98%] md:w-[100%] lg:w-[38%] ">
          <div className="relative  ipad:w-[100%] xl:w-full">
            <input
              type="text"
              className=" w-[100%] rounded-sm bg-slate-100 p-6 outline-none md:h-20 
                                md:w-[100%] md:px-4 md:py-4 lg:px-8  "
              onChange={inputFieldValue}
            />
          </div>
          {hideSearch && (
            <FaSearch
              size={25}
              className="invisible absolute bottom-8 ml-3 pt-1 md:visible md:ml-4 md:mt-4"
              style={{ color: "#6220ec" }}
            />
          )}
        </div>
        <button
          className=" rounded-sm p-2 px-8  font-sans text-xs text-white md:px-16"
          style={{ background: "#6220ec" }}
        >
          Search
        </button>
      </div>

      {loading ? (
        <DotsLoader />
      ) : (
        <div className="grid grid-cols-4 justify-center gap-10 px-3 pt-8 align-middle mobile:max-md:grid-cols-1 md:mr-10 md:grid-cols-2 lg:grid-cols-4">
          {data?.map(blog => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`}>
              <div className=" cursor-pointer">
                <div className=" flex flex-col gap-2 mobile:max-md:flex-col md:gap-10 lg:pb-20">
                  <div className="relative h-[190px] w-full mobile:max-md:h-[300px] md:h-[300px] lg:h-[280px]">
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

                  <div className="h-[210px] md:h-[300px]">
                    <p className="md-text-lg  text-orange-500 mobile:max-md:text-lg lg:text-lg xl:text-lg">
                      {blog.title}
                    </p>
                    <p
                      className="md-text-lg font-medium mobile:max-md:text-lg  lg:text-lg  xl:text-lg"
                      style={{ color: "#6220ec" }}
                    >
                      {blog.author}
                    </p>
                    <span className=" font-sans text-sm">
                      {blog.smallDescription.slice(0, 100)}
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
  );
}

export default SearchCourse;
