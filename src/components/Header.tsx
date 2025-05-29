"use client";

import { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/routes/paths";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-50 py-4 w-full shadow-sm backdrop-blur-sm bg-white/90">
      <div className="container flex justify-between items-center px-4 mx-auto">
        <Link href={ROUTES.HOME} className="text-2xl font-bold text-primary">
          Legoblock.mn
        </Link>

        {/* Mobile menu button */}
        <button
          className="flex items-center p-2 md:hidden"
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
                className="font-medium transition-colors hover:text-primary"
              >
                Бүтээгдэхүүн
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.PROJECTS}
                className="font-medium transition-colors hover:text-primary"
              >
                Төслүүд
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.ABOUT}
                className="font-medium transition-colors hover:text-primary"
              >
                Бидний тухай
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.BLOG}
                className="font-medium transition-colors hover:text-primary"
              >
                Блог
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.CONTACT}
                className="font-medium transition-colors hover:text-primary"
              >
                Холбоо барих
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="px-4 py-4 bg-white shadow-md md:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href={ROUTES.PRODUCTS}
                className="block py-2 font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Бүтээгдэхүүн
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.PROJECTS}
                className="block py-2 font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Төслүүд
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.ABOUT}
                className="block py-2 font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Бидний тухай
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.BLOG}
                className="block py-2 font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Блог
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.CONTACT}
                className="block py-2 font-medium transition-colors hover:text-primary"
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
