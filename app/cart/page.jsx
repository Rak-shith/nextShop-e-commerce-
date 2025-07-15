import { getAllCartItems, removeFromCartItem } from "../server/cartAction";

export default async function CartPage() {
  let items = await getAllCartItems();

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-white-600 text-lg">🛒 Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex items-center justify-between rounded-lg p-4 shadow-sm dark:bg-grayDark hover:shadow-md transition space-y-4"
            >
              <div>
                <h2 className="text-lg font-semibold text-white-800">
                  {item.title}
                </h2>
                <p className="text-white-600 text-sm">${item.price}</p>
              </div>
              <form action={removeFromCartItem}>
                <input type="hidden" name="id" value={item.id} />
                <button
                  className="text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-red-50 transition text-sm"
                  type="submit"
                >
                  Remove
                </button>
              </form>
            </div>
          ))}

          <div className="flex justify-between items-center border-t pt-4 mt-6">
            <p className="text-xl font-semibold">Total:</p>
            <p className="text-xl font-bold text-blue-600">${total}</p>
          </div>
        </div>
      )}
    </div>
  );
}
