'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterNav() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex items-center gap-5">
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
      </ul>
    </nav>
  );
}
