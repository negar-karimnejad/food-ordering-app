"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Profile() {
  const session = useSession();
  const user = session?.user;

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <ul className="flex gap-2">
        <li className="bg-gray-200 text-gray-700 font-semibold px-3 py-1.5 rounded-full">
          <Link href="/profile">Profile</Link>
        </li>
        <li className="bg-gray-200 text-gray-700 font-semibold px-3 py-1.5 rounded-full">
          <Link href="/categories">Categories</Link>
        </li>
        <li className="bg-gray-200 text-gray-700 font-semibold px-3 py-1.5 rounded-full">
          <Link href="/menuitems">Menu Items</Link>
        </li>
        <li className="bg-gray-200 text-gray-700 font-semibold px-3 py-1.5 rounded-full">
          <Link href="/users">Users</Link>
        </li>
      </ul>
      <div>
        <div>
          {user?.image && (
            <Image
              src={user?.image}
              width={40}
              height={40}
              className="rounded-full"
              alt="user image"
            />
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
}
