import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "y8ninrcw",
  dataset: "production",
  apiVersion: "2022-03-07",
  token:"skm4bXFXKOIzQJ94RIOXUfMOKL3nCmc1tDsj65qEVLUslDwYkQfmBRevoUIxQqPPXe031AlJ3qcH47IK2KTfIeovAT4hjitVakgMupXznWcrMcGrb7O6tKNjzgvvNELHosCon1Mvp63ya5oo7s1ZleYZZ8R1LCmBKM5wiQsJBEQAhkcXAb0r",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function imageConvertion(source: string) {
  if(!source){
    return null
  }
  return builder.image(source);
}