"use client"

import { handleSearch } from "@/app/portfolio/actions";
import { TSearchFormState } from "@/app/portfolio/types";
import { TProject } from "@/components/home/types";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";


type SearchProps = {
  setKeyEntered?: React.Dispatch<React.SetStateAction<boolean>>;
  action?: any;
  state?: TSearchFormState;
  setSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
};



function Search({ setSubmitting}: SearchProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted')
    if (query == null || query === "") return;
    setSubmitting(true)
    router.push('/portfolio?search=' + query);
  }

  return (
    <form
      action={"/portfolio?search=" + query}
      className="flex justify-between items-center  h-11 bg-card px-3 rounded-full"
      onSubmit={handleSubmit}
    >
      <label htmlFor="search" className="flex justify-between  ">
        <input
          type="text"
          id="search"
          name="search"
          className="h-full outline-0"
          placeholder="Search"
          defaultValue={query}
          onChange={({ target: { value } }) => {
            setQuery(value);
          }}
        />
      </label>
      <button type="submit" className="">
        <Image
          src="/icons/search.png"
          width={21}
          height={21}
          alt="imagge of a magnifying glass representing search."
        />
      </button>
    </form>
  );
}

export default Search;
