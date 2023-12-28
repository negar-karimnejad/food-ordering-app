"use client";

import UserTabs from "../../components/shared/UserTabs";
import Button from "../../components/ui/Button";
import { useProfile } from "../../hook/useProfile";

export default function Orders() {
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
      <p>orders</p>
    </>
  );
}
