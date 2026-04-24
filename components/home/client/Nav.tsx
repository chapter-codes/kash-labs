"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import * as motion from "motion/react-client";
import MobileNavigation from "./MobileNavigation";

// const MobileNavigation = () => {};

export default function Nav({
  placement,
  ariaLabel = "primary navigation.",
}: {
  placement?: "footer";
  ariaLabel?: string;
}) {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const handleTheme = ()=> {
      document.documentElement.classList.toggle("dark");
      localStorage.getItem('theme') == 'dark' ? localStorage.setItem('theme', '') : localStorage.setItem('theme', 'dark') 
  };

  const handleMobileMenu = () => {
    document.body.classList.toggle("overflow-hidden");
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="" aria-label={ariaLabel}>
      <div className="md:hidden ">
        <Image
          src="/icons/mobile-menu-dark.png"
          alt="mobile menu icon"
          width={24}
          height={24}
          className="size-6 h-auto"
          onClick={handleMobileMenu}
        />
      </div>

      <MobileNavigation
        handleMobileMenu={handleMobileMenu}
        showMenu={showMenu}
        handleTheme={handleTheme}
      />
      <ul className="hidden md:flex items-center gap-5">
        <li>
          <Link
            className={`flex items-center gap-0.5 link dark:text-white ${
              pathname === "/" ? "active" : ""
            }`}
            href="/"
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
            prefetch={true}
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
        <li>
          <Link
            className={`flex items-center gap-0.5 link dark:text-white ${
              pathname === "#contact" ? "active" : ""
            }`}
            href="#contact"
            prefetch={true}
          >
            <Image
              src="/icons/active.svg"
              alt="Logo"
              width={10}
              height={10}
              className={` ${
                pathname === "#contact" ? "visible" : "invisible"
              } transition-[visibility] duration-75`}
            />
            Contact
          </Link>
        </li>
        {placement !== "footer" && (
          <>
            <li className="hidden">
              <div className="flex gap-2" onClick={handleTheme}>
                <img
                  src="/icons/light-icon.svg"
                  alt="light mode toggle"
                  className="w-5 hidden dark:block"
                />
                <img
                  src="/icons/moon.png"
                  alt="dark mode toggle"
                  className="w-5 block dark:hidden"
                />
                <p className="md:hidden">light</p>
                <p className="md:hidden">dark</p>
              </div>
            </li>
            <li>
              <Button asChild>
                <Link href={"/#"} className=" ">
                  My CV
                </Link>
              </Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

