import Link from "next/link";
import React from "react";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <div className="px-24 py-5 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Link href="/">
          <h1 className="text-primary font-extrabold text-xl">ST PIZZA</h1>
        </Link>
        <ul className="text-gray-500 font-bold gap-4 md:flex hidden">
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
      <div className="flex items-center">
        <Link href="/login">
          <Button className="bg-transparent text-gray-700">Sign in</Button>
        </Link>
        <Link href="/register">
          <Button>Sign up</Button>
        </Link>
      </div>
    </div>
  );
}
