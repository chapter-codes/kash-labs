import {Suspense} from 'react'
import CustomDiv from "../../common/CustomDiv";
import Projects from "../client/Projects";
import { projectsData } from "@/lib/server/home";


export default async function MyPortfolio() {
  

  return (
    <CustomDiv style=''>
      <Suspense fallback={<div>Loading projects...</div>}>
        <Projects projects={projectsData} />
      </Suspense>
    </CustomDiv>
  );
}
