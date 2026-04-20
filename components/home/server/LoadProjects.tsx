import { TProject } from "../types";
import { getProjects, findProjects } from "@/lib/controllers/ProjectController";
import ProjectsSections from "../client/ProjectsSections";
import { SearchParams } from "@/types/homeTypes";
import axios from "axios";

async function LoadProjects({ searchParams }: { searchParams?: SearchParams }) {
  // const params = await searchParams()
  const params = new URLSearchParams(searchParams);
  // const url = new URL("/api/projects"+ '?' + params.toString());
  console.log("url", "/api/projects" + "?" + params.toString());
  console.log('proc', process.env.NEXT_PUBLIC_API_URL);
  const api = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`)
  console.log('api', api);

  if (searchParams?.search?.length) {
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
