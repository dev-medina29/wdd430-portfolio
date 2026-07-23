"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="flex gap-4">
      <Link
        href="/"
        className={pathname === "/" ? "active" : "text-gray-700"}
        aria-current={pathname === "/" ? "page" : undefined}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={pathname === "/about" ? "active" : "text-gray-700"}
        aria-current={pathname === "/about" ? "page" : undefined}
      >
        About
      </Link>

      <Link
        href="/projects"
        className={pathname === "/projects" ? "active" : "text-gray-700"}
        aria-current={pathname === "/projects" ? "page" : undefined}
      >
        Projects
      </Link>

      <Link
        href="/contact"
        className={pathname === "/contact" ? "active" : "text-gray-700"}
        aria-current={pathname === "/contact" ? "page" : undefined}
      >
        Contact Us
      </Link>
    </nav>
  );
}
