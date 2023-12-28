"use client";

import UserTabs from "../../../components/shared/UserTabs";
import UserForm from "../../../components/shared/UserForm";
import { useProfile } from "../../../hook/useProfile";

export default function User() {
  const { loading, data } = useProfile();

  return (
    <div>
      <UserTabs user={data} />
      <UserForm user={data} />
    </div>
  );
}
