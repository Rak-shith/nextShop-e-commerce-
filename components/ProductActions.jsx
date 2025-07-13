'use client'

import { handleAddCart, handleAddWishlist } from '@/lib/cartWishlistHelpers'

export default function ProductActions({ product }) {

  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={() => handleAddCart(product)}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
      <button
        onClick={() => handleAddWishlist(product)}
        className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100 transition"
      >
        Add to Wishlist
      </button>
    </div>
  )
}
