import ProductActions from '@/components/ProductActions'
import { getProductById } from '@/app/server/productAction'
import Image from 'next/image'

export default async function ProductDetail({ params }) {
  const product = await getProductById(params.id)

  if (!product) {
    return <div className="p-4 text-red-500 text-lg">Product not found.</div>
  }

  return (
    <div className="max-w-5xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex justify-center items-center">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="rounded-lg shadow-md object-contain"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-600 text-lg mb-6">{product.description}</p>
        <p className="text-2xl font-semibold text-blue-600 mb-6">${product.price}</p>

        <ProductActions product={product} />
      </div>
    </div>
  )
}
