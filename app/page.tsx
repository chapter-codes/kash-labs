import { CustomLayout } from "@/components/common/CustomLayout";
import ProjectCardSkeleton from "@/components/common/ProjectCardSkeleton";
import About from "@/components/home/server/About";
import Hero from "@/components/home/server/Hero";
import LetsWorkTogether from "@/components/home/server/LetsWorkTogether";
import MyDesignPrinciples from "@/components/home/server/MyDesignPrinciples";
import MyPortfolio from "@/components/home/server/MyPortfolio";
import MySkills from "@/components/home/server/MySkills";
import Testimonial from "@/components/home/server/Testimonial";
import { SearchParams } from "@/types/homeTypes";
import SearchFilterSort from "@/components/home/client/SearchFilterSort";


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
        <SearchFilterSort />
        <MyPortfolio />
        <MyDesignPrinciples />
        <Testimonial />
        <LetsWorkTogether />
      </section>
    </CustomLayout>
  )
}
