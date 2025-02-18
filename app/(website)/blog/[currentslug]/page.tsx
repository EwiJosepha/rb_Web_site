import Image from "next/image";
import { playfair } from "@/public/fonts";
import { client, imageConvertion } from "../../../lib/sanity-clientt";
import { simpleblogcardsanity } from "../../../lib/interfaces";
import { getAllData } from "../../../lib/getblogs";
import Link from "next/link";
import { PortableTextBlock } from "next-sanity";
import PotableText from "../../../Components/organisms/portable-component";
const getOneData = async (slug: string) => {
  try {
    const query = `*[_type == 'blog' && slug.current == "${slug}"] {
        _id,
  title,
  slug,
  featured,
  titleImage,
  smallDescription,
  author,
  createdAt,
  content
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

async function page({ params }: { params: { currentslug: string } }) {
  const currentslug = params?.currentslug;
  const data = await getOneData(currentslug);
  const alldata = await getAllData();
  const convertedImage = imageConvertion(data?.titleImage?.asset?._ref);
  const imageUrl = convertedImage ? convertedImage.url() : "";

  return (
    <>
      <div className=" pb-8 pt-20">
        <div className=" w-full pb-32 pl-5 pr-5 pt-20 mobile:max-md:grid-cols-1 md:px-20">
          <h1
            className={` ${playfair.className} pb-6  text-6xl mobile:max-md:text-3xl`}
          >
            The Beginning
          </h1>

          <div className=" grid grid-cols-5  align-middle   mobile:max-md:grid-cols-1 md:gap-10">
            <div className="mobile:max-md:w-4/4 col-span-4">
              <div className=" flex h-[500px] flex-col items-center justify-center">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt="our blog"
                    width={500}
                    height={500}
                    className="border-0 object-contain"
                  />
                ) : (
                  <div className="image-placeholder flex flex-col items-center justify-center">
                    <p>No Image Available yet</p>
                  </div>
                )}
              </div>

              <div className=" pt-7 font-sans text-[0.75rem]">
                <p className=" py-4 font-serif text-3xl font-extrabold ">
                  {data?.title}
                </p>
                {data.content?.length && (
                  <PotableText value={data.content as PortableTextBlock[]} />
                )}
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
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-1 w-full">
              <h2 className="pb-2 font-sans font-bold mobile:max-md:text-2xl">
                More Stories
              </h2>

              {alldata
                .filter(item => item.slug !== currentslug)
                .slice(1, 4)
                .map((post: simpleblogcardsanity, index: number) => (
                  <Link href={`${post.slug}`} key={index}>
                    <div className=" flex flex-col gap-5 pb-4">
                      <div className="relative h-72 w-full">
                        <Image
                          src={imageConvertion(post.titleImage)?.url() || ""}
                          alt="our blog"
                          fill
                        />
                      </div>

                      <div className=" text-justify font-sans">
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
                          {post.smallDescription.slice(0, 75)}.
                        </span>
                        <p className=" pb-3 text-[0.75rem] font-bold">
                          {new Date(post.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
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
      </div>
    </>
  );
}

export default page;
