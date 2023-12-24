import Link from "next/link";

export default function UserTabs() {
  return (
    <ul className="flex gap-2 items-center justify-center">
      <li className="bg-gray-200 text-gray-700 font-semibold px-4 py-1.5 rounded-full sm:text-base text-sm">
        <Link href="/profile">Profile</Link>
      </li>
      <li className="bg-gray-200 text-gray-700 font-semibold px-4 py-1.5 rounded-full sm:text-base text-sm">
        <Link href="/categories">Categories</Link>
      </li>
      <li className="bg-gray-200 text-gray-700 font-semibold px-4 py-1.5 rounded-full sm:text-base text-sm">
        <Link href="/menuitems">Menu Items</Link>
      </li>
      <li className="bg-gray-200 text-gray-700 font-semibold px-4 py-1.5 rounded-full sm:text-base text-sm">
        <Link href="/users">Users</Link>
      </li>
    </ul>
  );
}
