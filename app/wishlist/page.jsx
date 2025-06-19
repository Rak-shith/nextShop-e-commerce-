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
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 && <p>Your wishlist is empty</p>}
      <ul>
        {wishlist.map((item, index) => (
          <li key={`${item.id}-${index}`} className="mb-3 flex justify-between border-b pb-2">
            <div>
              <p>{item.title}</p>
              <p className="text-sm text-gray-500">${item.price}</p>
            </div>
            <button onClick={() => removeFromWishlist(item.id)} className="text-red-500">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
