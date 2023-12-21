import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import ShoppingCart from "../ui/ShoppingCart";

export default function Navbar() {
  const user = true;

  return (
    <div className="sm:px-24 px-10 py-5 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Link href="/">
          <h1 className="text-primary font-extrabold text-2xl">ST PIZZA</h1>
        </Link>
        <ul className="text-gray-500 font-bold gap-6 lg:flex hidden">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        {user ? (
          <>
            <p className="font-bold text-gray-600 sm:block hidden">
              Hello, Dear
            </p>
            <Button className="px-8 py-2">Logout</Button>
            <div className="relative">
              <ShoppingCart />
              <span className="w-5 h-5 text-white text-xs flex items-center justify-center bg-primary rounded-full absolute -right-3 -top-2">
                10
              </span>
            </div>
          </>
        ) : (
          <Link href="/login">
            <Button className="px-8 py-2">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
