import Image from "next/image";
import { Inter } from "next/font/google";
import { getProjects } from "@/sanity/sanity.utils";
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const projects = await getProjects();
  return (
    <main className={`${inter.className}`}>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project._id}>
          {project.name}
          {project.image && (
            <Image
              src={project.image}
              className="w-[20rem] h-[20rem]"
              alt={project.image}
              width={1000}
              height={1000}
            />
          )}
          <a href={project.url}>{project.url}</a>
        </div>
      ))}
    </main>
  );
}
