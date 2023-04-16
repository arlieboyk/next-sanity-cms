import { getVillas } from "@/sanity/sanity.utils";
import Image from "next/image";

export default async function page() {
  const villas = await getVillas();
  console.log("villas ", villas);
  return (
    <div>
      <h1>Villas</h1>
      {villas.map((villa) => {
        console.log(villa);
        return (
          <div key={villa._id}>
            <h1> {villa.name}</h1>
            <Image
              src={villa.image}
              width={500}
              height={500}
              alt={villa.name}
            />
          </div>
        );
      })}
    </div>
  );
}
