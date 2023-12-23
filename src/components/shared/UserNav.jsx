"use client"
import Button from "../ui/Button";
import ShoppingCart from "../ui/ShoppingCart";

export default function UserNav() {
  return (
    <div className="flex items-center gap-5">
      <p className="font-bold text-gray-600 sm:block hidden">Hello, Dear</p>
      <Button className="px-8 py-2">Logout</Button>
      <div className="relative">
        <ShoppingCart />
        <span className="w-5 h-5 text-white text-xs flex items-center justify-center bg-primary rounded-full absolute -right-3 -top-2">
          10
        </span>
      </div>
    </div>
  );
}
