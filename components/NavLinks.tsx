"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
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
