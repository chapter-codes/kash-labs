import Image from "next/image";
import CustomDiv from "@/components/common/CustomDiv";
import Link from "next/link";
import Nav from "@/components/home/client/Nav";
import { link } from "fs";
import { icons } from "lucide-react";
import FooterNav from "../client/FooterNav";

const contact = [
  {
    name: "discord",
    url: "https://discord.com/invite/eQxkYTNxSp",
    icon: "/icons/discord.png"
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/animaapp/",
    icon: "/icons/facebook.png"

  },
  {
    name: "dribble",
    url: "https://dribbble.com/animaapp",
    icon: "/icons/dribble.png"

  },
  {
    name: "instagram",
    url: "https://www.instagram.com/animaapp/?hl=en",
    icon: "/icons/instagram.png"

  },
  {
    name: "behance",
    url: "https://www.behance.net/Anima_design",
    icon: "/icons/behance.png"

  },
];

export default function Footer() {
  return (
    <footer className="bg-footer-bg pt-28 pb-10 dark">
      <CustomDiv style="my-0! ">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
          <Image
            src="/icons/brandname-dark.svg"
            alt="Logo"
            height={26}
            width={120}
            className="w-[7.5rem] h-6.5"
          />
          <FooterNav />
        </div>
        <div className="flex justify-center w-full mt-13 mb-16">
          {contact.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={25}
                height={25}
                className="w-6.5 h-auto"
              />
            </Link>
          ))}
        </div>
      </CustomDiv>
      <div id="divider" className="relative w-full h-[1px] bg-[#222222]">
        <div
          id="slider"
          className="absolute animate-spin w-1/10 bg-blue-500 h-[1px]"
        ></div>
      </div>
      <div className="flex justify-center w-full text-sm font-poppins text-white font-bold mt-10 ">
        © 2025 KashLabs All Rights Reserved , Inc.
      </div>
    </footer>
  );
}
