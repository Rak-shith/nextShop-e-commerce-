"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { ModeToggle } from "./ThemeSetter";
import Profile from "./Profile";

export default function MobileMenu({ session }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/cart", label: "Cart" },
    { href: "/wishlist", label: "Wishlist" },
    { href: "/checkout", label: "Checkout" },
  ];  

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center text-white-700 font-medium">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-blue-600 transition"
          >
            {link.label}
          </Link>
        ))}
       <Profile session={session}/>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-grayDark border-t shadow-md z-50 md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4  font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 transition"
              >
                {link.label}
              </Link>
            ))}
           <Profile session={session}/>
            <ModeToggle />
          </div>
        </div>
      )}
    </>
  );
}
