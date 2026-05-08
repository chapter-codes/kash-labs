"use client";

import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  searchParams: Record<string, string | undefined>;
  projectCount: number;
  itemsPerPage: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  searchParams,
  projectCount,
  itemsPerPage,
}: PaginationProps) {
  const router = useRouter();

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1;
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value && key !== "page") params.set(key, value);
    });
    params.set("page", newPage.toString());
    router.push(`/portfolio?${params.toString()}`);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row  justify-between items-center gap-10 md:gap-0 mt-10 md:mt-20 custom-sizing">
      <div className="text-secondary-foreground">
        Showing {(currentPage - 1) * itemsPerPage + 1}-
        {Math.min(currentPage * itemsPerPage, projectCount)} of {projectCount}{" "}
        projects
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<ChevronRight className="w-6" />}
        previousLabel={<ChevronLeft className="w-6" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        forcePage={currentPage - 1}
        className="flex items-center border border-border rounded-[5px]"
        pageClassName="h-[2.8125rem] bg-card-bg "
        pageLinkClassName="inline-flex items-center justify-center h-full min-w-10    border-r border-border  text-sm font-medium text-slate-200 transition hover:border-slate-400 hover:text-white hover:scale-105"
        activeClassName="bg-btn-bg border-r border-btn-bg text-white "
        activeLinkClassName="bg-btn-bg text-foreground"
        breakClassName="flex items-center justify-center h-full w-10 bg-card-bg border-r border-border "
        breakLinkClassName="w-full text-center"
        previousClassName="h-full  bg-card-bg flex justify-center items-center border-r border-border"
        previousLinkClassName="h-[2.8125rem] w-10 flex justify-center items-center text-sm font-medium transition hover:border-slate-400 hover:text-white "
        nextClassName="h-full bg-card-bg "
        nextLinkClassName="h-[2.8125rem]  w-10 flex justify-center items-center text-sm font-medium transition hover:border-slate-400 hover:text-white"
        disabledClassName="opacity-40 cursor-not-allowed"
      />
    </div>
  );
}
