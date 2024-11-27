import { client } from "../../lib/sanity-clientt";

export async function getMessage(
  name: FormDataEntryValue | null,
  email: FormDataEntryValue | null,
  message: FormDataEntryValue | null,
) {
  try {
    // Create a new document in Sanity

    await client.create({
      _type: "contact",
      name,
      email,
      message,
    });

    // res.status(200).json({ message: 'New document created', data: newDocument });
  } catch (error) {
    throw new Error("Error creating document in Sanity:");
  }
}
