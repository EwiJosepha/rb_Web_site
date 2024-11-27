import { defineField, defineType } from "sanity";

export default defineType({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title of blog",
    }),
    {
      name: "slug",
      type: "slug",
      title: "slug of your blog articles",
      options: {
        source: "title",
      },
    },
    {
      name: "featured",
      type: "boolean",
      options: {
        default: false,
      },
      title: "Featured",
    },
    {
      name: "titleImage",
      type: "image",
      title: "Title Image",
    },
    {
      name: "smallDescription",
      type: "text",
      title: "small Description",
    },
    {
      name: "author",
      type: "text",
      title: "Author",
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At",
    },
    defineField({
      name: "content",
      type: "blockContent",
      title: "Content",
    }),

    {
      name: "id",
      type: "text",
      title: "id",
    },
  ],
});
// export default blogsSchema;
