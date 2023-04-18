import { Page } from "@/types/Page";
import { Project } from "@/types/Project";
import { Villa } from "@/types/Villa";
import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
const client = createClient({
  projectId: "lkmhcppf",
  dataset: "production",
  apiVersion: "2023-04-15",
});

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    /* get all  from "project" we created  using groq*/
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    /* get all  from "project" we created  using groq*/
    groq`*[_type == "project" && _id == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
          }`,
    { slug }
  );
}

export async function getVillas(): Promise<Villa[]> {
  return client.fetch(
    groq`*[_type == "villa"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "bannerUrl":banner.asset->url,
            url,
            content   
        }`
  );
}
export async function getVilla(slug: string): Promise<Villa> {
  return client.fetch(
    groq`*[_type == "villa" && $slug == slug.current][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "imageUrl": images[].image.asset->url,
      image,    
      url,
      content   
    }`,
    { slug: slug }
  );
}

export type ImageType = {
  imageUrl: [];
  imageName: [];
};

export async function getVillaImage(slug: string): Promise<ImageType[]> {
  return client.fetch(
    groq`*[_type == "villa" && $slug == slug.current ] {
      "imageUrl": images[].image.asset->url,
      "imageName": images[].name
    
    }`,
    { slug: slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return client.fetch(
    groq`*[_type == "page"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            url,
            info,
            content   
        }`
  );
}

export async function getPageInfo(slug: string): Promise<Page> {
  return client.fetch(
    groq`*[_type == "page" && $slug == slug.current][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            url,
            info,
            content   
        }`,
    { slug: slug }
  );
}
function urlFor(image: any) {
  throw new Error("Function not implemented.");
}
