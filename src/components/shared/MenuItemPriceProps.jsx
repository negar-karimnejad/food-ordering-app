"use client";
import { useState } from "react";
import Input from "../ui/Input";
import Plus from "../ui/Plus";
import Trash from "../ui/Trash";

export default function MenuItemPriceProps({ name, addLabel }) {
  const [props, setProps] = useState([]);

  const addProp = () => {
    setProps((prev) => [...prev, { name: "", price: 0 }]);
  };

  const editProp = (e, index, prop) => {
    const newValue = e.target.value;
    setProps((prev) => {
      const newProps = [...prev];
      newProps[index][prop] = newValue;
      return newProps;
    });
  };

  return (
    <div className="border p-2 rounded-md">
      <p className="text-gray-400">{name}</p>
      {props?.map((size, index) => (
        <div key={index} className="flex items-end gap-2 my-3">
          <div>
            <label htmlFor="price" className="m-0 p-0 text-gray-400 text-sm">
              Name
            </label>
            <Input
              id="name"
              className="w-full"
              type="text"
              placeholder="Size name"
              value={size.name}
              onChange={(e) => editProp(e, index, "name")}
            />
          </div>
          <div>
            <label htmlFor="price" className="m-0 p-0 text-gray-400 text-sm">
              Extra prices
            </label>
            <Input
              id="price"
              className="w-full"
              type="text"
              placeholder="Base Price"
              value={size.price}
              onChange={(e) => editProp(e, index, "price")}
            />
          </div>
          <button
            type="button"
            className="flex items-center justify-center border w-14 h-10 rounded-lg transition-all hover:bg-red-300"
            onClick={() => setSizeCount((prevCount) => prevCount - 1)}
          >
            <Trash />
          </button>
        </div>
      ))}
      <button
        onClick={() => addProp()}
        type="button"
        className="flex items-center justify-center gap-2 bg-gray-200 rounded-lg w-full font-bold p-2 my-2"
      >
        <Plus /> {addLabel}
      </button>
    </div>
  );
}
