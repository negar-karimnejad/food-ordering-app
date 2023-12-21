"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "../ui/Button";

export default function MenuItem() {
  const [showAddCartModal, setShowAddCartModal] = useState(false);

  return (
    <div className="bg-gray-200 rounded-lg p-5 flex flex-col items-center justify-center gap-5 shadow-lg transition-all hover:bg-gray-50">
      <Image src="/pizza.png" width={100} height={100} alt="menu image" />
      <h4 className="font-bold text-lg">Cheese Pizza</h4>
      <p className="text-gray-700 line-clamp-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
        quaerat. Magni fugiat quae nobis excepturi non aliquid odit quas
        cupiditate in qui quis magnam alias nisi rerum, facilis assumenda ullam.
      </p>
      <Button className="w-full">Add to cart $12</Button>
      <div className="flex items-center justify-center z-50 fixed left-0 top-0 w-screen h-screen bg-black/15">
        <div className="bg-white w-[400px] max-h-[550px] p-5 rounded-2xl overflow-y-auto">
          <div className="flex flex-col items-center justify-center h-full w-full gap-5">
            <Image src="/pizza.png" width={100} height={100} alt="menu image" />
            <h4 className="font-bold text-xl">Cheese Pizza</h4>
            <p className="text-center text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
              quaerat. Magni fugiat quae nobis excepturi non aliquid odit quas
              cupiditate in qui quis magnam alias nisi rerum, facilis assumenda
              ullam.
            </p>
            <h4 className="font-medium">Pick your size</h4>
            <form className="flex flex-col w-full gap-2 text-gray-600">
              <div className="flex gap-2 border p-2 rounded-md">
                <input type="radio" name="" id="" />
                <label htmlFor="">Small $12</label>
              </div>
              <div className="flex gap-2 border p-2 rounded-md">
                <input type="radio" name="" id="" />
                <label htmlFor="">Medium $14</label>
              </div>
              <div className="flex gap-2 border p-2 rounded-md">
                <input type="radio" name="" id="" />
                <label htmlFor="">Large $16</label>
              </div>
            </form>
            <h4 className="font-medium">Any extras?</h4>
            <form className="flex flex-col w-full gap-2 text-gray-600">
              <div className="flex gap-2 border p-2 rounded-md">
                <input type="radio" name="" id="" />
                <label htmlFor="">Extra cheese +$1</label>
              </div>
              <div className="flex gap-2 border p-2 rounded-md">
                <input type="radio" name="" id="" />
                <label htmlFor="">Extra pepperoni +$2</label>
              </div>
            </form>
            <Button className="w-full">Add to cart $12</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
