"use client";
import { LoaderCircle, Search, X } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { SortSelect } from "./SortSelect";
import FilterProjects from "./FilterProjects";

export default function SearchFilterSort() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialSearch = searchParams.get("search") || "";
  const [searchValue, setSearchValue] = useState(initialSearch);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSearching(true);
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

  useEffect(() => {
    console.log(' initialSearch', initialSearch, 'searchValue', searchValue);
    if (isSearching && searchValue.trim() === initialSearch.trim()) {
      setIsSearching(false);
    }


  }, [initialSearch, searchValue, isSearching]);

  const handleClear = () => {
    setSearchValue("");
    setIsSearching(false);
    
    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.delete("search");
    nextParams.delete("page");
    const queryString = nextParams.toString();
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="mt-4 md:mt-20"
    >
      <section className="flex flex-col xl:flex-row justify-between items-center gap-10 md:gap-4 custom-sizing pt-0 md:pt-15 ">
        <div className="flex flex-col lg:flex-row gap-5.5 items-center">
          {/* search form */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex justify-between items-center  h-11 bg-card-bg px-3 rounded-full w-[17.6875rem]"
            onChange={(e)=>{ !e.target.value? handleClear() : null }}
          >
            <label htmlFor="search" className="flex justify-between  ">
              <input
                type="text"
                id="search"
                name="search"
                className="h-full w-full outline-0"
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
              <Search className="w-6" />
            </button>
          {isSearching && (
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-center items-center">
              <LoaderCircle className="animate-spin w-6 text-btn-bg"/>
            </div>
          )}
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
