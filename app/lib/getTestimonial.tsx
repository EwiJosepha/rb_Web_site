import { simpleStudentTestimonyblogCard } from "./interfaces";
import { client } from "../lib/sanity-clientt";

export const getStudentTestimony = async () => {
  try {
    const data: simpleStudentTestimonyblogCard[] =
      await client.fetch(`*[_type == 'Testimonial'] {
        name,
        description,
        studImage,
        testimony
        }
        `);

    return data as simpleStudentTestimonyblogCard[];
  } catch (error) {
    return [];
  }
};
