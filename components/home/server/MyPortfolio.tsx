import {Suspense} from 'react'
import CustomDiv from "../../common/CustomDiv";
import Projects from "../client/Projects";
import { projectsData } from "@/lib/server/home";
import {addMany , getProjects} from '@/lib/controllers/ProjectController'
import { TProject } from '../types';


export default async function MyPortfolio() {
  
  const projects: TProject[] | undefined = await getProjects() 

  // const projects: Project[] = []
  console.log(projects)
  console.log('fetche projects')
  // const projectsData = projects.slice(0, 20)

  return (
    <CustomDiv style=''>
      <Suspense fallback={<div>Loading projects...</div>}>
        <Projects projects={projects} />
      </Suspense>

      
    </CustomDiv>
  );
}
