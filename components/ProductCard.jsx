import Image from "next/image"
import Link from "next/link"
import ProductActions from "./ProductActions";

export default function ProductCard({ product }) {

  return (
    <div className="dark:bg-grayDark shadow-md p-4 hover:shadow-lg transition">
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

      <ProductActions productId={product.id} />

      <Link
        href={`/products/${product.id}`}
        className="block text-center text-sm text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  )
}
