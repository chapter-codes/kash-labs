import { TProject } from "../types";
import { getProjects, findProjects } from "@/lib/controllers/ProjectController";
import Projects from "../client/Projects";
import ProjectsSections from "../client/ProjectsSections";

async function LoadProjects({
  searchParams,
}: {
  searchParams?: { search: string };
}) {
  console.log("searchParams", searchParams);


  if (searchParams?.search) {
    const projects: TProject[] | undefined = await findProjects({
      title: searchParams.search,
    });
    const resultsLength = projects?.length;
    console.log("found", projects);
    const InlineComponent = (
      <>
        <h2 className="w-full text-xl text-center my-4">
          Search results for "{searchParams.search}"{" "}
          {resultsLength ? `(${resultsLength})` : null}
        </h2>
        {projects?.length == 0 ? (
          <p className="w-full text-center mt-4 mb-10">No results found</p>
        ) : null}
      </>
    );
    //
    return (
      <ProjectsSections projects={projects} inlineComponent={InlineComponent} />
    );
  } else {
    const projects: TProject[] | undefined = await getProjects();
    console.log("res", projects);
    return <ProjectsSections projects={projects} />;
  }
}

export default LoadProjects;
