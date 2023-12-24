"use client";

import UserForm from "@/components/shared/UserForm";
import UserTabs from "@/components/shared/UserTabs";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

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

  if (status === 'loading' || !profileFetched) {
    return 
  }

  if (status === "unauthenticated") {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <UserTabs />
      <UserForm user={user} />
    </div>
  );
}
