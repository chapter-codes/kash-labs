import CustomDiv from "../../common/CustomDiv";
import { client } from "@/sanity/client";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";

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

  const selectedProjects: Project[] = [
    taggedProjects.logo[0],
    taggedProjects.flyer[0],
    taggedProjects.website[0],
    taggedProjects.logo[1],
    taggedProjects.flyer[1],
    taggedProjects.website[1],
  ].filter(Boolean) as Project[];

  const kanbanColumns2: Project[][] = [[], []];
  const kanbanColumns3: Project[][] = [[], [], []];

  selectedProjects.forEach((project, index) => {
    kanbanColumns2[index % 2].push(project);
    kanbanColumns3[index % 3].push(project);
  });

  return (
    <CustomDiv className="">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <section className="mb-10 w-full">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:hidden items-start">
            {kanbanColumns2.map((column, columnIndex) => (
              <div
                key={`md-${columnIndex}`}
                className="flex flex-col gap-6 rounded-[24px] w-full"
              >
                {column.map((project, index) => (
                  <ProjectCard
                    project={project}
                    key={`${project.projectName}-${index}`}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="hidden gap-6 lg:grid lg:grid-cols-3 items-start">
            {kanbanColumns3.map((column, columnIndex) => (
              <div
                key={`lg-${columnIndex}`}
                className="flex flex-col gap-6 rounded-[24px] w-full"
              >
                {column.map((project, index) => (
                  <ProjectCard
                    project={project}
                    key={`${project.projectName}-${index}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </section>

        <Button asChild className="mt-10 max-w-fit mx-auto">
          <Link href={"/portfolio"}>View More Projects</Link>
        </Button>
      </motion.div>
    </CustomDiv>
  );
}
