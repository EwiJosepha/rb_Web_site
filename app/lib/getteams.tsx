import { simpleTeamsBlogCard } from "./interfaces";

import { client } from "../lib/sanity-clientt";

export const getTeams = async () => {
  try {
    const data: simpleTeamsBlogCard[] =
      await client.fetch(`*[https://y8ninrcw.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27teams%27%5D]
        `); 
        
        console.log({data});
        
    return data as simpleTeamsBlogCard[];
  } catch (error) {
   return [];
  }
};
