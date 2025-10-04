import * as motion from "motion/react-client"
import { Button } from "../../ui/button";
import CustomDiv from "../../common/CustomDiv";
import Link from "next/link";
import Image from "next/image";



export default function Hero() {
  return (
    <CustomDiv style="relative flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:h-[calc(100svh-var(--header-height))] max-h-[627px]  overflow-hidden my-0! pt-10 lg:pt-0">
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
        <h1 className="text-foreground text-3xl lg:text-5xl font-semibold leading-10 md:leading-16 lg:max-w-[508px] mb-6">
          Designing Impactful Digital Experiences
        </h1>
        <p className="text-xl leading-8 text-secondary-foreground max-w-[372px] lg:max-w-[408px] mb-6">
          Kashlabs delivers top-tier UI/UX, web design, graphics, and branding
          to elevate your business.
        </p>
        <div className="flex gap-4 items-center justify-between w-full max-w-[345px]">
          <Button className="" asChild>
            <Link
              href="https://api.whatsapp.com/send/?phone=2348093757442&text&type=phone_number&app_absent=0"
              className="underline"
              target="_blank"
            >
              Let’s work together
            </Link>
          </Button>
          <Button variant="outline" className="grow">
            View Porfolio
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleX: 0.8, scaleY: 0.8 }}
        animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
        transition={{ duration: 2 }}
        className="relative overflow-hidden flex items-end justify-center lg:basis-1/2 w-full lg:max-w-[548px]  h-[304px] xl:h-full  max-h-[304px] sm:max-h-[500px] lg:max-h-[533px] origin-bottom-right bg-hero-background rounded-2xl pt-10 xl:pt-0"
      >
        <Image src={'/images/hero.webp'} className="hidden" width={500} height={500} alt="hidden preloaded hero image."/>
        <motion.img
          initial={{ opacity: 0, scaleX: 0.8, scaleY: 0.8 }}
          animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
          transition={{ duration: 2 }}
          src="/images/hero.webp"
          alt="Hero Image"
          className="translate-y-2 h-full lg:h-auto w-auto lg:w-full   rounded-lg object-cover object-top "
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
