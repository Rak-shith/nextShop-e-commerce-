'use client'

import { handleAddCart, handleAddWishlist } from '@/lib/cartWishlistHelpers'
import { useCart } from '@/context/CartContext'
import { useWishlist } from '@/context/WishlistContext'

export default function ProductActions({ product }) {
  const { addToCart } = useCart()
  const { addToWishlist } = useWishlist()

  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={() => handleAddCart(product, addToCart)}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
      <button
        onClick={() => handleAddWishlist(product, addToWishlist)}
        className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100 transition"
      >
        Add to Wishlist
      </button>
    </div>
  )
}
