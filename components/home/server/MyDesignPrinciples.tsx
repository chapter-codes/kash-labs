import Section from "@/components/common/Section";
import CustomDiv from "@/components/common/CustomDiv";
import { designPrinciples } from "@/lib/server/home";
import * as motion from "motion/react-client";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

export default function MyDesignPrinciples() {
  return (
    <CustomDiv style="lg:w-9/10 pb-15">
      <Section
        title="My Design Principles"
        description="The Foundation of Great Design"
        style="w-full flex flex-col md:items-center mt-25!"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex gap-x-5 gap-y-10 flex-wrap justify-center max-w-9/10 mx-auto"
      >
        {designPrinciples.map((principle) => (
          <motion.article
            variants={cardVariants}
            className="p-7.5 bg-card-bg lg:min-w-fit rounded-[20px]"
            key={principle.title}
          >
            <div
              className="border-l-4"
              style={{ borderColor: principle.color }}
            >
              <h3 className="text-lg font-bold font-open-sans pl-5">
                {principle.title}
              </h3>
              <p className="text-secondary-foreground mt-5 pl-5 lg:max-w-[300px]">
                {principle.description}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </CustomDiv>
  );
}
