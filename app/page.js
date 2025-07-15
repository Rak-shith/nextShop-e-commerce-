import { getAllProducts } from "@/app/server/productAction";
import ProductCard from "@/components/ProductCard";
import { Suspense } from "react";
import GlobalLoading from "./loading";
import HeaderSlider from "@/components/HeaderSlider";
import EmailSubscription from "@/components/EmailSubscription";

export default async function Home() {
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
      <EmailSubscription/>
    </div>
  );
}
