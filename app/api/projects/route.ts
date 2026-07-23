import { NextRequest, NextResponse } from 'next/server';
import { getProjects } from '../../projects/lib/projects-db';
export type ProjectType = "opensource" | "school";

export interface Project {
  id: number;
  title: string;
  type: ProjectType;
  description: string;
  technologies: string[];
  link?: string;
}

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const type = searchParams.get("type")?.toLowerCase();

//   if (type && type !== "opensource" && type !== "school") {
//     return Response.json(
//       {
//         error:
//           "Unsupported project type. Use 'opensource' or 'school' as the type query value.",
//       },
//       { status: 400 },
//     );
//   }

//   const filteredProjects = type ? projects.filter((project) => project.type === type): projects;
//   return Response.json(filteredProjects);
// }

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const projects = await getProjects(type);
  return NextResponse.json(projects);
}