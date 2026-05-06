// libraries
import * as motion from "motion/react-client";
import Image from "next/image";

// 'custom components'
import Nav from "../client/Nav";
import CustomDiv from "@/components/common/CustomDiv";
import Link from "next/link";

interface HeaderProps{
  animate?:boolean
}

export default function Header({animate = true}:HeaderProps) {
  return (
    <motion.header
      className="flex items-center justify-center h-header-height bg-background/40 backdrop-blur-md sticky top-0 z-50"
      initial={animate?{ y: -100 }:{}}
      animate={animate? { y: 0 }: {}}
      transition={{ duration: 1.5 }}
    >
      <CustomDiv className="flex items-center justify-between max-w-[1440px] w-[95%] md:w-[90%]  mx-auto ">
        <div id="brand" className="flex items-center gap-1">
          <Link href="/">
            <Image
              src="/icons/brandname-dark.svg"
              alt="Logo"
              height={26}
              width={120}
              className="w-[7.5rem] h-6.5"
            />
          </Link>
        </div>
        <Nav />
      </CustomDiv>
    </motion.header>
  );
}
