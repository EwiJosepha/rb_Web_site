import dotenv from "dotenv";
dotenv.config();

// Now you can access the environment variables
export const projectId = process.env.PROJECTID;
export const dataset = process.env.DATASET;
export const apiVersion = process.env.APIVERSION;
export const token = process.env.TOKEN;
