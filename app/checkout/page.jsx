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
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Checkout</h1>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {orderResult ? (
        <div className="text-green-600">
          <p>{orderResult.message}</p>
          <p>Order ID: {orderResult.order.id}</p>
        </div>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="mb-2">
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>
          <LocationSelector/>
          <button
            onClick={handleCheckout}
            className="bg-blue-500 text-white px-4 py-2 mt-4"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  )
}
