'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, UserIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'

export default function MobileMenu({ session }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '/cart', label: 'Cart' },
    { href: '/wishlist', label: 'Wishlist' },
    { href: '/checkout', label: 'Checkout' },
  ]

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
        {links.map(link => (
          <Link key={link.href} href={link.href} className="hover:text-blue-600 transition">
            {link.label}
          </Link>
        ))}

        {session ? (
          <form action="/api/auth/signout" method="POST">
            <button type="submit" className="text-red-600 hover:text-red-800 transition" title="Logout">
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
            </button>
          </form>
        ) : (
          <Link href="/login" className="text-blue-600 hover:text-blue-800 transition" title="Login">
            <UserIcon className="h-5 w-5" />
          </Link>
        )}
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t shadow-md z-50 md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 transition"
              >
                {link.label}
              </Link>
            ))}

            {session ? (
              <form action="/api/auth/signout" method="POST">
                <button
                  type="submit"
                  className="flex items-center gap-2 text-red-600 hover:text-red-800 transition"
                >
                  <ArrowRightOnRectangleIcon className="h-5 w-5" />
                  Logout
                </button>
              </form>
            ) : (
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
              >
                <UserIcon className="h-5 w-5" />
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  )
}
