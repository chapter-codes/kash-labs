import type { TProject } from "@/components/home/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectCard({projects}: {projects:TProject[]}) {

  return (
    <>
      {projects?.map((project, index) => (
        <article
          key={project.title + index}
          className="flex flex-col group p-5 pb-9 bg-card-bg rounded-[20px] hover:bg-card-hover-bg transition-colors duration-150 border-[1.5px] border-card-bg hover:border-card-hover-border max-w-[400px] lg:max-w-full mx-auto"
        >
          <div className="relative w-full rounded-[10px] overflow-hidden">
            <Image
              src={`${project.logo}`}
              width={516}
              height={235}
              alt={"logo"}
              className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-150"
            />
            <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black/70 group-focus:bg-black/70 hidden lg:flex justify-center items-center">
              <Button
                asChild
                variant={"outline"}
                className="border-white! bg-view-project-bg backdrop-blur-md transition-colors duration-100 invisible group-hover:visible group-open::visible"
                aria-label="desktop button to view project on behance"
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
          <div className="grow flex items-end xl:hidden">
            <Button
              asChild
              variant={"outline"}
              className="w-full mt-6  bg-portfolio-btn-bg!"
              aria-label="mobile button to view project on behance"
            >
              <Link
                href={project.link}
                className=""
                aria-label={`View project: ${project.title} on Behance`}
                target="_blank"
              >
                view project
              </Link>
            </Button>
          </div>
        </article>
      ))}
    </>
  );
}
