type Params = {
  params: {
    slug: string;
  };
};

function page({ params }: Params) {
  return <div>page</div>;
}

export default page;
