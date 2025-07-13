'use server'
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

// GET - Fetch cart items
export async function getAllCartItems() {
  try {
    const items = await prisma.cartItem.findMany({
      include: { product: true },
    });

    const formatted = items.map((item) => ({
      id: item.id,
      productId: item.productId,
      title: item.product?.title || "Unknown Product",
      price: item.product?.price || 0,
      image: item.product?.image || "/images/placeholder.png",
    }));
    
    return formatted;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    return [{ error: "Internal Server Error" }, { status: 500 }];
  }
}

// POST - Add to cart
export async function addToCartItem({ productId, quantity = 1 }) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.email || 'guest'

  const existing = await prisma.cartItem.findFirst({
    where: { productId, userId },
  });

  if (existing) return { message: "Already in cart" };

  const item = await prisma.cartItem.create({
    data: { productId, quantity, userId },
  });

  return item;
}

// DELETE - Remove from cart
export async function removeFromCartItem(formData) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.email || 'guest'

   if (!userId) return { error:'Unauthorized'}

  const id = formData.get('id')
  await prisma.cartItem.delete({
    where: {
      id,
    },
  });

  revalidatePath('/cart');
  return { message: "Removed" };
}