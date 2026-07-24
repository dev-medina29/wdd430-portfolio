import Link from "next/link";
import NavLinks from "./NavLinks";
export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Projects Section</h1>
        <NavLinks/>
      </section>

      {children}
    </main>
  );
}
