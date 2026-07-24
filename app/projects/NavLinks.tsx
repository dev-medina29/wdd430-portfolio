"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: "/projects", label: "Projects" },
    { href: "/projects/settings", label: "Projects Settings" },
    { href: "/projects/opensource", label: "OpenSource Projects" },
    { href: "/projects/school", label: "School Projects" },
  ];

  return (
    <nav
      aria-label="Projects Navigation"
      className="flex gap-4 text-sm font-medium"
    >
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`relative px-2 py-1 transition-colors duration-300 
              ${isActive ? "text-blue-600" : "text-blue-600 hover:text-blue-800"}
            `}
            aria-current={isActive ? "page" : undefined}
          >
            {label}
            {/* underline effect */}
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-full bg-white transform scale-x-0 transition-transform duration-300 ${
                isActive ? "scale-x-100" : "hover:scale-x-100"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
