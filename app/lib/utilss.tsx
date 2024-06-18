 import { simpleblogcardsanity } from "@/rebaseblogapply/utils/interfaces";
 import { client } from "@/rebaseblogapply/schemaTypes/sanityy-client";

 export const getdata = async () => {
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
      return []
  }
};
