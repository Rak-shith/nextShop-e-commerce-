import { getOrderById } from '@/app/server/orderAction'
import Link from 'next/link'

export default async function OrderSuccess({ params }) {
  const order = await getOrderById(params.id)

  if (!order) {
    return <div className="text-center py-20 text-white">Loading your order details...</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-grayDark rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Thank you for your order!</h1>
      <p className="text-white-600 mb-6">Your order <span className="font-semibold text-white">#{order.id}</span> has been placed successfully.</p>

      <div className="border border-dark rounded p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">🧾 Order Summary</h2>
        <ul className="divide-y divide-gray-200">
          {order.items.map((item, index) => (
            <li key={index} className="py-2 flex justify-between">
              <span>{item.title}</span>
              <span>${item.price} x {item.quantity || 1}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span className="text-blue-600">${order.total}</span>
        </div>
      </div>

      <Link href="/" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Continue Shopping 🛒
      </Link>
    </div>
  )
}
