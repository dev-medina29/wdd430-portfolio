import ProjectCardSkeleton from "./skeletons";
import ProjectList from "@/components/ProjectList";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface SchoolProjectListProps {
  projects: Project[];
  isLoading?: boolean;
}

export default async function SchoolProjectList({
  projects,
  isLoading,
}: SchoolProjectListProps) {
  if (isLoading) {
    // Show skeletons while loading
    return (
      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  // Simulate a delay (optional)
  // await new Promise((res) => setTimeout(res, 2000));

  // Delegate rendering to ProjectList for consistent card layout
  return <ProjectList projects={projects} />;
}
