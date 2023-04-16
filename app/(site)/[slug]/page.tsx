import { getPageInfo } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
type Params = {
  params: { slug: string };
};

async function page({ params }: Params) {
  const slug = params.slug.toLowerCase();
  const pageInfo = await getPageInfo(slug);
  console.log(slug);
  console.log("page: ", pageInfo);

  return (
    <div>
      <h1>page name: {pageInfo?.name}</h1>
      <h1>page name: {pageInfo?._id}</h1>
      <h1>page name: {pageInfo?._createdAt.toString()}</h1>
      <h1 className="">
        page name: <PortableText value={pageInfo?.content} />
      </h1>
    </div>
  );
}

export default page;
