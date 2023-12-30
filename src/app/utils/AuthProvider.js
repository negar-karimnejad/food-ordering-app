"use client";

import { SessionProvider } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export default function AuthProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const ls = typeof window !== "undefined" ? window.localStorage : null;

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, [ls]);

  function removeCartProduct(indexToRemove) {
    setCartProducts((prevCartProducts) => {
      const newCartProduct = prevCartProducts.filter(
        (product, index) => index !== indexToRemove
      );
      saveCartProductToLocalStorage(newCartProduct);
      return newCartProduct;
    });
  }

  function clearCartProduct() {
    saveCartProductToLocalStorage([]);
    setCartProducts([]);
  }

  function saveCartProductToLocalStorage(cartPropducts) {
    if (ls) {
      ls.setItem("cart", JSON.stringify(cartPropducts));
    }
  }

  function addToCart(product, size = null, extras = []) {
    setCartProducts((prevProducts) => {
      const cartProduct = { ...product, size, extras };
      const newProducts = [...prevProducts, cartProduct];
      saveCartProductToLocalStorage(newProducts);
      return newProducts;
    });
  }

  return (
    <SessionProvider>
      <CartContext.Provider
        value={{
          cartProducts,
          setCartProducts,
          addToCart,
          removeCartProduct,
          clearCartProduct,
        }}
      >
        {children}
      </CartContext.Provider>
    </SessionProvider>
  );
}
