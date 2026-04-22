import { Suspense } from "react";
import CustomDiv from "../../common/CustomDiv";
import Projects from "../client/Projects";
import { projectsData } from "@/lib/server/home";
import MyPortfolioHeader from "../client/MyPortfolioHeader";
import LoadProjects from "./LoadProjects";
import Fallback from "@/components/common/Fallback";
import { SearchParams } from "@/types/homeTypes";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import ProjectsSections from "../client/ProjectsSections";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";

interface IMyPortfolioProps {
  searchParams?: SearchParams;
}
/*
`
const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  `
*/
const PROJECTS_QUERY = `
  *[_type == 'project' && defined(projectName) && defined(projectLink)]
  {projectName, tags, image, projectLink, description}
`;

export default async function MyPortfolio({ searchParams }: IMyPortfolioProps) {
  const projects: Project[] = await client.fetch(PROJECTS_QUERY);
  console.log('projecs')

//  const sortTags = ['logo', 'ui-ux' , 'brand'] 

  // const filteredProjects = projects.filter((project) => {
  //   if(sortTags.length>0){
  //     if(project.tags.some(tag=>)
  //   }
    
  // });



  return (
    <CustomDiv style="">
      <section className={`grid md:grid-cols-2 gap-x-5 gap-y-10`}>
        {projects.slice(0,4).map((project, index) => (
          <ProjectCard
            project={project}
            key={project.projectName + index}
          />
        ))}
      </section>
    </CustomDiv>
  );
}
