"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MenuItemForm from "../../../../components/shared/MenuItemForm";
import UserTabs from "../../../../components/shared/UserTabs";
import LeftArrow from "../../../../components/ui/LeftArrow";
import PageLoader from "../../../../components/ui/PageLoader";
import { useProfile } from "../../../../hook/useProfile";

export default function EditMenuItem() {
  const [menuItem, setMenuItem] = useState(null);

  const { loading, data } = useProfile();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/menu-items`)
      .then((res) => res.json())
      .then((menuItems) => {
        const menu = menuItems.find((menu) => menu._id === id);
        setMenuItem(menu);
      });
  }, []);

 

  return (
    <>
      <UserTabs user={data} />
      {menuItem !== null ? (
        <div className="w-[350px] md:w-[700px] mt-16 m-auto flex flex-col justify-center items-center">
          <Link
            href="/menu-items"
            className="flex gap-3 font-bold border rounded-lg p-2 w-full items-center justify-center"
          >
            <LeftArrow /> Show all menu item
          </Link>
          <MenuItemForm menuItem={menuItem}  />
        </div>
      ) : (
        <PageLoader />
      )}
    </>
  );
}
