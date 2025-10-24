"use client";

// library
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

// actions
import { handleSearch } from "@/app/portfolio/actions";

// components
import Section from "@/components/common/Section";

// type
import type { TProject } from "../types";
import Image from "next/image";
import ProjectCard from "../server/ProjectCard";
import Search from "@/components/portfolio/client/Search";
import { useActionState } from "react";
import { TSearchFormState } from "@/app/portfolio/types";
    

type ProjectsProps = {
  projects: TProject[] | undefined;
};
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

export default function Projects({ projects }: ProjectsProps) {
  const pathname = usePathname()
  const params = useSearchParams();
  const category = params.get("category");
  const filteredProjects =
    projects?.filter((project) => (category  == 'all' || !category) ? true : project.category == category) || [];

  
    
    const initialState : TSearchFormState = {
      success: false,
      data : []
    }
      const [state, action, pending] = useActionState<
        TSearchFormState,
        FormData
      >(handleSearch, initialState);
      console.log(state);
      
      const [keyEntered, setKeyEntered] = useState(false) 
      console.log(setKeyEntered);


      useEffect(()=>{
        if(keyEntered && state.data){

        }
      }, [keyEntered, state])

  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between items-center w-full mb-11">
        {pathname != "/portfolio" && (
          <Section
            title="My Portfolio"
            description="Showcasing my best work across different industries"
            style="w-full"
          />
        )}{" "}
        {pathname == "/portfolio" && (
          <section className="">
            <Search setKeyEntered={setKeyEntered} action={action} state={state} />
          </section>
        )}
        <div className="flex flex-wrap lg:flex-nowrap justify-center  gap-1 gap-y-2 text-xs mb-6 lg:mb-0">
          {projectCategories.map((cat, index) => (
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
              <Link href={`${pathname}/?category=${cat.key}`} scroll={false}>
                {cat.label}
              </Link>
            </Button>
          ))}
        </div>
      </section>

      <section className={`grid md:grid-cols-2 gap-x-5 gap-y-10 ${pending? '' :''} `}>
        <ProjectCard projects={keyEntered && state.data.length> 0? state.data : filteredProjects} />

      </section>

      <section className=" flex justify-center mt-12">
        <Button asChild className="w-full max-w-[500px] md:max-w-fit ">
          <Link href={"/portfolio"}>View more projects</Link>
        </Button>
      </section>
    </>
  );
}
