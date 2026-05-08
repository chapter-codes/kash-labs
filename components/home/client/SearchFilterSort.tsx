"use client";
import { X } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { SortSelect } from "./SortSelect";
import FilterProjects from "./FilterProjects";

export default function SearchFilterSort() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialSearch = searchParams.get("search") || "";
  const [searchValue, setSearchValue] = useState(initialSearch);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextParams = new URLSearchParams(searchParams.toString());

    if (searchValue.trim()) {
      nextParams.set("search", searchValue.trim());
    } else {
      nextParams.delete("search");
    }

    nextParams.delete("page");
    const queryString = nextParams.toString();
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
  };

  const handleClear = () => {
    setSearchValue("");
    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.delete("search");
    nextParams.delete("page");
    const queryString = nextParams.toString();
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="mt-20"
    >
      <section className="flex flex-col xl:flex-row justify-between items-center gap-10 md:gap-4 custom-sizing pt-15 ">
        <div className="flex flex-col lg:flex-row gap-5.5 items-center">
          {/* search form */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex justify-between items-center  h-11 bg-card-bg px-3 rounded-full w-[17.6875rem]"
          >
            <label htmlFor="search" className="flex justify-between  ">
              <input
                type="text"
                id="search"
                name="search"
                className="h-full outline-0"
                placeholder="Search"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </label>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: searchValue ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="mr-2"
              type="button"
              onClick={handleClear}
            >
              <X className="size-[21px]" />
            </motion.button>
            <button type="submit" className="">
              <Image
                src="/icons/search.png"
                width={21}
                height={21}
                alt="image of a magnifying glass representing search."
              />
            </button>
          </form>
          {/* Sort portfolio */}
          <SortSelect />
        </div>
        {/* filter portfolio */}
        <FilterProjects />
      </section>
    </motion.div>
  );
}
