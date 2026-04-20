"use client";
import Section from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Search from "@/components/portfolio/client/Search";
import { TProject } from "../types";
import Link from "next/link";

const projectCategories = [
  {
    key: "all",
    label: "All Projects",
  },
  {
    key: "uiux",
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

type TMyPortfolioHeader = {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
};

function MyPortfolioHeader({
  setCategory,
  category,
  setSubmitting,
}: TMyPortfolioHeader) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();
  searchParams.toString();
  const url = new URLSearchParams(searchParams.toString());
  console.log(url);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between items-center w-full mb-11">
      {isClient && pathname != "/portfolio" && (
        <Section
          title="My Portfolio"
          description="Showcasing my best work across different industries"
          style="w-full"
        />
      )}
      {isClient && pathname == "/portfolio" && (
        <div className="">
          <Search setSubmitting={setSubmitting} />
        </div>
      )}
      <div className="flex flex-wrap lg:flex-nowrap justify-center  gap-1 gap-y-2 text-xs mb-6 lg:mb-0">
        {projectCategories.map((cat, index) => (
          <Button
            key={cat.label}
            variant={"outline"}
            // onClick={() => setCategory(cat.key)}
            className={`${
              category == cat.key || (index == 0 && !category)
                ? "bg-btn-bg! hover:bg-btn-bg/90! text-white! hover:border-background!"
                : "hover:border-btn-outline-border!"
            } transition-colors duration-300 border-background! `}
            // asChild
          >
            <Link
              href={
                `/portfolio` +
                `${!!searchParams.toString()? "?" + searchParams.toString() : ''}` +
                `${
                  !!searchParams.toString()
                    ? ` ${index == 0 ? "" : `&category=${cat.key}`}`
                    : `${index == 0 ? "" : `?category=${cat.key}`}`
                }`
              }
              className=""
            >
              {cat.label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default MyPortfolioHeader;
