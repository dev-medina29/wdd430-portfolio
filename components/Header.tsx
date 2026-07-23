import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      {/* Portfolio Title */}
      <div className="text-center py-6">
        <h1
          id="header-title"
          className="text-4xl md:text-5xl font-extrabold tracking-wide"
        >
          Medina MBEDI PORTFOLIO
        </h1>
      </div>

      {/* Navigation Bar */}
      <nav
        aria-label="Primary Navigation"
        className="bg-blue-700 py-4 flex justify-center space-x-10 text-lg font-medium"
      >
        <NavLinks />
      </nav>
    </header>
  );
}
