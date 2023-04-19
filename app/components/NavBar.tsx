"use client";
import { Page } from "@/types/Page";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PortableTextBlock } from "sanity";

const NavBar = ({ pages }: { pages: Page[] }) => {
  const [page, setPages] = useState<Page[]>([]);
  useEffect(() => {
    // console.log("navbar: ", pages);
    if (pages) {
      setPages(pages);
    }
  }, [page]);
  return (
    <nav className="space-x-3 flex ">
      {page.map((page) => (
        <Link
          key={page._id}
          href={`/${page.slug}`}
          className="hover:font-bold transition"
        >
          {page.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
