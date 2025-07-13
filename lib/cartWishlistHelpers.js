import { toast } from "react-hot-toast";
import { addToCartItem } from "@/app/server/cartAction";
import { addTowishlistItem } from "@/app/server/wishlistAction";

export async function handleAddCart(product) {
 
  try {
    const res = await addToCartItem({ productId: product.id });
    if (res.message === 'Already in cart') {
      toast.error('Already in cart')
    } else {
      toast.success('Item added to cart')
    }
  } catch (error) {
    toast.error(error)
    console.error('Cart Error:', error)
  }
}

export async function handleAddWishlist(product) {

  try {
    const res = await addTowishlistItem({ productId: product.id });
    if (res.message === 'Already in wishlist') {
      toast.error('Already in wishlist')
    } else {
      toast.success('Item added to wishlist')
    }
  } catch (error) {
    toast.error(error)
    console.error('wishlist Error:', error)
  }
}
