import { simpleFeatureStudentblogCard } from "./interfaces";
import { client } from "../lib/sanity-clientt";

export const getFeatureStudent = async () => {
  try {
    const data: simpleFeatureStudentblogCard[] =
      await client.fetch(`*[_type == 'FeatureStudents'] {
        name,
        descriptions,
        studImage,
        }
        `);

    return data as simpleFeatureStudentblogCard[];
  } catch (error) {
    console.log({error});
    
    return [];
  }
};
