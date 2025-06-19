"use client"
import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) setCart(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart(prev => [...prev, product])
  }

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
