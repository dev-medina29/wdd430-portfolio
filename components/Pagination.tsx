"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

type PaginationProps = {
  totalPages: number;
};

export default function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  // Helper to construct page URLs
  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex gap-4 items-center">
      {currentPage > 1 && (
        <Link
          href={createPageURL(currentPage - 1)}
          className="px-3 py-1 border rounded"
        >
          Prev
        </Link>
      )}

      <span>
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link
          href={createPageURL(currentPage + 1)}
          className="px-3 py-1 border rounded"
        >
          Next
        </Link>
      )}
    </div>
  );
}
