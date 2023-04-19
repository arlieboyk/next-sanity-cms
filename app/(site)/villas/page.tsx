import Image from "next/image";
import { Inter } from "next/font/google";
import { getVillas } from "@/sanity/sanity.utils";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
const inter = Inter({ subsets: ["latin"] });

export default async function Villa() {
  const villa = await getVillas();
  console.log("villas: ", villa);
  return (
    <main className="grid px-5 gap-4 grid-cols-1 lg:grid-cols-2">
      {villa.map((villa, idx) => {
        return (
          <Link
            href={`/villas/${villa.slug}`}
            key={villa._id}
            className="border-2 flex space-x-3 rounded-lg p-5"
          >
            <div className="min-w-[40%]">
              <h2 className="font-bold text-gray-700">{villa.name}</h2>
              <Image
                src={villa?.bannerUrl}
                alt={villa.name}
                width={200}
                height={200}
                className="rounded"
              />
            </div>
            <div>
              <PortableText value={villa.content} />
            </div>
          </Link>
        );
      })}
    </main>
  );
}
