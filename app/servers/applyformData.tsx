import { client } from "../lib/sanity-clientt";
import { ApplySchemaTypes } from "../lib/interfaces";
export async function createRegistration(data: ApplySchemaTypes) {
  try {
    const newDocument = data;
    await client.create(newDocument);
  } catch (error) {
    throw new Error("Error creating document in Sanity:");
  }
}
