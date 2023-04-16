import { getProject } from "@/sanity/sanity.utils";
import Image from "next/image";
type Params = {
  params: { project: string };
};

export default async function Project({ params }: Params) {
  const slug = params.project;
  const project = await getProject(slug);
  //   console.log(slug);

  return (
    <div>
      <h1>{project.name}</h1>
      <Image
        src={project.image}
        alt={project.name}
        width={500}
        height={500}
        className="w-auto h-auto"
      />
    </div>
  );
}
