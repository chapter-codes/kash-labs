import * as motion from "motion/react-client";
import { Button } from "../../ui/button";
import CustomDiv from "../../common/CustomDiv";
import Link from "next/link";
import Image from "next/image";
import { KashImage } from "@/app/assets";

export default async function Hero() {
  return (
    <CustomDiv style="relative flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:h-[calc(100svh-var(--header-height))] lg:max-h-[50rem]  overflow-hidden my-0! pt-10 lg:pt-0">
      {/* <div className="hero-bg-light" style={{ top: "0", left: "0" }} />
      <div
        className="hero-bg-light"
        style={{ bottom: "10%", right: "0%", animationDelay: "2s" }}
      /> */}
      <motion.div
        initial={{ left: "-100%" }}
        animate={{ left: 0 }}
        transition={{ duration: 1.5 }}
        className="relative"
      >
        {/* Your hero image */}
        <h1 className="text-foreground text-3xl lg:text-[2.5rem] text-center lg:text-left font-semibold leading-14 md:leading-16 lg:max-w-[508px] mb-6">
          Designing Impactful Digital Experiences
        </h1>
        <p className="text-xl leading-8 text-secondary-foreground text-center lg:text-left max-w-[372px] lg:max-w-[408px] mb-6 mx-auto lg:mx-0">
          Kashlabs delivers top-tier UI/UX, web design, graphics, and branding
          to elevate your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full max-w-[345px] mx-auto lg:mx-0">
          <Button className="" asChild>
            <Link
              href="https://api.whatsapp.com/send/?phone=2348093757442&text&type=phone_number&app_absent=0"
              className="underline"
              target="_blank"
            >
              Let’s work together
            </Link>
          </Button>
          <Button variant="outline" className="grow" asChild>
            <Link href={"/portfolio"}>View Porfolio</Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleX: 0.8, scaleY: 0.8 }}
        animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
        transition={{ duration: 2 }}
        className="shrink-0 relative overflow-hidden flex items-end justify-center w-[calc(0.6*34.25rem)] h-[calc(0.6*33.3125rem)] sm:w-[calc(0.9*34.25rem)] sm:h-[calc(0.9*33.3125rem)]  lg:w-[34.25rem] lg:h-[33.3125rem]   origin-bottom-right bg-hero-background rounded-2xl pt-10 xl:pt-0 mx-auto  lg:mx-0"
      >
        <Image
          src={KashImage}
          className="hidden"
          width={500}
          height={500}
          alt="hidden preloaded hero image."
          priority
        />
        <motion.img
          initial={{ opacity: 0, scaleX: 0.8, scaleY: 0.8 }}
          animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
          transition={{ duration: 2 }}
          src={KashImage.src}
          alt="Hero Image"
          className="h-full w-full object-bottom object-cover"
        />
        <motion.div
          initial={{ opacity: 0, bottom: "-20%" }}
          animate={{ opacity: 1, bottom: "5%" }}
          transition={{ duration: 2 }}
          className="flex items-center justify-center gap-2.5 absolute lg:bottom-10 left-1/2 -translate-x-1/2 z-10 bg-card w-full max-w-[150px] md:max-w-[200px] p-4 rounded-xl"
        >
          <Image
            src="/icons/figma.svg"
            alt=""
            width={44}
            height={44}
            className="size-10 md:size-11"
          />
          <Image
            src="/icons/adobe.svg"
            alt=""
            width={44}
            height={44}
            className="size-10 md:size-11"
          />
          <Image
            src="/icons/illustrator.svg"
            alt=""
            width={44}
            height={44}
            className="size-10 md:size-11"
          />
        </motion.div>
      </motion.div>
    </CustomDiv>
  );
}
