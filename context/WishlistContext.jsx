"use client"
import { createContext, useContext, useEffect, useState } from "react"

const wishlistContext = createContext(null)

export const WishlistProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem("wishlist")
    if (stored) setCart(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(cart))
  }, [cart])

  const addToWishlist = (product) => {
    setCart(prev => [...prev, product])
  }

  return <wishlistContext.Provider value={{ cart, addToWishlist }}>{children}</wishlistContext.Provider>
}

export const useWishlist = () => useContext(wishlistContext)
