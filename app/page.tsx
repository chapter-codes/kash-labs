import { AnimateSection } from "@/components/common/AnimateUI";
import { CustomLayout } from "@/components/common/CustomLayout";
import ProjectCardSkeleton from "@/components/common/ProjectCardSkeleton";
import About from "@/components/home/server/About";
import Hero from "@/components/home/server/Hero";
import LetsWorkTogether from "@/components/home/server/LetsWorkTogether";
import MyDesignPrinciples from "@/components/home/server/MyDesignPrinciples";
import MyPortfolio from "@/components/home/server/MyPortfolio";
import MySkills from "@/components/home/server/MySkills";
import Testimonial from "@/components/home/server/Testimonial";
import { client } from "@/sanity/client";
import { SearchParams } from "@/types/homeTypes";
import { Project } from "@/types/project";
import { Suspense } from "react";
import Loading from "./loading";


export default async function Portfolio({
  
}: {
  searchParams: Promise<SearchParams>;
}) {

  return (
    <CustomLayout>
      <section>
          <Hero />
        <About />
        <MySkills />

        {/* <ProjectCardSkeleton /> */}
        {/* <Suspense fallback={"<ProjectCardSkeleton />"}> */}
          {/* <AnimateSection keyProp={"true"}> */}
          <MyPortfolio />
          {/* </AnimateSection> */}
        {/* </Suspense> */}
        <MyDesignPrinciples />
        <Testimonial />
        <LetsWorkTogether />
      </section>
    </CustomLayout>
  );
}
