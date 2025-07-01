'use client'
import { useEffect, useState } from 'react'

export default function CartPage() {
  const [cart, setCart] = useState([])

  const fetchCart = async () => {
    const res = await fetch('/api/cart')
    const data = await res.json()
    setCart(data)
  }

  const removeFromCart = async (id) => {
    await fetch('/api/cart', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    fetchCart()
  }

  useEffect(() => {
    fetchCart()
  }, [])

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-white-600 text-lg">🛒 Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex items-center justify-between rounded-lg p-4 shadow-sm bg-grayDark hover:shadow-md transition space-y-4"
            >
              <div>
                <h2 className="text-lg font-semibold text-white-800">{item.title}</h2>
                <p className="text-white-600 text-sm">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-red-50 transition text-sm"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center border-t pt-4 mt-6">
            <p className="text-xl font-semibold">Total:</p>
            <p className="text-xl font-bold text-blue-600">${total}</p>
          </div>
        </div>
      )}
    </div>
  )
}
