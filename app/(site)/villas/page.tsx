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
    <div>
      {villa.map((villa) => (
        <Link href={`/villas/${villa.slug}`} key={villa._id}>
          <div>{villa.name}</div>
          {/* <Image
            alt={villa.name}
            width={1000}
            height={1000}
          /> */}
        </Link>
      ))}
    </div>
  );
}
