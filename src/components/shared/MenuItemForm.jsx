"use client";

import Link from "next/link";
import { Input } from "postcss";
import { useState } from "react";
import EditableImage from "./EditableImage";
import Button from "../ui/Button";
import LeftArrow from "../ui/LeftArrow";

export default function MenuItemForm({ menuItem, editMenuItem }) {
  const [image, setImage] = useState(menuItem?.image || "");
  const [title, setTitle] = useState(menuItem?.title || "");
  const [description, setDescription] = useState(menuItem?.description || "");
  const [category, setCategory] = useState(menuItem?.category || "");
  const [price, setPrice] = useState(menuItem?.price || "");

  return (
    <div className="w-[350px] md:w-[700px] mt-16 m-auto flex flex-col justify-center items-center">
      <Link
        href="/menu-items"
        className="flex gap-3 font-bold border rounded-lg p-2 w-full items-center justify-center"
      >
        <LeftArrow /> Show all menu item
      </Link>
      <div className="mt-10">
        <div className="min-w-[350px] md:w-[700px]  mt-5 flex justify-between items-center sm:gap-5 flex-col sm:flex-row sm:items-start">
          <EditableImage image={image} setImage={setImage} />
          <form
            onSubmit={editMenuItem}
            className="flex flex-col gap-3 flex-grow w-full"
          >
            <Input
              type="text"
              placeholder="Item Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Base Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <Button type="submit" className="rounded-lg">
              Edit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
