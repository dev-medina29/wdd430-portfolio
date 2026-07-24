// lib/projects-db.ts
import { sql } from "@vercel/postgres";

export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

// export async function getProjects(type?: string | null): Promise<Project[]> {
//   if (type) {
//     const { rows } = await sql<Project>`
//       SELECT * FROM projects WHERE type = ${type} ORDER BY id
//     `;
//     return rows;
//   }
//   const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
//   return rows;
// }
export async function getProjects({
  query,
  page,
  limit = 10,
}: {
  query?: string | null;
  page?: number;
  limit?: number;
}): Promise<Project[]> {
  const offset = ((page ?? 1) - 1) * limit;

  if (query) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects
      WHERE title ILIKE ${"%" + query + "%"}
      ORDER BY id
      LIMIT ${limit} OFFSET ${offset}
    `;
    return rows;
  }

  const { rows } = await sql<Project>`
    SELECT * FROM projects
    ORDER BY id
    LIMIT ${limit} OFFSET ${offset}
  `;
  return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
  return rows[0] ?? null;
}

export async function fetchFilteredProjects({
  query,
  page,
  limit = 10,
}: {
  query?: string | null;
  page?: number;
  limit?: number;
}): Promise<Project[]> {
  const offset = ((page ?? 1) - 1) * limit;

  if (query) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects
      WHERE title ILIKE ${"%" + query + "%"}
         OR description ILIKE ${"%" + query + "%"}
      ORDER BY id
      LIMIT ${limit} OFFSET ${offset}
    `;
    return rows;
  }

  const { rows } = await sql<Project>`
    SELECT * FROM projects
    ORDER BY id
    LIMIT ${limit} OFFSET ${offset}
  `;
  return rows;
}

// Count total projects for pagination
export async function fetchProjectsPages({
  query,
  limit = 10,
}: {
  query?: string | null;
  limit?: number;
}): Promise<number> {
  if (query) {
    const { rows } = await sql<{ count: number }>`
      SELECT COUNT(*)::int AS count
      FROM projects
      WHERE title ILIKE ${"%" + query + "%"}
         OR description ILIKE ${"%" + query + "%"}
    `;
    return Math.ceil(rows[0].count / limit);
  }

  const { rows } = await sql<{ count: number }>`
    SELECT COUNT(*)::int AS count
    FROM projects
  `;
  return Math.ceil(rows[0].count / limit);
}
