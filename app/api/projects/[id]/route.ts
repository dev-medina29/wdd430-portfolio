import { projects } from "../route";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const projectId = Number(id);

  if (!Number.isInteger(projectId) || projectId <= 0) {
    return Response.json(
      { error: "Invalid project id. Use a positive integer value." },
      { status: 400 },
    );
  }

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return Response.json({ error: "Project not found." }, { status: 404 });
  }

  return Response.json(project);
}
