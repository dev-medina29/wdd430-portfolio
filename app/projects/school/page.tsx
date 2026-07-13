"use client";

import { useEffect, useState } from "react";
import ProjectList from "@/components/ProjectList";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function SchoolProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects?type=school")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setProjects([]));
  }, []);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">School Projects.</h2>
      <p className="text-lg text-gray-700">
        These projects showcase the coursework and hands-on assignments
        completed during my academic studies.
      </p>
      <ProjectList projects={projects} />
    </section>
  );
}
