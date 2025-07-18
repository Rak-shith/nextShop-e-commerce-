"use client";

import { addToCartItem } from "@/app/server/cartAction";
import { addTowishlistItem } from "@/app/server/wishlistAction";
import { useTransition } from "react";
import toast from "react-hot-toast";

export default function ProductActions({ productId }) {
  const [isCartPending, startCartTransition] = useTransition();
  const [isWishlistPending, startWishlistTransition] = useTransition();

  const handleAddCart = () => {
    startCartTransition(async () => {
      try {
        const res = await addToCartItem({ productId });
        if (res.message === "Already in cart") {
          toast.error("Already in cart");
        } else {
          toast.success("Item added to cart");
        }
      } catch (error) {
        toast.error("Error adding to cart");
        console.error("Cart Error:", error);
      }
    });
  };

  const handleAddWishlist = () => {
    startWishlistTransition(async () => {
      try {
        const res = await addTowishlistItem({ productId });
        if (res.message === "Already in wishlist") {
          toast.error("Already in wishlist");
        } else {
          toast.success("Item added to wishlist");
        }
      } catch (error) {
        toast.error("Error adding to wishlist");
        console.error("Wishlist Error:", error);
      }
    });
  };

  return (
    <div className="flex gap-4 my-6">
      <button
        onClick={handleAddCart}
        disabled={isCartPending}
        className="flex-1 border border-blue-500 bg-blue-600 text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {isCartPending ? "Adding..." : "Add to Cart"}
      </button>
      <button
        onClick={handleAddWishlist}
        disabled={isWishlistPending}
        className="flex-1 border border-blue-500 text-blue-500 text-sm px-4 py-2 rounded hover:bg-blue-100 transition"
      >
        {isWishlistPending ? "Adding..." : "❤️ Wishlist"}
      </button>
    </div>
  );
}
