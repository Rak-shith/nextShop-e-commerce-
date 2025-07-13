"use client";
import { useEffect, useState } from "react";
import LocationSelector from "@/components/LocationSelector";
import toast from "react-hot-toast";
import { placeOrder } from "../server/orderAction";
import { useRouter } from "next/navigation";
import { getAllCartItems } from "../server/cartAction";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchCart = async () => {
    try {
      const items = await getAllCartItems();
      setCart(items);
    } catch (err) {
      console.error("[FETCH_CART_ERROR]", err);
    }
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const result = await placeOrder(cart, {
        name: "Guest User",
        email: "guest@example.com",
      });
      toast.success("Order placed successfully!");
      if (result?.order?.id) {
        router.push(`/order-success/${result.order.id}`);
      }
    } catch (error) {
      toast.error("Checkout failed");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-3 mb-6">
            {cart.map((item) => (
              <li key={item.id} className="bg-grayDark p-3 rounded">
                {item.title} - ₹{item.price}
              </li>
            ))}
          </ul>

          <p className="text-lg font-semibold mb-4">Total: ₹{total}</p>

          <LocationSelector />

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="bg-blue-600 text-white mt-4 px-5 py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </>
      )}
    </div>
  );
}
