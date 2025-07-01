'use client'
import { useEffect, useState } from 'react'

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([])

  const fetchWishlist = async () => {
    const res = await fetch('/api/wishlist')
    const data = await res.json()
    setWishlist(data)
  }

  const removeFromWishlist = async (id) => {
    await fetch('/api/wishlist', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    fetchWishlist()
  }

  useEffect(() => {
    fetchWishlist()
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-white-600 text-lg">
          🗒️ Your wishlist is empty.
        </div>
      ) : (
        <ul className="space-y-4">
          {wishlist.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              className="flex justify-between items-center bg-grayDark rounded-md p-4 shadow-sm hover:shadow-md transition"
            >
              <div>
                <p className="text-lg font-medium text-white-800">{item.title}</p>
                <p className="text-sm text-white-500 mt-1">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="text-sm text-red-500 hover:bg-red-50 border border-red-500 px-3 py-1 rounded transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
