// "use client";

// // library
// import React, { ReactNode, useEffect, useState } from "react";
// import Link from "next/link";
// import { useSearchParams, usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";

// // actions
// import { handleSearch } from "@/app/portfolio/actions";

// // components
// import Section from "@/components/common/Section";

// // type
// import type { TProject } from "../types";
// import Image from "next/image";
// import ProjectCard from "../server/ProjectCard";
// import Search from "@/components/portfolio/client/Search";
// import { useActionState } from "react";
// import { TSearchFormState } from "@/app/portfolio/types";
// import Spinner from "@/components/common/Spinner";

// type ProjectsProps = {
//   projects: TProject[] | undefined;
//   category: string;
//   submitting: boolean,
// };

// export default function Projects({ projects, category, submitting }: ProjectsProps) {
//   const pathname = usePathname()

//   const filteredProjects =
//     projects?.filter((project) =>
//       category == "all" || !category
//         ? true
//         : project.category.some((cat) => {
//             const isValid = cat.toLowerCase().split(" ").includes(category);
//             return isValid;
//           })
//     ) || [];

//   // const initialState: TSearchFormState = {
//   //   success: false,
//   //   data: [],
//   // };
//   // const [state, action, pending] = useActionState<TSearchFormState, FormData>(
//   //   handleSearch,
//   //   initialState
//   // );
//   // console.log("aearcchstate", state);

//   // const [keyEntered, setKeyEntered] = useState(false);

//   // useEffect(() => {
//   //   if (keyEntered && state.data) {
//   //   }
//   // }, [keyEntered, state]);

//   return (
//     <>
//       {submitting && (
//         <section className="">
//           <Spinner />
//         </section>
//       )}

//       <section className={`grid md:grid-cols-2 gap-x-5 gap-y-10`}>
//         <ProjectCard project={filteredProjects} />
//       </section>

//       {pathname != "/portfolio" && (
//         <section className=" flex justify-center mt-12">
//           <Button asChild className="w-full max-w-[500px] md:max-w-fit ">
//             <Link href={"/portfolio"}>View more projects</Link>
//           </Button>
//         </section>
//       )}
//     </>
//   );
// }
