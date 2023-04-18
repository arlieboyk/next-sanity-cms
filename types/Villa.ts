import { PortableTextBlock } from "sanity";

export type Villa = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  url: string;
  bannerUrl: string;
  imageUrl: [string];
  content: PortableTextBlock[];
};
