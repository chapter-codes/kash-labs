'use client'

import Image from 'next/image';
import {usePathname} from 'next/navigation'
import Link from "next/link";
import {Button} from '@/components/ui/button'

type MobileNavigationProps = {
  showMenu: boolean;
  handleMobileMenu: () => void;
  handleTheme: () => void;
};


export default function MobileNavigation({showMenu, handleMobileMenu, handleTheme}: MobileNavigationProps) {

    const pathname = usePathname()

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
        <Image
          src="/icons/cancel.png"
          alt="close mobile navigation modal."
          width={24}
          height={24}
          className="size-6 h-auto"
        />
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
        <li>
          <div className="flex gap-2" onClick={handleTheme}>
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
          <Button asChild>
            <Link href={"/#contact"} className=" ">
              Contact
            </Link>
          </Button>
        </li>
      </ul>
      <div id="brand" className="md:hidden flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          alt="Logo"
          width={26}
          height={26}
          className="size-[26px]"
        />
        <img
          src="/icons/brandname-dark.svg"
          alt="Brand Name-kash labs."
          className="w-full hidden dark:block"
        />
        <div className="">
          <img
            src="/icons/brandname-light.svg"
            alt="Brand Name-kash labs."
            className="dark:hidden"
          />
        </div>
      </div>
    </ul>
  );
}
