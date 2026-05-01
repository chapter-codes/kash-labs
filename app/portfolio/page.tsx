// lib
import { Metadata } from "next";

//components
import CustomDiv from "@/components/common/CustomDiv";
import Section from "@/components/common/Section";
import LetsWorkTogether from "@/components/home/server/LetsWorkTogether";
import SearchFilterSort from "@/components/home/client/SearchFilterSort";
import { Project } from "@/types/project";
import { client } from "@/sanity/client";
import ProjectCard from "@/components/home/server/ProjectCard";

export const metadata: Metadata = {
  title: "kashLabs | Portfolio",
  description: "My Portfolio",
};

const PROJECTS_QUERY = `
      *[_type == 'project' && defined(projectName)]
      {projectName, tags, image, projectLink, projectDescription}
    `;

export default async function Portfolio({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const projects: Project[] = await client.fetch(PROJECTS_QUERY);

  return (
    <>
      <CustomDiv>
        <Section
          title="My Portfolio"
          description="Showcasing my best work across different industries"
          style="w-full flex flex-col items-start md:items-center"
        />
        <SearchFilterSort />
        <section
          className={`grid md:grid-cols-2 justify-items-center justify-center gap-x-5 gap-y-10`}
        >
          {projects.map((project, index) => (
            <ProjectCard project={project} key={project.projectName + index} />
          ))}
        </section>
      </CustomDiv>
      <LetsWorkTogether />
    </>
  );
}
