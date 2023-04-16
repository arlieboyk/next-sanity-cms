import { Page } from "@/types/Page";
import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
    /* read from content */
    const client = createClient({
        projectId: "lkmhcppf",
        dataset: "production",
        apiVersion: '2023-04-15'
    });

    return client.fetch(
        /* get all  from "project" we created  using groq*/
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.crurrent,
            "image": image.asset->url,
            url,
            content
        }`
    )


}

export async function getProject(slug: string): Promise<Project> {
    const client = createClient({
        projectId: "lkmhcppf",
        dataset: "production",
        apiVersion: '2023-04-15'
    });
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
    const client = createClient({
        projectId: "lkmhcppf",
        dataset: "production",
        apiVersion: '2023-04-15'
    });
    return client.fetch(
        groq`*[_type == "villa"]{
            _id,
            _createdAt,
            name,
            "slug": slug.crurrent,
            "image": image.asset->url,
            url,
            content   
        }`


    )
}
export async function getVillaImages() {
    const client = createClient({
        projectId: "lkmhcppf",
        dataset: "production",
        apiVersion: '2023-04-15'
    });
    return client.fetch(
        groq`*[_type == "villa && name == name"]{
            _id,
            _createdAt,
            name,
            "slug": slug.crurrent,
            "image": image.asset->url,
            url,
            content   
        }`


    )
}

export async function getPages(): Promise<Page[]> {
    const client = createClient({
        projectId: "lkmhcppf",
        dataset: "production",
        apiVersion: '2023-04-15'
    });
    return client.fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            name,
            "slug": slug.crurrent,
            url,
            info,
            content   
        }`


    )
}