"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function ProjectSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [term, setTerm] = useState(searchParams.get("q") || "");

  // Debounce state
  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (term) {
        params.set("q", term);
        params.set("page", "1"); // reset page
      } else {
        params.delete("q");
        params.delete("page");
      }

      router.replace(`${pathname}?${params.toString()}`);
    }, 400); // debounce delay in ms

    return () => clearTimeout(handler);
  }, [term, pathname, router, searchParams]);

  return (
    <input
      type="text"
      placeholder="Search projects..."
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      className="border px-2 py-1 rounded"
    />
  );
}
