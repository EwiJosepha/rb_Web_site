import { client } from "../lib/sanity-clientt";

export async function getMessage(
  name: FormDataEntryValue | null,
  email: FormDataEntryValue | null,
  message: FormDataEntryValue | null,
) {
  try {
    await client.create({
      _type: "contact",
      name,
      email,
      message,
    });
  } catch (error) {
    console.log("failled");
    
    throw new Error("Error creating document in Sanity:");
  }
}
