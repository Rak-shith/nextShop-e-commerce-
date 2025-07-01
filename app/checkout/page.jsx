'use client'
import LocationSelector from '@/components/LocationSelector'
import { useEffect, useState } from 'react'

export default function CheckoutPage() {
  const [cart, setCart] = useState([])
  const [orderResult, setOrderResult] = useState(null)

  const fetchCart = async () => {
    const res = await fetch('/api/cart')
    const data = await res.json()
    setCart(data)
  }

  const handleCheckout = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cart,
        customer: {
          name: 'Guest User',
          email: 'guest@example.com',
        },
      }),
    })

    const result = await res.json()
    setOrderResult(result)
  }

  useEffect(() => {
    fetchCart()
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 && (
        <p className="text-white-600 text-lg">🛒 Your cart is empty.</p>
      )}

      {orderResult ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow mb-6">
          <p className="font-semibold">{orderResult.message}</p>
          <p className="text-sm mt-1">Order ID: {orderResult.order.id}</p>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-white-200 mb-6 bg-grayDark rounded-md">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center p-4">
                <span className="text-lg font-semibold text-white-800">{item.title}</span>
                <span className="text-white-600 text-sm">${item.price}</span>
              </li>
            ))}
          </ul>

          <div className="mb-6">
            <LocationSelector />
          </div>

          <button
            onClick={handleCheckout}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow transition"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  )
}
