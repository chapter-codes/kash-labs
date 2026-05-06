// lib
import { Metadata } from "next";

//components
import CustomDiv from "@/components/common/CustomDiv";
import Section from "@/components/common/Section";
import LetsWorkTogether from "@/components/home/server/LetsWorkTogether";
import SearchFilterSort from "@/components/home/client/SearchFilterSort";
import { Project } from "@/types/project";
import { client } from "@/sanity/client";
import ProjectCard from "@/components/home/server/ProjectCard";
import Header from "@/components/home/server/Header";
import Pagination from "@/components/portfolio/client/Pagination";
import { AnimateSection } from "@/components/common/AnimateUI";
import { AnimatePresence } from "motion/react";

export const metadata: Metadata = {
  title: "kashLabs | Portfolio",
  description: "My Portfolio",
};

interface PortfolioSearchParams extends Record<string, string | undefined> {
  search?: string;
  category?: string;
  sort?: string;
  page?: string;
}

const ITEMS_PER_PAGE = 20;

const buildProjectQuery = (
  search?: string,
  category?: string,
  sort?: string,
  page: number = 1,
) => {
  const filters = ["_type == 'project'", "defined(projectName)"];
  const params: Record<string, string> = {};

  if (search?.trim()) {
    filters.push(
      "(projectName match $searchTerm || projectDescription match $searchTerm || tags[] match $searchTerm)",
    );
    params.searchTerm = `*${search.trim()}*`;
  }

  if (category && category !== "all") {
    if (category === "ui-ux") {
      filters.push("tags[] match 'Website Design'");
    } else if (category === "graphic") {
      filters.push("tags[] match 'Flyer Design'");
    } else if (category === "branding") {
      filters.push("(tags[] match 'Logo' || tags[] match 'Logo & Branding')");
    }
  }

  let query = `*[
    ${filters.join(" &&\n    ")}
  ] {projectName, tags, image, projectLink, projectDescription, _createdAt}`;

  if (sort === "latest") {
    query += " | order(_createdAt desc)";
  } else if (sort === "oldest") {
    query += " | order(_createdAt asc)";
  } else if (sort === "most-popular") {
    query += " | order(projectName asc)";
  }

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE - 1;
  query += ` [${start}...${end}]`;

  const countQuery = `count(*[${filters.join(" && ")}])`;

  return { query, countQuery, params };
};

export default async function Portfolio({
  searchParams,
}: {
  searchParams: Promise<PortfolioSearchParams>;
}) {
  const resolvedSearchParams = await searchParams;
  const { search, category, sort, page } = resolvedSearchParams;
  const currentPage = parseInt(page || "1", 10);
  const { query, countQuery, params } = buildProjectQuery(
    search,
    category,
    sort,
    currentPage,
  );
  const projects: Project[] = await client.fetch(query, params);
  const totalCount: number = await client.fetch(countQuery, params);
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  return (
    <>
      <Header animate={false} />
      <Section
        title="My Portfolio"
        description="Showcasing my best work across different industries"
        style="w-full flex flex-col items-start md:items-center"
      />
      <SearchFilterSort />
      <section className="grid md:grid-cols-2 justify-items-center justify-center gap-x-5 gap-y-10 custom-sizing">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={project.projectName + index} />
        ))}
      </section>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          searchParams={resolvedSearchParams}
        />
      )}
      <LetsWorkTogether />
    </>
  );
}
