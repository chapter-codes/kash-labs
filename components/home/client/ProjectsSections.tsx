// "use client";
// import { useState, useEffect } from "react";
// import type { TProject } from "../types";
// import MyPortfolioHeader from "./MyPortfolioHeader";
// // import Projects from "./Projects";
// type  TProjectsSection ={
//    inlineComponent? : React.ReactNode,
//    projects: TProject[] | undefined
// }

// function ProjectsSections({projects, inlineComponent }:TProjectsSection) {
// const [category, setCategory] = useState('all')
// const [newProjects, setNewProjects ] = useState<TProject[] | undefined>(projects)
// const [submitting, setSubmitting] = useState(false);


// useEffect(()=>{
//   setSubmitting(false)
// }, [projects])


//   return (
//     <>
//       <MyPortfolioHeader
//         category={category}
//         setCategory={setCategory}
//         // setNewProjects={setNewProjects}
//         setSubmitting={setSubmitting}
//       />
//       <section>
//         {inlineComponent}
//       </section>
//       {/* <Projects
//         projects={projects}
//         category={category}
//         submitting={submitting}
//       /> */}
//     </>
//   );
// }

// export default ProjectsSections