// lib
import { Metadata } from "next";

//components
import "@/app/assets/css/smooth-scroll.css";

import Section from "@/components/common/Section";
import LetsWorkTogether from "@/components/home/server/LetsWorkTogether";
import SearchFilterSort from "@/components/home/client/SearchFilterSort";
import { Project } from "@/types/project";
import { client } from "@/sanity/client";
import ProjectCard from "@/components/home/server/ProjectCard";
import Header from "@/components/home/server/Header";
import Pagination from "@/components/portfolio/client/Pagination";
import * as motion from "motion/react-client";

export const metadata: Metadata = {
  title: "kashLabs | Portfolio",
  description:
    "Explore KashLabs’ portfolio of high-impact web, branding, and UX design work.",
  keywords: [
    "portfolio",
    "UI/UX design",
    "branding",
    "graphic design",
    "web design",
    "KashLabs",
  ],
  openGraph: {
    title: "kashLabs | Portfolio",
    description:
      "Explore KashLabs’ portfolio of high-impact web, branding, and UX design work.",
    type: "website",
    siteName: "kashLabs",
    locale: "en_US",
    url: "https://kashlabs.com/portfolio",
    images: [
      {
        url: "/icons/brandname-dark.svg",
        width: 1200,
        height: 630,
        alt: "kashLabs portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "kashLabs | Portfolio",
    description:
      "Explore KashLabs’ portfolio of high-impact web, branding, and UX design work.",
    creator: "@kashlabs",
    images: ["/icons/brandname-dark.svg"],
  },
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

  const kanbanColumns2: Project[][] = [[], []];
  const kanbanColumns3: Project[][] = [[], [], []];

  projects.forEach((project, index) => {
    kanbanColumns2[index % 2].push(project);
    kanbanColumns3[index % 3].push(project);
  });

  return (
    <>
      <Header animate={false} />

      <Section
        title="My Portfolio"
        description="Showcasing my best work across different industries"
        style="w-full flex flex-col items-center text-center "
      />
      <SearchFilterSort />
      {search && (
        <motion.div className="text-lg text-center font-semibold  mb-4 custom-sizing">
          <span className="text-btn-bg">{projects.length}</span> search results
          for <span className="text-btn-bg">"{search}" </span> under
          <span className="text-btn-bg">
            {" "}
            "{category || "all categories"}"{" "}
          </span>
          sorted by
          <span className="text-btn-bg"> "{sort || "default sorting"}"</span>
        </motion.div>
      )}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="custom-sizing mb-10"
      >
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:hidden items-start">
          {kanbanColumns2.map((column, columnIndex) => (
            <div
              key={`md-${columnIndex}`}
              className="flex flex-col gap-6 rounded-[24px]"
            >
              {column.map((project, index) => (
                <ProjectCard
                  project={project}
                  key={`${project.projectName}-${index}`}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="w-full hidden gap-6 lg:grid lg:grid-cols-3 items-start">
          {kanbanColumns3.map((column, columnIndex) => (
            <div
              key={`lg-${columnIndex}`}
              className="flex flex-col gap-6 rounded-[24px]"
            >
              {column.map((project, index) => (
                <ProjectCard
                  project={project}
                  key={`${project.projectName}-${index}`}
                />
              ))}
            </div>
          ))}
        </div>
      </motion.section>
      
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          searchParams={resolvedSearchParams}
          projectCount={totalCount}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      )}
      <LetsWorkTogether />
    </>
  );
}
