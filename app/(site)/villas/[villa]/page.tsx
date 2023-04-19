import CarouselComponent from "@/app/components/Carousel";
import { getVilla, getVillaImage } from "@/sanity/sanity.utils";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

type Params = {
  params: { villa: string };
};

export default async function page({ params }: Params) {
  const villa = await getVilla(params.villa);
  const images = await getVillaImage(params.villa);
  // console.log("villa ", villa);
  console.log("image ", images);

  // console.log(image.image.asset._ref);
  return (
    <main className="h-screen">
      <div className="">
        <h1>{villa?.name}</h1>
      </div>
      <div className="h-[30rem]   w-full bg-gray-400">
        <CarouselComponent images={images} />
      </div>
    </main>
  );
}
