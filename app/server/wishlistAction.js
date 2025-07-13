'use server'
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";

// GET - Fetch wishlist items
export async function getAllwishlistItems() {
  try {
    const items = await prisma.wishlistItem.findMany({
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
    console.error('Error fetching wishlist items:', error);
    return [{ error: "Internal Server Error" }, { status: 500 }];
  }
}

// POST - Add to wishlist
export async function addTowishlistItem({ productId }) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.email || 'guest'

  const existing = await prisma.wishlistItem.findFirst({
    where: { productId, userId },
  });

  if (existing) return { message: "Already in wishlist" };

  const item = await prisma.wishlistItem.create({
    data: { productId, userId },
  });

  return item;
}

// DELETE - Remove from wishlist
export async function removeFromwishlistItem(id) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.email || 'guest'

   if (!userId) return { error:'Unauthorized'}

  await prisma.wishlistItem.delete({
    where: {
      id,
    },
  });

  // revalidatePath('/wishlist');
  return { message: "Removed" };
}