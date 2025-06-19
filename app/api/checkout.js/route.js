export async function POST(req) {
  const checkoutData = await req.json()

  const order = {
    id: Math.random().toString(36).slice(2),
    status: 'success',
    orderDate: new Date().toISOString(),
    ...checkoutData
  }

  return Response.json({
    message: 'Order placed successfully!',
    order
  })
}
