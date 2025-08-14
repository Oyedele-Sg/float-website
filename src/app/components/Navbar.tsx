"use client";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 bg-white z-20 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a
          href="#"
          className="flex items-center gap-2"
          aria-label="FloatTransfer home"
        >
          <Image
            src="/assets/logo.svg"
            alt="Float Logo"
            width={91}
            height={42}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-red-700 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-red-700 transition-colors">
            About Us
          </a>
          <a href="#contact" className="hover:text-red-700 transition-colors">
            Contact Us
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-gray-100 bg-white"
        >
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm font-medium">
            <a
              href="#"
              className="py-2 hover:text-red-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="py-2 hover:text-red-700"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="py-2 hover:text-red-700"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
