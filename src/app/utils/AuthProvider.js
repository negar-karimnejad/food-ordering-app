"use client";

import { SessionProvider } from "next-auth/react";
import { createContext, useState } from "react";

const cartContext = createContext();

export default function AuthProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <SessionProvider>
      <cartContext.Provider value={{ cartProducts, setCartProducts }}>
        {children}
      </cartContext.Provider>
    </SessionProvider>
  );
}
