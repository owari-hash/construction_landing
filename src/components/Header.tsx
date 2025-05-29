import { useState } from "react";
import Link from "next/link";
import { ROUTES, ANCHORS } from "@/routes/paths";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href={ROUTES.HOME} className="text-2xl font-bold text-primary">
          Legoblock.mn
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link
                href={ROUTES.PRODUCTS}
                className="hover:text-primary transition-colors font-medium"
              >
                Бүтээгдэхүүн
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.PROJECTS}
                className="hover:text-primary transition-colors font-medium"
              >
                Төслүүд
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.ABOUT}
                className="hover:text-primary transition-colors font-medium"
              >
                Бидний тухай
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.BLOG}
                className="hover:text-primary transition-colors font-medium"
              >
                Блог
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.CONTACT}
                className="hover:text-primary transition-colors font-medium"
              >
                Холбоо барих
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-md">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href={ROUTES.PRODUCTS}
                className="block py-2 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Бүтээгдэхүүн
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.PROJECTS}
                className="block py-2 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Төслүүд
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.ABOUT}
                className="block py-2 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Бидний тухай
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.BLOG}
                className="block py-2 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Блог
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.CONTACT}
                className="block py-2 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Холбоо барих
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
