"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const projectCategories = [
  {
    key: "all",
    label: "All Projects",
  },
  {
    key: "ui-ux",
    label: "UIUX",
  },
  {
    key: "graphic",
    label: "Graphic Design",
  },
  {
    key: "branding",
    label: "Logo & Branding",
  },
];



export default function FilterProjects() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div className="flex w-full md:w-auto  overflow-x-auto justify-center-safe pb-1 gap-1 text-xs mb-6 lg:mb-0">
      {projectCategories.map((cat, index) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        cat.key == "all"
          ? newSearchParams.delete("category")
          : newSearchParams.set("category", cat.key);
        const url = "/portfolio" + "?" + newSearchParams.toString();

        return (
          <Button
            key={cat.label}
            variant={"outline"}
            className={`${
              category == cat.key || (index == 0 && !category)
                ? "bg-btn-bg! hover:bg-btn-bg/90! text-white! hover:border-background!"
                : "hover:border-btn-outline-border!"
            } transition-colors duration-300 border-background! `}
            asChild
          >
            <Link href={url} className="">
              {cat.label}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
