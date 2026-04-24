import CustomDiv from "@/components/common/CustomDiv";
import MotionDiv from "@/components/common/MotionDiv";
import Section from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const brandIntroduction =
  "Kashlabs is my digital design brand, where I design websites, apps, and brand identities that help businesses grow. I specialize in UI/UX design, web design, and branding, creating solutions that are not just visually appealing, but purposeful and effective.";

const designPhilosophy =
  "I believe great design should be clear, intuitive, and built to solve real problems, not just look good. My focus is on crafting experiences that work seamlessly for users while delivering real value for businesses.";

const brandMission = [
  "Through Kashlabs, I help startups and growing brands transform their ideas into simple, functional, and reliable digital products people can trust.",
  "Kashlabs is where creativity meets purpose.",
];
export default function About() {
  return (
    <MotionDiv className="mt-20 custom-sizing">
      <div className={cn("flex flex-col md:flex-row  items-center md:items-start gap-4 md:gap-0 md:justify-between")}>
        <Section
          title="About"
          description="Designing with purpose"
          className="my-0 text-center md:text-left"
        />
        <Button variant="outline" className="grow max-w-fit" asChild>
          <a
            href="https://drive.google.com/drive/u/0/folders/1CLrahOb_BVe7H3wBhfgbg8c7T2p_BKem"
            target="_blank"
            className="underline"
          >
            Download CV
          </a>
        </Button>
      </div>
      <div className="bg-card-bg space-y-6 p-7.5 rounded-[20px] mt-6">
        <p className="">{brandIntroduction}</p>
        <p className="">{designPhilosophy}</p>
        <div className="">
          <p className="">{brandMission[0]}</p>
          <p className="">{brandMission[1]}</p>
        </div>
      </div>
    </MotionDiv>
  );
}
