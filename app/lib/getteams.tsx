import { simpleTeamsBlogCard } from "./interfaces";

import { client } from "../lib/sanity-clientt";

export const getTeams = async () => {
  try {
    const data: simpleTeamsBlogCard[] =
      await client.fetch(`*[_type == 'teams'] {
        name,
        description,
        teamsImage,
        position
        }
        `);        
    return data as simpleTeamsBlogCard[];
  } catch (error) {
   return [];
  }
};
