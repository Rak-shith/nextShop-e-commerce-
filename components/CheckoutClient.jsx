'use client'

import { placeOrder } from '@/app/server/orderAction';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function CheckoutClient( { cart }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
    }finally {
      setLoading(false)
    }
  };

  return (
    <div>
       <button
          onClick={handleCheckout}
          disabled={loading}
          className="bg-blue-600 text-white mt-4 px-5 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
    </div>
  )
}

export default CheckoutClient