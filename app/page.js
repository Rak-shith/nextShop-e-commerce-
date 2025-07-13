import { getAllProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Suspense } from "react";
import GlobalLoading from "./loading";
import HeaderSlider from "@/components/HeaderSlider";

export default async function Home() {
  // await new Promise((res) => setTimeout(res, 5000));
  const products = await getAllProducts();

  return (
    <div className="px-6 md:px-16 lg:px-32">
      <HeaderSlider/>
      <Suspense fallback={<GlobalLoading />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id.toString()} product={product} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
