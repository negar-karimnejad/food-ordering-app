"use client";

import { SessionProvider } from "next-auth/react";
import { createContext, useState } from "react";

export const CartContext = createContext({});

export default function AuthProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function addToCart(product, size = null, extras = []) {
    setCartProducts((prevProducts) => {
      const cartProduct = { ...product, size, extras };
      const newProducts = [...prevProducts, cartProduct];
      return newProducts;
    });
  }

  return (
    <SessionProvider>
      <CartContext.Provider
        value={{ cartProducts, setCartProducts, addToCart }}
      >
        {children}
      </CartContext.Provider>
    </SessionProvider>
  );
}
