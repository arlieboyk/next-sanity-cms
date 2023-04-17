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
      <h1>Home</h1>
    </main>
  );
}
