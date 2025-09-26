import Section from "@/components/common/Section";
import CustomDiv from "@/components/common/CustomDiv";
import { designPrinciples } from "@/lib/server/home";

export default function MyDesignPrinciples() {
  return (
    <CustomDiv style="lg:w-9/10 pb-15">
      <Section
        title="My Design Principles"
        description="The Foundation of Great Design"
        style="w-full flex flex-col items-center mt-25!"
      />

      <div className="flex gap-x-5 gap-y-10  flex-wrap justify-center max-w-9/10 mx-auto">
        {designPrinciples.map((principle) => (
          <article className="p-7.5 bg-card-bg  min-w-fit rounded-[20px]" key={principle.title}>
            <div
              className="border-l-4"
              style={{ borderColor: principle.color }}
            >
              <h3 className="text-lg font-bold font-open-sans pl-5">
                {principle.title}
              </h3>
              <p className="text-secondary-foreground mt-5 pl-5 max-w-[300px]">
                {principle.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </CustomDiv>
  );
}
