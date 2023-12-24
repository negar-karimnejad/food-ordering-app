"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Profile() {
  const session = useSession();
  const user = session?.user;

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <ul className="flex gap-2 items-center justify-center">
        <li className="bg-gray-200 text-gray-700 font-semibold px-4 py-1.5 rounded-full">
          <Link href="/profile">Profile</Link>
        </li>
        <li className="bg-gray-200 text-gray-700 font-semibold px-4 py-1.5 rounded-full">
          <Link href="/categories">Categories</Link>
        </li>
        <li className="bg-gray-200 text-gray-700 font-semibold px-4 py-1.5 rounded-full">
          <Link href="/menuitems">Menu Items</Link>
        </li>
        <li className="bg-gray-200 text-gray-700 font-semibold px-4 py-1.5 rounded-full">
          <Link href="/users">Users</Link>
        </li>
      </ul>
      <div className="mt-5 flex justify-between items-center gap-5 flex-col sm:flex-row sm:items-start">
        <div className="bg-primary rounded-lg w-20 h-28">
          {user?.image && (
            <Image
              src={user?.image}
              width={40}
              height={40}
              className=""
              alt="user image"
            />
          )}
        </div>
        <div>
          <form className="flex flex-col gap-3 w-full">
            <Input
              type="text"
              className=""
              placeholder="Full name"
              value=""
              onChange={() => ""}
            />
            <Input
              type="email"
              className=""
              placeholder="Email"
              value=""
              onChange={() => ""}
            />
            <Input
              type="tel"
              className=""
              placeholder="Phone number"
              value=""
              onChange={() => ""}
            />
            <Input
              type="text"
              className=""
              placeholder="Street Address"
              value=""
              onChange={() => ""}
            />
            <div className="flex flex-col gap-0 sm:flex-row sm:gap-5">
              <Input
                type="text"
                className=""
                placeholder="Postal code"
                value=""
                onChange={() => ""}
              />
              <Input
                type="text"
                className=""
                placeholder="City"
                value=""
                onChange={() => ""}
              />
            </div>
            <Input
              type="text"
              className=""
              placeholder="Country"
              value=""
              onChange={() => ""}
            />
            <Button type="submit" className="rounded-lg">
              Save
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
