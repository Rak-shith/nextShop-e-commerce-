'use server'

import { prisma } from '@/lib/prisma'

export async function placeOrder(cart, customer) {
  try {
    const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)

    const order = await prisma.order.create({
      data: {
        userId: customer.email,
        items: cart,
        total,
      }
    })
    // ✅ Clear cart items for this user (guest or logged-in)
    const cartItemIds = cart.map(item => item.id)

    await prisma.cartItem.deleteMany({
      where: {
        id: { in: cartItemIds }
      }
    })

    return {
      success: true,
      message: 'Order placed!',
      order,
    }
  } catch (error) {
    console.error('Error placing order:', error)
    return { error: 'Failed to place order' }
    
  }
}

export async function getOrderById(id) {
  try {
    const order = await prisma.order.findUnique({
      where: { id },
    })

    if (!order) {
      return { error: 'Order not found' }, { status: 404 }
    }

    return order
  } catch (err) {
    console.error('[ORDER_GET_ERROR]', err)
    return  { status: 500 }
  }
}