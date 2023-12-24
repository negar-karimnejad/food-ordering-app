"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import UserForm from "../../components/shared/UserForm";
import UserTabs from "../../components/shared/UserTabs";

export default function Profile() {
  const session = useSession();
  const { status } = session;

  const [user, setUser] = useState([]);
  const [profileFetched, setProfileFetched] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/profile")
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          setProfileFetched(true);
        });
    }
  }, [session, status]);

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  if (status === "loading" || !profileFetched) {
    return;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <UserTabs />
      <UserForm user={user} />
    </div>
  );
}
