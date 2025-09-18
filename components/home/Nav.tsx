'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'


export default function Links() {
  const pathname = usePathname()
  console.log(pathname)

  const handleClick = () => {
    document.startViewTransition(() => {
      document.documentElement.classList.toggle("dark");
    });
  };
 
  return (
    <nav className="">
      <ul className="flex items-center gap-5">
        <li>
          <Link
            className={`flex items-center gap-0.5 link ${
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
            className={`flex items-center gap-0.5 link ${
              pathname === "/dashboard" ? "active" : ""
            }`}
            href="/portfolio"
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
          <div className="flex gap-2" onClick={handleClick}>
            <img
              src="/icons/light-icon.svg"
              alt="light mode toggle"
              className="w-5 hidden dark:block"
            />
            <img
              src="/icons/moon.svg"
              alt="dark mode toggle"
              className="w-5 block dark:hidden"
            />
            <p className="md:hidden">light</p>
            <p className="md:hidden">dark</p>
          </div>
        </li>
        <li>
          <Button asChild>
            <Link
              href={"/#about"}
              className=" "
            >
              Contact
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}