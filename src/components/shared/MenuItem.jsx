import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

export default function MenuItem() {
  return (
    <div className="bg-gray-200 rounded-lg p-5 flex flex-col items-center justify-center gap-5 shadow-lg transition-all hover:bg-gray-100">
      <Image src="/pizza.png" width={100} height={100} alt="menu image" />
      <h4 className="font-bold text-lg">Cheese Pizza</h4>
      <p className="text-gray-700 line-clamp-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
        quaerat. Magni fugiat quae nobis excepturi non aliquid odit quas
        cupiditate in qui quis magnam alias nisi rerum, facilis assumenda ullam.
      </p>
      <Button className="w-full">Add to cart $12</Button>
    </div>
  );
}
