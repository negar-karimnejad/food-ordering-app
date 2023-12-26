"use client";

import Link from "next/link";
import UserTabs from "../../components/shared/UserTabs";
import RightArrow from "../../components/ui/RightArrow";
import { useProfile } from "../../hook/useProfile";
import Image from "next/image";

export default function Menuitems() {
  const { loading, data } = useProfile();

  if (!data.admin) {
    return (
      <p className="text-center font-extrabold mt-10 text-xl bg-gray-100  p-3 text-primary shadow-xl w-[350px] m-auto rounded-md">
        Non an admin
      </p>
    );
  }

  return (
    <>
      <UserTabs user={data} />
      <div className="w-[350px] md:w-[700px] mt-16 m-auto flex flex-col justify-center items-center">
        <Link
          href="menu-items/new"
          className="flex gap-3 font-bold border rounded-lg p-2 w-full items-center justify-center"
        >
          Create new menu item <RightArrow />
        </Link>
        <div className="mt-10">
          <p className="text-gray-600">Edit menu items:</p>
          <div className="flex gap-2 flex-wrap items-center justify-center">
            <div className="bg-gray-300 rounded-lg p-2 w-52 h-40 flex flex-grow flex-col justify-center items-center">
              <Image
                src="/pizza.png"
                width={100}
                height={100}
                alt="pizza image"
                className="rounded-lg"
              />
              <h3 className="font-bold">Pizza3</h3>
            </div>
            <div className="bg-gray-300 rounded-lg p-2 w-52 h-40 flex flex-grow flex-col justify-center items-center">
              <Image
                src="/pizza.png"
                width={100}
                height={100}
                alt="pizza image"
                className="rounded-lg"
              />
              <h3 className="font-bold">Pizza3</h3>
            </div>
            <div className="bg-gray-300 rounded-lg p-2 w-52 h-40 flex flex-grow flex-col justify-center items-center">
              <Image
                src="/pizza.png"
                width={100}
                height={100}
                alt="pizza image"
                className="rounded-lg"
              />
              <h3 className="font-bold">Pizza3</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
