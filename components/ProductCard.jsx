"use client"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { useWishlist } from "@/context/WishlistContext"
import { handleAddCart, handleAddWishlist } from "@/lib/cartWishlistHelpers"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { addToWishlist } = useWishlist()

  return (
    <div className="bg-grayDark shadow-md p-4 hover:shadow-lg transition">
      {/* Product Image */}
      <div className="w-full aspect-square overflow-hidden rounded mb-4 flex items-center justify-center bg-gray-100">
         <Link
        href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          loading="lazy"
          className="object-contain h-full"
        />
        </Link>
      </div>

      {/* Product Info */}
      <h3 className="text-lg font-semibold text-white-800 truncate">{product.title}</h3>
      <p className="text-blue-400 font-bold text-xl mt-1 mb-3">${product.price}</p>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 mb-2">
        <button
          onClick={() => handleAddCart(product, addToCart)}
          className="flex-1 bg-accent text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Add to Cart
        </button>

        <button
          onClick={() => handleAddWishlist(product, addToWishlist)}
          className="flex-1 border border-blue-500 text-blue-500 text-sm px-4 py-2 rounded hover:bg-blue-50 transition"
        >
          ❤️ Wishlist
        </button>
      </div>

      <Link
        href={`/products/${product.id}`}
        className="block text-center text-sm text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  )
}
