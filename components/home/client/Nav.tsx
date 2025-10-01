"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const MobileNavigation = () => {};

export default function Nav({
  placement,
  ariaLabel = "primary navigation.",
}: {
  placement?: "footer";
  ariaLabel?: string;
}) {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    document.startViewTransition(() => {
      document.documentElement.classList.toggle("dark");
    });
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
          onClick={() => setShowMenu((prev) => !prev)}
        />
      </div>
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
        {placement !== "footer" && (
          <>
            <li>
              <div className="flex gap-2" onClick={handleClick}>
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
                <Link href={"/#contact"} className=" ">
                  Contact
                </Link>
              </Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

// "use client";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import * as motion from "motion/react-client";

// const MobileNavigation = ({ showMenu }: { showMenu: boolean }) => {
//   return <motion.div initial={{ top: showMenu ? 0 : "-100%" }}></motion.div>;
// };

// export default function Nav({
//   placement,
//   ariaLabel = "primary navigation.",
// }: {
//   placement?: "footer";
//   ariaLabel?: string;
// }) {
//   const pathname = usePathname();
//   const [showMenu, setShowMenu] = useState(false);

//   const handleClick = () => {
//     document.startViewTransition(() => {
//       document.documentElement.classList.toggle("dark");
//     });
//   };
//   const handleMobileMenu = () => {
//     document.body.classList.toggle("overflow-hidden");
//     setShowMenu((prev) => !prev);
//   };

//   return (
//     <nav className="" aria-label={"primary navigation"}>
//       <div className="md:hidden ">
//         <Image
//           src="/icons/mobile-menu-dark.png"
//           alt="mobile menu icon"
//           width={24}
//           height={24}
//           className="size-6 h-auto"
//           onClick={handleMobileMenu}
//         />
//       </div>
//       <motion.div
//         className={` fixed left-0 top-0  w-full h-screen  bg-background flex flex-col items-center justify-evenly transition-[top] duration-300 `}
//       >
//         <button
//           onClick={handleMobileMenu}
//           className={` md:hidden absolute top-6 right-6`}
//         >
//           <Image
//             src="/icons/cancel.png"
//             alt="close mobile navigation modal."
//             width={24}
//             height={24}
//             className="size-6 h-auto"
//           />
//         </button>
//         <ul className="flex flex-col md:flex-row items-center gap-5">
//           {/* <ul className="hidden  md:flex items-center gap-5"> */}
//           <li>
//             <Link
//               className={`flex items-center gap-0.5 link dark:text-white ${
//                 pathname === "/" ? "active" : ""
//               }`}
//               href="/"
//             >
//               <Image
//                 src="/icons/active.svg"
//                 alt="Logo"
//                 width={10}
//                 height={10}
//                 className={` ${
//                   pathname === "/" ? "visible" : "invisible"
//                 } transition-[visibility] duration-75`}
//               />
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link
//               className={`flex items-center gap-0.5 link dark:text-white ${
//                 pathname === "/dashboard" ? "active" : ""
//               }`}
//               href="/portfolio"
//             >
//               <Image
//                 src="/icons/active.svg"
//                 alt="Logo"
//                 width={10}
//                 height={10}
//                 className={` ${
//                   pathname === "/portfolio" ? "visible" : "invisible"
//                 } transition-[visibility] duration-75`}
//               />
//               Portfolio
//             </Link>
//           </li>
//           {placement !== "footer" && (
//             <>
//               <li>
//                 <div className="flex gap-2" onClick={handleClick}>
//                   <img
//                     src="/icons/light-icon.svg"
//                     alt="light mode toggle"
//                     className="w-5 hidden dark:block"
//                   />
//                   <img
//                     src="/icons/moon.png"
//                     alt="dark mode toggle"
//                     className="w-5 block dark:hidden"
//                   />
//                   <p className="md:hidden">light</p>
//                   <p className="md:hidden">dark</p>
//                 </div>
//               </li>
//               <li>
//                 <Button asChild>
//                   <Link href={"/#contact"} className=" ">
//                     Contact
//                   </Link>
//                 </Button>
//               </li>
//             </>
//           )}
//         </ul>
//         <div id="brand" className="md:hidden flex items-center gap-1">
//           <Image
//             src="/icons/logo.svg"
//             alt="Logo"
//             width={26}
//             height={26}
//             className="size-[26px]"
//           />
//           <img
//             src="/icons/brandname-dark.svg"
//             alt="Brand Name-kash labs."
//             className="w-full hidden dark:block"
//           />
//           <div className="">
//             <img
//               src="/icons/brandname-light.svg"
//               alt="Brand Name-kash labs."
//               className="dark:hidden"
//             />
//           </div>
//         </div>
//       </motion.div>
//     </nav>
//   );
// }
