// import 'server-only'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
// import { projectId, token, apiVersion, dataset } from "../config/config";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function imageConvertion(source: string) {
  if (!source) {
    return null;
  }
  return builder.image(source);
}
