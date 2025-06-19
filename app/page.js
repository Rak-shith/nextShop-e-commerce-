import { getAllProducts } from '@/lib/products'
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const products = await getAllProducts()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id.toString()} product={product} />
      ))}
    </div>
  );
}
