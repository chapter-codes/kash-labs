"use client";
import { X } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";

import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SortSelect } from "./SortSelect";
import FilterProjects from "./FilterProjects";

export default function SearchFilterSort() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramsString = searchParams.toString();
  const url = pathname + (paramsString ? `?${paramsString}` : "");
  const [showCancel, setShowCancel] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="mt-20"
    >
      <section className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 custom-sizing pt-15 ">
        <div className="flex gap-5.5 items-center">
          {/* search form */}
          <form
            action={url}
            className="flex justify-between items-center  h-11 bg-card-bg px-3 rounded-full w-[17.6875rem]"
          >
            <label htmlFor="search" className="flex justify-between  ">
              <input
                type="text"
                id="search"
                name="search"
                className="h-full outline-0"
                placeholder="Search"
                defaultValue={searchParams.get("search") || ""}
              />
            </label>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: showCancel ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="mr-2"
              type="button"
              //   onClick={() => handleClear()}
            >
              <X className="size-[21px]" />
            </motion.button>
            <button type="submit" className="">
              <Image
                src="/icons/search.png"
                width={21}
                height={21}
                alt="imagge of a magnifying glass representing search."
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
