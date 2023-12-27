"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import UserTabs from "../../../../components/shared/UserTabs";
import PageLoader from "../../../../components/ui/PageLoader";
import { useProfile } from "../../../../hook/useProfile";
import MenuItemForm from "../../../../components/shared/MenuItemForm";

export default function EditMenuItem() {
  const [menuItem, setMenuItem] = useState([]);
  const { loading, data } = useProfile();
  const { id } = useParams();

  async function getMenuItem() {
    await fetch(`/api/menu-items/${id}`)
      .then((res) => res.json())
      .then((data) => setMenuItem(data));
  }

  useEffect(() => {
    getMenuItem();
  }, [id]);

  const editMenuItem = async (e) => {
    e.preventDefault();
    //
  };

  return (
    <>
      <UserTabs user={data} />
      {menuItem ? <MenuItemForm menuItem={menuItem} editMenuItem={editMenuItem} /> : <PageLoader />}
    </>
  );
}
