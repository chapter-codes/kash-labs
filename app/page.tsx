import Hero from "@/components/home/server/Hero";
import MyDesignPrinciples from "@/components/home/server/MyDesignPrinciples";
import MyPortfolio from "@/components/home/server/MyPortfolio";
import MySkills from "@/components/home/server/MySkills";
import Testimonial from "@/components/home/server/Testimonial";


export default function Portfolio() {
  return (
    <>
      <Hero />
      <MySkills />
      <MyPortfolio />
      <MyDesignPrinciples />
      <Testimonial />
    </>
  );
}
