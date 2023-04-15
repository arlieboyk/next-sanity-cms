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


    /*  */
}