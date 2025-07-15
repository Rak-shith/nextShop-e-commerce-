import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MobileMenu from "./MobileMenu";
import { Suspense } from "react";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <Suspense>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50 dark:bg-grayDark light:bg-stone-50 border-b p-4 shadow px-6 md:px-16 lg:px-32 mb-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 tracking-tight hover:opacity-90"
          >
            NextShop
          </Link>
          <MobileMenu session={session} />
        </div>
      </nav>
    </Suspense>
  );
}
