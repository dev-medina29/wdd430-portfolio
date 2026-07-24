// import { projects } from "../route";
import { NextResponse } from "next/server";
import { getProjectById } from "../../../projects/lib/projects-db";

// export async function GET(
//   _request: Request,
//   { params }: { params: Promise<{ id: string }> },
// ) {
//   const { id } = await params;
//   const projectId = Number(id);

//   if (!Number.isInteger(projectId) || projectId <= 0) {
//     return Response.json(
//       { error: "Invalid project id. Use a positive integer value." },
//       { status: 400 },
//     );
//   }

//   const project = projects.find((item) => item.id === projectId);

//   if (!project) {
//     return Response.json({ error: "Project not found." }, { status: 404 });
//   }

//   return Response.json(project);
// }

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params; // <-- await here
  const numericId = Number(id);

  if (Number.isNaN(numericId)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  const project = await getProjectById(numericId);

  if (!project) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
