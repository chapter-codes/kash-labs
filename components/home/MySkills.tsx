// library imports
import { Button } from "../ui/button";
import Image from "next/image"


import CustomDiv from "../common/CustomDiv";
import Section from "../common/Section";

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


// components/DesignServices.js

const DesignServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-x md:divide-y-0 border-card-border-stroke bg-white dark:bg-card-bg p-8 rounded-xl">
      {designServices.map((section, index) => (
        <div key={index} className="  py-4 px-5">
          <div className="flex items-center gap-2 mb-5">
            <Image
              src={section.image}
              alt="Logo"
              width={30}
              height={30}
              className=""
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
                <Image
                  src="/icons/active.svg"
                  alt="Logo"
                  width={10}
                  height={10}
                  className=""
                />
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
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <Section
          title="My skills"
          description="Comprehensive design solutions for your business needs"
        />
        <Button variant="outline" className="">
          Download CV
        </Button>
      </div>
      <DesignServices />
    </CustomDiv>
  );
}

