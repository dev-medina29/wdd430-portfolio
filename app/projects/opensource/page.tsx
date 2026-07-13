"use client";

import { useEffect, useState } from "react";
import ProjectList from "@/components/ProjectList";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function OpenSourcePage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects?type=opensource")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setProjects([]));
  }, []);

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold mb-4">Open Source Projects</h2>
      <p className="text-lg text-gray-700">
        This page presents our open source projects, showcasing initiatives
        built by our community. You’ll find repositories covering web
        development, data analysis, and educational tools. Each project includes
        documentation, contribution guidelines, and links to the source code so
        you can explore, learn, and collaborate. Whether you’re here to study
        examples, contribute improvements, or discover new ideas, this
        collection highlights the spirit of open innovation.
      </p>
      <ProjectList projects={projects} />
    </section>
  );
}
