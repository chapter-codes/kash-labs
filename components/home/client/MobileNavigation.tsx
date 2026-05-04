"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import CV from "../server/Cv";

type MobileNavigationProps = {
  showMenu: boolean;
  handleMobileMenu: () => void;
  handleTheme: () => void;
};

export default function MobileNavigation({
  showMenu,
  handleMobileMenu,
  handleTheme,
}: MobileNavigationProps) {
  const pathname = usePathname();

  return (
    <ul
      aria-label="mobile navigation menu"
      className={` fixed top-0 ${
        showMenu ? "translate-y-0" : "-translate-y-full"
      } left-0   w-full h-svh bg-background md:hidden flex flex-col items-center justify-evenly transition-transform duration-300 z-50 `}
    >
      <button
        onClick={handleMobileMenu}
        className={` md:hidden absolute top-6 right-6`}
        type="button"
        aria-label="close mobile navigation menu"
      >
        <X className="size-6" />
      </button>
      <ul className="flex flex-col md:flex-row items-center gap-5">
        {/* <ul className="hidden  md:flex items-center gap-5"> */}
        <li>
          <Link
            className={`flex items-center gap-0.5 link dark:text-white ${
              pathname === "/" ? "active" : ""
            }`}
            href="/"
            onClick={handleMobileMenu}
          >
            <Image
              src="/icons/active.svg"
              alt="Logo"
              width={10}
              height={10}
              className={` ${
                pathname === "/" ? "visible" : "invisible"
              } transition-[visibility] duration-75`}
            />
            Home
          </Link>
        </li>

        <li>
          <Link
            className={`flex items-center gap-0.5 link dark:text-white ${
              pathname === "/dashboard" ? "active" : ""
            }`}
            href="/portfolio"
            onClick={handleMobileMenu}
          >
            <Image
              src="/icons/active.svg"
              alt="Logo"
              width={10}
              height={10}
              className={` ${
                pathname === "/portfolio" ? "visible" : "invisible"
              } transition-[visibility] duration-75`}
            />
            Portfolio
          </Link>
        </li>
        <li className="hidden">
          <div className=" flex gap-2" onClick={handleTheme}>
            <Image
              src="/icons/light-icon.svg"
              alt="light mode toggle"
              className="size-5 hidden dark:block"
              width={20}
              height={20}
            />
            <Image
              src="/icons/moon.png"
              alt="dark mode toggle"
              className="size-5 block dark:hidden"
              width={20}
              height={20}
            />
            <p className="dark:hidden ">Dark</p>
            <p className="hidden dark:block">Light</p>
          </div>
        </li>
        <li>
          <Link
            className={`flex items-center gap-0.5 link dark:text-white ${
              pathname === "/dashboard" ? "active" : ""
            }`}
            href="#contact"
            prefetch={true}
            onClick={handleMobileMenu}
          >
            <Image
              src="/icons/active.svg"
              alt="Logo"
              width={10}
              height={10}
              className={` ${
                pathname === "/#contact" ? "visible" : "invisible"
              } transition-[visibility] duration-75`}
            />
            Contact
          </Link>
        </li>
        <li>
          <CV
            trigger={
              <Button asChild>
                <Link href={"/#"} className=" ">
                  My CV
                </Link>
              </Button>
            }
          />
        </li>
      </ul>
      <Image
        src="/icons/brandname-dark.svg"
        alt="Logo"
        height={26}
        width={120}
        className="w-[7.5rem] h-6.5"
      />
    </ul>
  );
}
