import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";


export const client = createClient({
  projectId:process.env.PROJECT_ID,
  dataset:process.env.DATASET,
  apiVersion:process.env.VERSION,
  token:process.env.TOKEN,
  useCdn: false,
});

console.log("stra",process.env.PROJECT_ID);


const builder = imageUrlBuilder(client);

export function imageConvertion(source: string) {
  if (!source) {
    return null;
  }
  return builder.image(source);
}
