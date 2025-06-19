let wishListItems = []

export async function GET() {
  return Response.json(wishListItems)
}

export async function POST(req) {
  const newItem = await req.json()
  wishListItems.push(newItem)
  return Response.json({ message: 'Item added to Wishlist', wishListItems })
}

export async function DELETE(req) {
  const { id } = await req.json()
  wishListItems = wishListItems.filter(item => item.id !== id)
  return Response.json({ message: 'Item removed', wishListItems })
}



