'use client'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { getAllwishlistItems, removeFromwishlistItem } from '../server/wishlistAction'

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([])

  const fetchWishlist = async () => {
    try {
      const items = await getAllwishlistItems()
      setWishlist(items)
    } catch (err) {
      console.error('[FETCH_WISHLIST_ERROR]', err)
    }
  }

  const removeFromWishlist = async (id) => {
   try {
      let res = await removeFromwishlistItem(id)
      if (res.error === 'Unauthorized') {
        toast.error('Please log in to remove items from your wishlist')
      } else {
        toast.success('Item removed from wishlist')
      }
      fetchWishlist(); // Refresh list
    } catch (error) {
      toast.error('Something went wrong');
      console.error('wishlist Delete Error:', error);
    }
  }

  useEffect(() => {
    fetchWishlist()
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-white-600 text-lg">
          🗒️ Your wishlist is empty.
        </div>
      ) : (
        <ul className="space-y-4">
          {wishlist.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              className="flex justify-between items-center bg-grayDark rounded-md p-4 shadow-sm hover:shadow-md transition"
            >
              <div>
                <p className="text-lg font-medium text-white-800">{item.title}</p>
                <p className="text-sm text-white-500 mt-1">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="text-sm text-red-500 hover:bg-red-50 border border-red-500 px-3 py-1 rounded transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
