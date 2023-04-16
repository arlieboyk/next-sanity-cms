import { Page } from "@/types/Page";
import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

const client = createClient({
    projectId: "lkmhcppf",
    dataset: "production",
    apiVersion: '2023-04-15'
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
    )


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
    )

}

export async function getVillas(): Promise<Project[]> {

    return client.fetch(
        groq`*[_type == "villa"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content   
        }`


    )
}
export async function getVillaImages() {

    return client.fetch(
        groq`*[_type == "villa && name == name"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content   
        }`


    )
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


    )
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


    )
}