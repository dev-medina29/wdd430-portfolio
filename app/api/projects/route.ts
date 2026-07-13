export type ProjectType = "opensource" | "school";

export interface Project {
  id: number;
  title: string;
  type: ProjectType;
  description: string;
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    type: "opensource",
    description: "A personal portfolio built with Next.js and TypeScript.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/example/portfolio",
  },
  {
    id: 2,
    title: "Weather App",
    type: "school",
    description:
      "A project completed during coursework to practice API integration.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://github.com/example/weather-app",
  },
  {
    id: 3,
    title: "Open Source Dashboard",
    type: "opensource",
    description: "A collaborative dashboard project with reusable components.",
    technologies: ["Next.js", "React", "TypeScript"],
    link: "https://github.com/example/dashboard",
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type")?.toLowerCase();

  if (type && type !== "opensource" && type !== "school") {
    return Response.json(
      {
        error:
          "Unsupported project type. Use 'opensource' or 'school' as the type query value.",
      },
      { status: 400 },
    );
  }

  const filteredProjects = type
    ? projects.filter((project) => project.type === type)
    : projects;

  return Response.json(filteredProjects);
}
