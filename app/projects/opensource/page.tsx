import { getProjects } from "../lib/projects-db";
import { Suspense } from "react";
import SchoolProjectList from "@/app/ui/school-project-list";
import ProjectCardSkeleton from "@/app/ui/skeletons";
import { fetchFilteredProjects } from "../lib/projects-db";
import { fetchProjectsPages } from "../lib/projects-db";
import Pagination from "@/components/Pagination";

export default async function SchoolPage({
  searchParams,
}: {
  searchParams: { query?: string; page?: string };
}) {
  const params = await searchParams;
  const query = params.query ?? null;
  const page = params.page ? Number(searchParams.page) : 1;

  // Adjusted getProjects to accept query + page
  const projects = await fetchFilteredProjects({ query, page });
  const totalPages = await fetchProjectsPages({ query, limit: 10 });
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">School Projects</h1>
      <p className="text-lg text-gray-700">
        Browse through the projects with search and pagination.
      </p>

      <Suspense fallback={<ProjectCardSkeleton />}>
        <SchoolProjectList projects={projects} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </section>
  );
}
