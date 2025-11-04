import { Suspense } from "react";
import CustomDiv from "../../common/CustomDiv";
import Projects from "../client/Projects";
import { projectsData } from "@/lib/server/home";
import MyPortfolioHeader from "../client/MyPortfolioHeader";
import LoadProjects from "./LoadProjects";
import Fallback from "@/components/common/Fallback";

export default async function MyPortfolio() {
  console.log("myportfolio");
  return (
    <CustomDiv style="">
      {/* <MyPortfolioHeader setCategory={setCategory} /> */}
      <Suspense fallback={<Fallback />}>
        <LoadProjects />
      </Suspense>
    </CustomDiv>
  );
}
