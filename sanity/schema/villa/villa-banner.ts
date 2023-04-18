import { Rule } from "sanity";

export const villaBanner = {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "villa",
      type: "reference",
      to: [{ type: "villa" }],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
