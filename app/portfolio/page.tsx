// lib
import { Metadata } from "next";
import { Suspense } from "react";

//components
import CustomDiv from "@/components/common/CustomDiv";
import Section from "@/components/common/Section";
import LetsWorkTogether from "@/components/home/server/LetsWorkTogether";
// import LoadProjects from "@/components/home/server/LoadProjects";
// import Fallback from "@/components/common/Fallback";
// import MyPortfolioHeader from "@/components/home/client/MyPortfolioHeader";


export const metadata: Metadata = {
  title: "kashLabs | Portfolio",
  description: "My Portfolio"
};

export default async function Portfolio({searchParams}: {searchParams: Promise<{search: string}>}) {
  const resolvedSearchParams = await searchParams

  return (
    <>
      <CustomDiv>
        <Section
          title="My Portfolio"
          description="Showcasing my best work across different industries"
          style="w-full flex flex-col items-start md:items-center"
        />
        {/* <MyPortfolioHeader  />  */}
        {/* <Suspense fallback={<Fallback />}>
          <LoadProjects searchParams={resolvedSearchParams} />
        </Suspense> */}
      </CustomDiv>
      <LetsWorkTogether />
    </>
  );}
