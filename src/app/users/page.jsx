"use client";

import UserTabs from "../../components/shared/UserTabs";
import { useProfile } from "../../hook/useProfile";

export default function Users() {
  const { loading, data } = useProfile();

  if (!data.admin) {
    return "Non an admin";
  }

  return (
    <>
      <UserTabs user={data} />
      <p>Users</p>
    </>
  );
}
