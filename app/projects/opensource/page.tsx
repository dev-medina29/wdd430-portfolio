import { getProjects } from "../lib/projects-db";
// // "use client";

// // import { useEffect, useState } from "react";
// import ProjectList from "@/components/ProjectList";

// interface Project {
//   title: string;
//   description: string;
//   technologies: string[];
//   link?: string;
// }

// export default async function OpenSourcePage() {
//   const projects = await getProjects("opensource");
//   return (
//     <section className="space-y-6">
//       <h2 className="text-3xl font-bold mb-4">Open Source Projects</h2>
//       <p className="text-lg text-gray-700">
//         This page presents our open source projects, showcasing initiatives
//         built by our community. You’ll find repositories covering web
//         development, data analysis, and educational tools. Each project includes
//         documentation, contribution guidelines, and links to the source code so
//         you can explore, learn, and collaborate. Whether you’re here to study
//         examples, contribute improvements, or discover new ideas, this
//         collection highlights the spirit of open innovation.
//       </p>
//       <ProjectList projects={projects} />
//     </section>
//   );
// }

import { Suspense } from "react";
import SchoolProjectList from "@/app/ui/school-project-list";
import ProjectCardSkeleton from "@/app/ui/skeletons";
const projects = await getProjects("opensource");
export default function SchoolPage() {
  return (
    <main>
      <h1>School Projects</h1>

      {/* Skeleton renders immediately; list streams in when data is ready */}
      <Suspense fallback={<ProjectCardSkeleton />}>
        <SchoolProjectList projects={projects} />
      </Suspense>
    </main>
  );
}
