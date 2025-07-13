"use server";
import { prisma } from "@/lib/prisma";

export async function getAllProducts() {
  return await prisma.product.findMany();
}

export async function getProductById(id) {
  try {
    return await prisma.product.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error("Invalid ID or fetch failed:", error);
    return null;
  }
}
