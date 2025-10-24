// lib
import { Metadata } from "next";
import { Suspense } from "react";
import { getProjects } from "@/lib/controllers/ProjectController";

//components
import CustomDiv from "@/components/common/CustomDiv";
import Section from "@/components/common/Section";
import LetsWorkTogether from "@/components/home/server/LetsWorkTogether";
import Projects from "@/components/home/client/Projects";


export const metadata: Metadata = {
  title: "kashLabs | Portfolio",
  description: "My Portfolio"
};

export default async function Portfolio() {
  const projects = await getProjects()
  console.log(projects)


  return (
    <>
      <CustomDiv>
        <Section
          title="My Portfolio"
          description="Showcasing my best work across different industries"
          style="w-full flex flex-col items-start md:items-center"
        />
        <Suspense fallback={<div>Loading projects...</div>}>
        <div className=""></div>
          <Projects projects={projects} />
        </Suspense>
      </CustomDiv>
      <LetsWorkTogether />
    </>
  );}
