import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-100 text-gray-800 border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col text-center gap-2 sm:gap-0">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight hover:opacity-90 transition">
          NextShop
        </Link>
      </div>
    </header>
  )
}
