
export async function handleAddCart(product, addToCart) {
  // addToCart(product)

  try {
    const res = await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
    const result = await res.json()
    console.log('Add to Cart Response:', result)
  } catch (error) {
    console.error('Cart Error:', error)
  }
}

export async function handleAddWishlist(product, addToWishlist) {
  // addToWishlist(product)

  try {
    const res = await fetch('/api/wishlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
    const result = await res.json()
    console.log('Wishlist Response:', result)
  } catch (error) {
    console.error('Wishlist Error:', error)
  }
}
