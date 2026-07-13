import Link from "next/link";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Projects Section</h1>
        <nav className="flex gap-4 text-sm font-medium">
          <Link href="/projects" className="text-blue-600 hover:underline">
            Projects
          </Link>
          <Link href="/projects/settings" className="text-blue-600 hover:underline">
            Projects settings
          </Link>
          <Link className="text-blue-600 hover:underline" href="/projects/opensource">
            OpenSource Projects{" "}
          </Link>
          <Link className="text-blue-600 hover:underline" href="/projects/school">
            School Projects
          </Link>
        </nav>
      </section>

      {children}
    </main>
  );
}
