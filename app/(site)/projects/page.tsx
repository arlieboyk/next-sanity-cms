import Image from "next/image";
import { Inter } from "next/font/google";
import { getProjects } from "@/sanity/sanity.utils";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const projects = await getProjects();
  console.log("projects: ", projects);
  return (
    <main className={`${inter.className} h-auto m-auto py-20 px-6`}>
      <h1 className="text-5xl font-bold  text-blue-400 bg-gradient-to-r from-blue-400 via-stone-600  to-indigo-500  bg-clip-text text-transparent w-[12rem]">
        Projects
      </h1>
      <div className="w-11/12 md:w-4/5 grid gap-3 grid-cols-1 mx-auto mt-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            href={`projects/${project._id}`}
            key={project._id}
            className="border-2 p-2 hover:scale-105 transition w-full overflow-hidden mx-auto border-gray-500 rounded-lg "
          >
            <h2 className="font-bold">{project.name}</h2>
            <p> Slug: {project.slug}</p>
            {project.image && (
              <Image
                src={project.image}
                className="w-[20rem] h-[20rem]"
                alt={project.image}
                width={1000}
                height={1000}
              />
            )}
            <div>
              <PortableText value={project.content} />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
