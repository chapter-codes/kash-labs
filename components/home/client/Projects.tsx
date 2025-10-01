"use client";

// library
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// components
import Section from "@/components/common/Section";

// type
import type { Project } from "../types";
import { useEffect } from "react";
import Image from "next/image";
import ProjectCard from "../server/ProjectCard";

type ProjectsProps = {
  projects: Project[] | null;
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
  const params = useSearchParams();
  const category = params.get("category");
  const filteredProjects =
    projects?.filter((project) => (category  == 'all' || !category) ? true : project.category == category) || [];

  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between items-center w-full">
        <Section
          title="My Portfolio"
          description="Showcasing my best work across different industries"
          style="w-full"
        />
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
              <Link href={`/?category=${cat.key}`} scroll={false}>
                {cat.label}
              </Link>
            </Button>
          ))}
        </div>
      </section>

      <section className=" grid md:grid-cols-2 gap-x-5 gap-y-10">
        <ProjectCard projects={filteredProjects ?? []} />
      </section>

      <section className=" flex justify-center mt-12">
        <Button asChild className="w-full max-w-[500px] md:max-w-fit ">
          <Link href={"/portfolio"}>View more projects</Link>
        </Button>
      </section>
    </>
  );
}
