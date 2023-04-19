"use client";
import { ImageType, getVillaImage } from "@/sanity/sanity.utils";
import { Villa } from "@/types/Villa";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Images {
  images: ImageType[];
}

const CarouselComponent = ({ images }: Images) => {
  console.log("carou ", images);

  return (
    <>
      <Carousel>
        {images?.map((image) => (
          <Image
            key={image.name}
            src={image.imageUrl}
            alt="image"
            width={1000}
            height={1000}
            className="w-full h-1/2"
          />
        ))}
      </Carousel>
    </>
  );
};

export default CarouselComponent;
