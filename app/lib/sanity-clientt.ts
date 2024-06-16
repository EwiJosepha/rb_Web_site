import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";


export const client = createClient({
  projectId:"hgq3pig2",
  dataset:"production",
  apiVersion:"2022-03-07",
  token:"skETqb88g6IVurLzDLb5NMeSl7awoFhlKfRnOYQ1JQ3m0LzgDVhB0grKJKgFu1IX33aCrllwYN8yGTqD2m4udPfjZln7gsgdHr04NDk3b9aRUy9cHRYiNYXghkUqBF12jGwl2irJ8EwUODfJClWgqqbcefUhM2F33RI7xnnzO3PJi9qyRpyw",
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
