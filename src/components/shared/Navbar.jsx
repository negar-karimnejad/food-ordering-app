"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../../app/utils/AuthProvider";
import Bars from "../ui/Bars";
import Button from "../ui/Button";
import Loader from "../ui/Loader";
import ShoppingCart from "../ui/ShoppingCart";

function AuthLinks({ status, username }) {
  if (status === "authenticated") {
    return (
      <div className="flex lg:flex-row flex-col items-center gap-5">
        <Link href="/profile">
          <p className="font-bold text-gray-600">
            Hi,{" "}
            <span className="capitalize text-primary">
              {username.split("@", 1)}
            </span>
          </p>
        </Link>
        <Button className="px-8 py-2 lg:w-fit w-full" onClick={() => signOut()}>
          Logout
        </Button>
      </div>
    );
  }
  if (status === "unauthenticated") {
    return (
      <div className="flex flex-col lg:flex-row items-center gap-2">
        <Link
          href="/login"
          className="lg:border-0 border border-gray-400 rounded-full flex items-center justify-center lg:w-fit w-full"
        >
          <Button className="bg-transparent text-slate-800">Login</Button>
        </Link>
        <Link href="/register" className="lg:w-fit w-full">
          <Button className="px-6 py-2 lg:w-fit w-full">Register</Button>
        </Link>
      </div>
    );
  }
}

export default function Navbar() {
  const session = useSession();
  const { status } = session;
  const user = session?.data?.user;
  const username = user?.name || user?.email;
  const { cartProducts } = useContext(CartContext);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      {session.status === "loading" && (
        <div className="fixed w-screen h-screen flex justify-center items-center bg-black/50 z-[999]">
          <Loader />
        </div>
      )}
      <div className="sm:px-24 px-10 py-5 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link href="/">
            <h1 className="text-primary font-extrabold text-2xl">ST PIZZA</h1>
          </Link>
          <div className="text-gray-500 font-bold gap-6 lg:flex hidden">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden lg:flex">
            <AuthLinks status={status} username={username} />
          </div>
          {status === "authenticated" && (
            <Link href="/cart" className="relative">
              <ShoppingCart />
              <span className="w-5 h-5 text-white text-xs flex items-center justify-center bg-primary rounded-full absolute -right-3 -top-2">
                {cartProducts?.length}
              </span>
            </Link>
          )}
          <div
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="border rounded-lg p-1 block lg:hidden cursor-pointer"
          >
            <Bars />
          </div>
        </div>

        <div
          className={`${
            mobileNavOpen ? "block" : "hidden"
          } absolute top-16 right-0 bg-gray-200 px-10 mx-5 w-[90%] sm:w-[440px] py-6 rounded-lg lg:hidden shadow-lg z-50`}
          onClick={() => setMobileNavOpen(false)}
        >
          <div className="flex flex-col items-center justify-center font-bold gap-6">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
            <div className="w-full">
              <AuthLinks status={status} username={username} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
