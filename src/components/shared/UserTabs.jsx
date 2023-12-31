"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SectionHeader from "../ui/SectionHeader";

const tabs = [
  { id: 1, title: "Profile", link: "/profile" },
  { id: 2, title: "Categories", link: "/categories" },
  { id: 3, title: "Menu Items", link: "/menu-items" },
  { id: 4, title: "Users", link: "/users" },
];

export default function UserTabs({ user }) {
  const pathname = usePathname();

  return (
    <>
      {user?.admin ? (
        <ul className="flex gap-1 sm:gap-2 items-center justify-center mt-10">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`${
                pathname.includes(tab.link) ? "bg-primary text-white" : ""
              } bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-full sm:text-base text-sm`}
            >
              <Link href={tab.link}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <SectionHeader mainTitle="Profile" />
      )}
    </>
  );
}
