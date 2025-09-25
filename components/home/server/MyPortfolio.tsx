import CustomDiv from "../../common/CustomDiv";
import Projects from "../client/Projects";
import { projectsData } from "@/lib/server/home";


export default async function MyPortfolio() {
  

  return (
    <CustomDiv>
      <Projects projects={projectsData} />
    </CustomDiv>
  );
}
