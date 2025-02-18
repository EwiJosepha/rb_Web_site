import { simpleblogcardsanity } from "./interfaces";
import { client } from "../lib/sanity-clientt";

export const getAllData = async () => {
  try {
    const data: simpleblogcardsanity[] =
      await client.fetch(`*[_type == 'blog'] | order(createdAt desc) {
        title,
        smallDescription,
        "slug": slug.current,
        titleImage,
        author,
        content,
        createdAt,
        }
        `);

    return data as simpleblogcardsanity[];
  } catch (error) {
    return [];
  }
};
