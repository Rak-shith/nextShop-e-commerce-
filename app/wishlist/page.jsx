import { getAllwishlistItems, removeFromwishlistItem } from '../server/wishlistAction'

export default async function WishlistPage() {

  const items = await getAllwishlistItems()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      {items.length === 0 ? (
        <div className="text-white-600 text-lg">
          🗒️ Your wishlist is empty.
        </div>
      ) : (
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              className="flex justify-between items-center dark:bg-grayDark rounded-md p-4 shadow-sm hover:shadow-md transition"
            >
              <div>
                <p className="text-lg font-medium text-white-800">{item.title}</p>
                <p className="text-sm text-white-500 mt-1">${item.price}</p>
              </div>
              <form action={removeFromwishlistItem}>
                <input type="hidden" name="id" value={item.id} />
                <button
                  className="text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-red-50 transition text-sm"
                  type="submit"
                >
                  Remove
                </button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
