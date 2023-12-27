"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import UserForm from "../../components/shared/UserForm";
import UserTabs from "../../components/shared/UserTabs";
import PageLoader from "../../components/ui/PageLoader";

export default function Profile() {
  const session = useSession();
  const { status } = session;
  console.log("profile session", session);
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

  return (
    <>
      {status === "loading" || !profileFetched ? (
        <PageLoader />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <UserTabs user={user} />
          <UserForm user={user} />
        </div>
      )}
    </>
  );
}
