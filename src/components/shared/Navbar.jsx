"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import Loader from "../ui/Loader";
import ShoppingCart from "../ui/ShoppingCart";

export default function Navbar() {
  const session = useSession();
  const user = session?.data?.user;
  const username = user?.name || user?.email;

  return (
    <>
      {session.status === "loading" && (
        <div className="fixed w-screen h-screen flex justify-center items-center bg-black/50">
          <Loader />
        </div>
      )}
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

        {session.status === "authenticated" ? (
          <div className="flex items-center gap-5">
            <Link href="/profile">
              {user.image ? (
                <Image
                  src={user.image}
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="user image"
                />
              ) : (
                <p className="font-bold text-gray-600">
                  Hi{" "}
                  <span className="capitalize text-primary">
                    {username.split("@", 1)}
                  </span>
                </p>
              )}
            </Link>
            <Button className="px-8 py-2" onClick={() => signOut()}>
              Logout
            </Button>
            <div className="relative">
              <ShoppingCart />
              <span className="w-5 h-5 text-white text-xs flex items-center justify-center bg-primary rounded-full absolute -right-3 -top-2">
                10
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button className="bg-transparent text-slate-800">Login</Button>
            </Link>
            <Link href="/register">
              <Button className="px-6 py-2">Register</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
