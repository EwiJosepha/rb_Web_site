import { z } from "zod"
export const appllicationInfoSchema = z.object({
  _type: z.literal("apply"),
  fullName: z.string().min(1, { message: "Full Name is required" }).max(100),
  email: z.string().email({ message: "Email must be valide" }),
  gender: z.string({ message: " This field is required" }),
  number: z.string().min(9, { message: "field is required" }).max(9, { message: "Number can exceed or be less 9 figures" }),
  schoolQualification: z.string({ message: "This field is required" }),
  programOfInterest: z.string({ message: "This field is required" }),
  age: z
    .string({ message: "Age field is required" })
    .transform((val) => parseInt(val))
    .refine((val) => !isNaN(val) && val >= 18 && val <= 99, {
      message: "Age must be between 18 and 99",
    }),
  residence: z.string({ message: "This field is required" }),
  other: z.string({ message: "This field is required" }),
  intentionsBefore: z.string({ message: "This field is required" }),
  intentionsAfter: z.string({ message: "This field is required" }),
  guardianNumber: z.string({ message: "This field is required" }),
  guardianEmail: z.string().email({ message: "This field is required" }),
  guardianName: z.string({ message: "This field is required" }).max(9, { message: "Number can exceed or be less 9 figures" }),
  otherForguardian: z.string({ message: "This field is required" }),
})