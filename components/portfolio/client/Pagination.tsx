"use client";

import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  searchParams: Record<string, string | undefined>;
}

export default function Pagination({
  currentPage,
  totalPages,
  searchParams,
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
    <div className="flex justify-center mt-10">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        className="flex gap-2"
        pageClassName="px-3 py-2 border rounded"
        activeClassName="bg-blue-500 text-white"
        previousClassName="px-3 py-2 border rounded"
        nextClassName="px-3 py-2 border rounded"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
}
