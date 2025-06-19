let cartItems = []

export async function GET() {
  return Response.json(cartItems)
}

export async function POST(req) {
  const newItem = await req.json()
  cartItems.push(newItem)
  return Response.json({ message: 'Item added to cart', cartItems })
}

export async function DELETE(req) {
  const { id } = await req.json()
  cartItems = cartItems.filter(item => item.id !== id)
  return Response.json({ message: 'Item removed', cartItems })
}



