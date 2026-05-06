import CustomDiv from "../../common/CustomDiv";
import { client } from "@/sanity/client";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IMyPortfolioProps {}

const PROJECTS_QUERY = `
  *[_type == 'project' && defined(projectName)]
  {projectName, tags, image, projectLink, projectDescription}
`;

export default async function MyPortfolio({}: IMyPortfolioProps) {
  const projects: Project[] = await client.fetch(PROJECTS_QUERY);
  const sortTags = ["logo", "flyer", "website"];

  const taggedProjects: Record<string, Project[]> = {
    logo: [],
    flyer: [],
    website: [],
  };

  projects.forEach((project) => {
    if (
      project.tags
        .map((tag) => tag.toLowerCase().split(" ")[0])
        .includes(sortTags[0])
    ) {
      taggedProjects.logo.push(project);
    }
    if (
      project.tags
        .map((tag) => tag.toLowerCase().split(" ")[0])
        .includes(sortTags[1])
    ) {
      taggedProjects.flyer.push(project);
    }
    if (
      project.tags
        .map((tag) => tag.toLowerCase().split(" ")[0])
        .includes(sortTags[2])
    ) {
      taggedProjects.website.push(project);
    }
  });

  return (
    <CustomDiv className="">
      <section
        className={`grid md:grid-cols-2 justify-items-center justify-center gap-x-5 gap-y-10`}
      >
        {[
          taggedProjects.logo[0],
          taggedProjects.flyer[0],
          taggedProjects.website[0],
          taggedProjects.logo[1],
        ].map((project, index) => (
          <ProjectCard project={project} key={project.projectName + index} />
        ))}
      </section>

      <Button asChild className="mt-10 max-w-fit mx-auto">
        <Link href={"/portfolio"}>View More Projects</Link>
      </Button>
    </CustomDiv>
  );
}
