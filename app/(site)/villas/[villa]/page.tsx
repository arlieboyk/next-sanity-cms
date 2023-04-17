import { getVilla, getVillaImage } from "@/sanity/sanity.utils";
import Image from "next/image";

type Params = {
  params: { villa: string };
};

export default async function page({ params }: Params) {
  const villa = await getVilla(params.villa);
  const image = await getVillaImage(params.villa);
  console.log("image ", image);
  console.log("villa ", villa);
  console.log("params ", params.villa);
  return (
    <div>
      <h1>{villa?.name}</h1>
      {/* <img src={villa.images[0].url} alt={villa.images[0].name} /> */}
    </div>
  );
}
