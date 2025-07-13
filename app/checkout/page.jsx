import LocationSelector from "@/components/LocationSelector";
import { getAllCartItems } from "../server/cartAction";
import CheckoutClient from "@/components/CheckoutClient";

export default async function CheckoutPage() {
  const items = await getAllCartItems();

  const total = items.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-3 mb-6">
            {items.map((item) => (
              <li key={item.id} className="bg-grayDark p-3 rounded">
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>

          <p className="text-lg font-semibold mb-4">Total: ${total}</p>

          <LocationSelector />

          <CheckoutClient cart={items}/>
        </>
      )}
    </div>
  );
}
