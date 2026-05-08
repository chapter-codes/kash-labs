// library imports
import * as motion from "motion/react-client";
import Image from "next/image";

import CustomDiv from "../../common/CustomDiv";
import Section from "../../common/Section";
import { Dot } from "lucide-react";

const designServices = [
  {
    title: "UI/UX",
    image: "/icons/ui-ux.png",
    description:
      "Creating intuitive and engaging user experiences to delight customers and drive conversions.",
    services: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
  },
  {
    title: "Graphic Design",
    image: "/icons/graphics-design.png",
    description:
      "Eye-catching visuals that communicate messages and strengthen brand identity.",
    services: [
      "Print Materials",
      "Social Media Graphics",
      "Illustrations",
      "Infographics",
    ],
  },
  {
    title: "Logo & Branding",
    image: "/icons/logo-branding.png",
    description:
      "Distinctive brand identities that resonate with audiences and stand out in the market.",
    services: [
      "Logo Design",
      "Brand Guidelines",
      "Brand Strategy",
      "Brand Identity",
    ],
  },
];

const groupTextColors = [
  "text-ui-group-color",
  "text-graphics-group-color",
  "text-logo-group-color",
];

const DesignServices = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 divide-y lg:divide-x lg:divide-y-0 border-card-border-stroke bg-card-bg p-8 rounded-xl">
      {designServices.map((section, index) => (
        <div key={index} className="  py-4 px-5">
          <div className="flex items-center gap-2 mb-5">
            <Image
              src={section.image}
              alt={section.title + " section"}
              width={30}
              height={30}
              className=" "
            />
            <h2 className="text-base font-semibold text-foreground ">
              {section.title}
            </h2>
          </div>
          <p className="text-secondary-foreground mb-4">
            {section.description}
          </p>
          <ul className="text-secondary-foreground space-y-1">
            {section.services.map((service, i) => (
              <div className="flex gap-3" key={service}>
                <Dot className={`${groupTextColors[index]} scale-250`} />
                <li key={i}>{service}</li>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function MySkills() {
  return (
    <CustomDiv>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <Section
          title="My skills"
          description="Comprehensive design solutions for your business needs"
          style="sm:max-w-[70%] mx-auto"
          className="flex flex-col items-center mb-6"
          descriptionClassName="text-center "
        />

        <DesignServices />
      </motion.div>
    </CustomDiv>
  );
}
