import { type SchemaTypeDefinition } from "sanity";
import { applySchema } from "./schamas/applySchema";
import blockContent from "./schamas/blockContent";
import blogs from "./schamas/blogs";
import contact from "./schamas/contact-content";
import FeatureStudents from "./schamas/feature-students";
import Teams from "./schamas/teams";
import Testimonial from "./schamas/testimonial";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogs,
    contact,
    applySchema,
    Testimonial,
    FeatureStudents,
    Teams,
    blockContent,
  ],
};
