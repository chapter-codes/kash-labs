import { AnimateSection } from "@/components/common/AnimateUI";
import ProjectCardSkeleton from "@/components/common/ProjectCardSkeleton";
import Hero from "@/components/home/server/Hero";
import LetsWorkTogether from "@/components/home/server/LetsWorkTogether";
import MyDesignPrinciples from "@/components/home/server/MyDesignPrinciples";
import MyPortfolio from "@/components/home/server/MyPortfolio";
import MySkills from "@/components/home/server/MySkills";
import Testimonial from "@/components/home/server/Testimonial";
import { SearchParams } from "@/types/homeTypes";
import { Suspense } from "react";

export default async function Portfolio({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  return (
    <>
      <Hero />
      <MySkills />

      {/* <ProjectCardSkeleton /> */}
      <Suspense fallback={<ProjectCardSkeleton />}>
        {/* <AnimateSection keyProp={"true"}> */}
        <MyPortfolio searchParams={params} />
        {/* </AnimateSection> */}
      </Suspense>
      <MyDesignPrinciples />
      <Testimonial />
      <LetsWorkTogether />
    </>
  );
}
