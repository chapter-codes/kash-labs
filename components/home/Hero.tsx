import * as motion from "motion/react-client"
import { Button } from "../ui/button";
import CustomDiv from "../common/CustomDiv";
import Link from "next/link";



export default function Hero() {
  return (
    <CustomDiv style="flex  flex-col md:flex-row justify-between items-center gap-4 h-[calc(100svh-var(--header-height))] md:h-[calc(100vh-100px)] overflow-hidden my-0!">
      <motion.div
        initial={{ left: "-50%" }}
        animate={{ left: 0 }}
        transition={{ duration: 1.5 }}
        className="relative"
      >
        <h1 className="text-foreground text-5xl leading-13 font-clash-display lg:max-w-[508px] mb-10">
          Designing Impactful Digital Experiences
        </h1>
        <p className="text-xl leading-8 text-secondary-foreground max-w-[408px] mb-10">
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

      {/* <div className="overflow-hidden "> */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.8, scaleY: 0.8 }}
        animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
        transition={{ duration: 2 }}
        className="relative overflow-hidden basis-1/2 origin-bottom-right bg-hero-background rounded-2xl"
      >
        <motion.img
          initial={{ opacity: 0, scaleX: 0.8, scaleY: 0.8 }}
          animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
          transition={{ duration: 2 }}
          src="/images/hero.svg"
          alt="Hero Image"
          className="w-full h-auto rounded-lg"
        />
        <motion.div
          initial={{ opacity: 0, bottom: "-20%" }}
          animate={{ opacity: 1, bottom: "5%" }}
          transition={{ duration: 2 }}
          className="flex gap-2.5 absolute bottom-10 left-1/2 -translate-x-1/2 z-10 bg-card  p-4 rounded-xl"
        >
          <img src="/icons/figma.svg" alt="" />
          <img src="/icons/adobe.svg" alt="" />
          <img src="/icons/illustrator.svg" alt="" />
        </motion.div>
      </motion.div>
      {/* </div> */}
    </CustomDiv>
  );
}
