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
    projects?.filter((project) => project.category == category) || [];

  return (
    <>
      <section className="flex flex-col md:flex-row justify-between items-center w-full">
        <Section
          title="My skills"
          description="Comprehensive design solutions for your business needs"
        />
        <div className="flex gap-1">
          {projectCategories.map((cat, index) => (
            <Button
              key={cat.label}
              variant={"outline"}
              className={`${
                category == cat.key || (index == 0 && !category)
                  ? "bg-btn-bg! hover:bg-btn-bg/90! text-primary-foreground! hover:border-background!"
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
        {projects?.map((project, index) => (
          <article
            key={project.title + index}
            className="group p-5 pb-9 bg-card-bg rounded-[20px] hover:bg-card-hover-bg transition-colors duration-150 border-[1.5px] border-card-bg hover:border-card-hover-border"
          >
            <div className="relative w-full rounded-[10px] overflow-hidden">
              <Image
                src={`${project.logo}`}
                width={516}
                height={235}
                alt={"logo"}
                className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-150"
              />
              <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black/70 flex justify-center items-center">
                <Button
                  asChild
                  variant={"outline"}
                  className="border-white! bg-view-project-bg backdrop-blur-md transition-colors duration-100 invisible group-hover:visible"
                >
                  <Link
                    href={project.link}
                    className="underline text-white"
                    aria-label={`View project: ${project.title} on Behance`}
                    target="_blank"
                  >
                    view project
                  </Link>
                </Button>
              </div>
            </div>

            <div className="text-center text-xs text-tag-foreground font-medium bg-tag-bg px-5 mt-4 py-2 max-w-fit border border-tag-border-bg rounded-full ">
              {project.category}
            </div>
            <h3 className="text-foreground text-base font-semibold  my-4 pr-4">
              {project.title}
            </h3>
            <p className="text-sm text-secondary-foreground leading-6">
              {project.description}
            </p>
          </article>
        ))}
      </section>

      <section className="flex justify-center mt-12">
        <Button asChild className="max-w-fit ">
          <Link href={"/portfolio"}>View more projects</Link>
        </Button>
      </section>
    </>
  );
}
