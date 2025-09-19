// libraries
import * as motion from "motion/react-client";
import Image from "next/image";

'custom components'
import Nav from "./Nav";
import CustomDiv from "@/components/common/CustomDiv";


export default function Header() {
  return (
    <motion.header
      className=" flex items-center justify-center h-header-height bg-background   backdrop-blur-md sticky top-0"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <CustomDiv style="flex items-center justify-between max-w-[1140px] w-[95%] md:w-4/5 ">
        <div id="brand" className="flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            alt="Logo"
            width={26}
            height={26}
            className=""
          />
          <img
            src="/icons/brandname-dark.svg"
            alt="Brand Name-kash labs."
            className="hidden dark:block"
          />
          <div className="">
            <img
              src="/icons/brandname-light.svg"
              alt="Brand Name-kash labs."
              className="dark:hidden"
            />
          </div>
        </div>
        <Nav />
      </CustomDiv>
    </motion.header>
  );
}
