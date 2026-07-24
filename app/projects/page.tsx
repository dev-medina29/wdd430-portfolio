// "use client";

// import { useEffect, useState } from "react";
import ProjectList from "@/components/ProjectList";
import { getProjects } from "./lib/projects-db";
interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default async function ProjectsPage() {
  //   const [projects, setProjects] = useState<Project[]>([]);

  //   useEffect(() => {
  //     fetch("/api/projects")
  //       .then((res) => res.json())
  //       .then((data) => setProjects(data))
  //       .catch(() => setProjects([]));
  //   }, []);
  const projects = await getProjects();
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">Projects Overview</h1>
      <p className="text-lg text-gray-700">
        Explore the projects featured in my portfolio.
      </p>
      <ProjectList projects={projects} />
    </section>
  );
}
