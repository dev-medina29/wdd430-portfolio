// import ProjectList from "@/components/ProjectList";
// import { getProjects } from "./lib/projects-db";
// interface Project {
//   title: string;
//   description: string;
//   technologies: string[];
//   link?: string;
// }

// export default async function ProjectsPage() {
//   const projects = await getProjects();
//   return (
//     <section className="space-y-6">
//       <h1 className="text-3xl font-bold mb-4">Projects Overview</h1>
//       <p className="text-lg text-gray-700">
//         Explore the projects featured in my portfolio.
//       </p>
//       <ProjectList projects={projects} />
//     </section>
//   );
// }

import ProjectList from "@/components/ProjectList";
import { getProjects } from "./lib/projects-db";
import Pagination from "@/components/Pagination";
import { fetchProjectsPages } from "./lib/projects-db";
import { fetchFilteredProjects } from "./lib/projects-db";
interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: { query?: string; page?: string };
}) {
  const params = await searchParams;
  const query = params.query ?? null;
  const page = params.page ? Number(searchParams.page) : 1;

  // Currently getProjects only supports filtering by type
  const projects = await fetchFilteredProjects({ query, page });
  const totalPages = await fetchProjectsPages({ query, limit: 10 });
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">Projects Overview</h1>
      <p className="text-lg text-gray-700">
        Explore the projects featured in my portfolio.
      </p>
      <ProjectList projects={projects} />
      <Pagination totalPages={totalPages} />
    </section>
  );
}
