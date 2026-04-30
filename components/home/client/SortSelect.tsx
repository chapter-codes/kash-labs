"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import {} from "next/router";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function SortSelect() {
  const pathname = usePathname();
  const router = useRouter();
  const queryParams = useSearchParams();
  const searchParams = new URLSearchParams(queryParams);
  const [sort, setSort] = useState(searchParams.get("sort") || "all");

  const sortOptions = [
    { value: "all", label: "All" },
    { value: "latest", label: "Latest" },
    { value: "most-popular", label: "Most Popular" },
    { value: "oldest", label: "Oldest First" },
  ];
  return (
    <Select
      value={sort}
      onValueChange={(value: string) => {
        const searchParams = new URLSearchParams(queryParams.toString());
        value == "all" ? null : searchParams.set("sort", value);
        console.log("qq", searchParams.toString(), !searchParams);
        const url = "/portfolio" + "?" + searchParams.toString();
        setSort(value);
        router.push(url);
      }}
    >
      <SelectTrigger className="bg-card-bg w-[10.4375rem]" value={sort}>
        <SelectValue placeholder={"Sort projects"} />
      </SelectTrigger>
      <SelectContent className="mt-18">
        <SelectGroup>
          <SelectLabel>Sort</SelectLabel>
          {sortOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              onClick={() => {}}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
