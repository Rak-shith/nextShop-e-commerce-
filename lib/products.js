import { PrismaClient } from '@/lib/generated/prisma';
const prisma = new PrismaClient();
import { ObjectId } from 'mongodb';



export async function getAllProducts() {
  return await prisma.product.findMany()
}

export async function getProductById(id) {
  try {
    const objectId = new ObjectId(id)
    return await prisma.product.findUnique({
      where: { id: objectId.toString() },
    })
  } catch (error) {
    console.error('Invalid ID or fetch failed:', error)
    return null
  }
}
