"use client";

import Link from "next/link";
import UserTabs from "../../components/shared/UserTabs";
import RightArrow from "../../components/ui/RightArrow";
import { useProfile } from "../../hook/useProfile";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Menuitems() {
  const { loading, data } = useProfile();
  const [menuItems, setMenuItems] = useState([]);

  async function getMenuItems() {
    await fetch("/api/menu-items")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data.slice(-3));
      });
  }

  useEffect(() => {
    getMenuItems();
  }, []);

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
        {menuItems?.length > 0 ? (
          <div className="mt-10">
            <p className="text-gray-600">Edit menu items:</p>
            <div className="flex gap-2 flex-wrap items-center justify-center">
              {menuItems.map((menu) => (
                <Link
                  href={`menu-items/edit/${menu._id}`}
                  key={menu._id}
                  className="bg-gray-300 rounded-lg p-7 gap-2 w-52 h-40 flex flex-grow flex-col justify-center items-center"
                >
                  <div className="w-full h-full rounded-lg ">
                    <Image
                      src={menu.image}
                      width={100}
                      height={100}
                      alt={menu.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-bold">{menu.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center font-extrabold text-gray-700 mt-10 text-lg  m-auto border border-white border-b-red-500">
            The is no menu items here.
          </p>
        )}
      </div>
    </>
  );
}
