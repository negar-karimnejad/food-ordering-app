"use client";
import Input from "../ui/Input";
import Plus from "../ui/Plus";
import Trash from "../ui/Trash";
import ChevronDown from "../ui/ChevronDown";
import ChevronUp from "../ui/ChevronUp";
import { useState } from "react";

export default function MenuItemPriceProps({
  name,
  addLabel,
  props,
  setProps,
}) {
  const [isOpen, setIsOpen] = useState(false);

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

  const removeProp = (indexToRemove) => {
    const newProp = props.filter((v, index) => index !== indexToRemove);
    setProps(newProp);
  };

  return (
    <div className="border p-2 rounded-md">
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>

        <p className="text-gray-600 font-medium">
          {name} ({props?.length})
        </p>
      </div>
      {props?.map((size, index) => (
        <div key={index} className="flex items-end gap-2 my-3">
          <div>
            <label htmlFor="price" className="m-0 p-0 text-gray-400 text-sm">
              Name
            </label>
            <Input
              id="name"
              className="w-full placeholder:text-sm"
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
              className="w-full font-medium"
              type="text"
              placeholder="Base Price"
              value={size.price}
              onChange={(e) => editProp(e, index, "price")}
            />
          </div>
          <button
            type="button"
            className="flex items-center justify-center border w-14 h-10 rounded-lg transition-all hover:bg-red-300"
            onClick={() => removeProp(index)}
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
