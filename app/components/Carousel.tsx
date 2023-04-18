"use client";
import { ImageType, getVillaImage } from "@/sanity/sanity.utils";
import { Villa } from "@/types/Villa";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const CarouselComponent = () => {
  const [image, setImage] = useState<ImageType[]>([]);
  useEffect(() => {
    const getImage = () => {
      getVillaImage("Spanish Villa Design").then((res) => {
        setImage(res);
      });
      getImage();
    };
  }, []);

  useEffect(() => {
    console.log("s ", image);
  }, [image]);

  return (
    <Carousel>
      {/* {imageUrl?.map((image) => (
        <Image src={image} alt="image" width={200} height={200} />
      ))} */}
    </Carousel>
  );
};

export default CarouselComponent;
