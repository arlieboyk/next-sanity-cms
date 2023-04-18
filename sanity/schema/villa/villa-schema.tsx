import { Rule } from "sanity";

export const Villa = {
  name: "villa",
  title: "Villa",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      options: {
        min: 0,
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "banner",
      title: "Banner",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    {
      name: "images",
      title: "Set Image",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              description: "Image deescription",
            },
            {
              name: "image",
              titlge: "Image",
              type: "image",
            },
          ],
        },
      ],
      options: { hotspot: true },
    },

    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
