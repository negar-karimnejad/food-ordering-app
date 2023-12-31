"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import EditableImage from "../../../components/shared/EditableImage";
import UserTabs from "../../../components/shared/UserTabs";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import LeftArrow from "../../../components/ui/LeftArrow";
import { useProfile } from "../../../hook/useProfile";
import MenuItemPriceProps from "../../../components/shared/MenuItemPriceProps";

export default function NewMenuItems() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [extraIngredientPrices, setExtraIngredientPrices] = useState([]);

  useEffect(() => {
    fetch("/api/category")
      .then((res) => res.json())
      .then((data) => setAllCategories(data));
  }, []);

  const { loading, data } = useProfile();
  const router = useRouter();

  const saveMenuItem = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/menu-items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image,
        title,
        description,
        category,
        basePrice,
        sizes,
        extraIngredientPrices,
      }),
    });

    if (res.ok) {
      toast.success("Menu item saved successfully", {
        autoClose: 1200,
      });
      router.push("/menu-items");
    } else {
      toast.error("Something went wrong.", {
        autoClose: 1200,
      });
    }
  };

  return (
    <>
      <UserTabs user={data} />
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
              onSubmit={saveMenuItem}
              className="flex flex-col gap-3 flex-grow w-full"
            >
              <div>
                <label
                  htmlFor="title"
                  className="m-0 p-0 text-gray-400 text-sm"
                >
                  Item name
                </label>
                <Input
                  type="text"
                  id="title"
                  className="w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="m-0 p-0 text-gray-400 text-sm"
                >
                  Description
                </label>
                <Input
                  type="text"
                  id="description"
                  className="w-full"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <label className="m-0 p-0 text-gray-400 text-sm">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full outline-none flex gap-2 border p-2 rounded-md"
                >
                  <option value="-1">Choose a category</option>
                  {allCategories?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="basePrice"
                  className="m-0 p-0 text-gray-400 text-sm"
                >
                  base Price
                </label>
                <Input
                  type="text"
                  id="basePrice"
                  className="w-full"
                  value={basePrice}
                  onChange={(e) => setBasePrice(e.target.value)}
                />
              </div>
              <MenuItemPriceProps
                props={sizes}
                setProps={setSizes}
                name="Sizes"
                addLabel="Add item size"
              />
              <MenuItemPriceProps
                props={extraIngredientPrices}
                setProps={setExtraIngredientPrices}
                name="Extra ingredients"
                addLabel="Add ingredients prices"
              />
              <Button type="submit" className="rounded-lg">
                Save
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
