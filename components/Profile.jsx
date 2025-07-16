"use client";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function Profile({ session }) {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <div>
      <div className="relative">
        {session ? (
          <button
            onClick={toggleMenu}
            className="flex items-center gap-2 hover:text-blue-800 transition"
          >
            <img
              src={session.user?.image || "/images/profile-pic.webp"}
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span>{session.user?.name?.split(" ")[0] || "User"}</span>
          </button>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
          >
            <UserIcon className="h-5 w-5" />
            Login
          </Link>
        )}

        {open && session && (
          <div
            className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 p-4"
            onMouseLeave={closeMenu}
          >
            <div className="flex items-center gap-2 mb-3">
              <img
                src={session.user?.image || "/images/profile-pic.webp"}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {session.user?.name || "User"}
                </p>
                <p className="text-gray-500 dark:text-gray-300 text-xs">
                  {session.user?.email}
                </p>
              </div>
            </div>

            <form action="/api/auth/signout" method="POST">
              <button
                type="submit"
                className="w-full text-left text-red-600 hover:text-red-800 transition text-sm"
              >
                Logout
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
