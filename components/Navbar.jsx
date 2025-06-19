import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import MobileMenu from './MobileMenu'
import { Suspense } from 'react'

export default async function Navbar() {
  const session = await getServerSession(authOptions)

  return (
    <Suspense>
      <nav className="border-b p-4 shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">Home</Link>
          <MobileMenu session={session} />
        </div>
      </nav>
    </Suspense>
  )
}
