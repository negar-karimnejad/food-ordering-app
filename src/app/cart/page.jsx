"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import SectionHeader from "../../components/ui/SectionHeader";
import Trash from "../../components/ui/Trash";
import { CartContext } from "../utils/AuthProvider";

export default function Cart() {
  const session = useSession();
  const user = session?.data?.user;

  const [phone, setPhone] = useState(user?.phone || "");
  const [street, setStreet] = useState(user?.street || "");
  const [postalcode, setPostalcode] = useState(user?.postalcode || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");

  const { cartProducts, removeCartProduct } = useContext(CartContext);

  return (
    <section className="px-10 sm:px-24 my-10">
      <SectionHeader mainTitle="cart" />
      <div className="flex flex-col lg:flex-row mt-10 gap-10">
        <div className="flex-1">
          {cartProducts?.map((product) => (
            <div
              key={product._id}
              className="border border-white border-b-gray-100 flex items-center justify-between font-bold gap-5 p-2"
            >
              <Image src={product.image} alt="pizza" width={90} height={90} />
              <p>{product.title}</p>
              <p>${product.price}</p>
              <button
                type="button"
                className="flex items-center justify-center border w-10 h-10 rounded-lg transition-all hover:bg-red-300"
                onClick={removeCartProduct(product._id)}
              >
                <Trash />
              </button>
            </div>
          ))}

          <div className="border border-white border-b-gray-100 flex items-center justify-between gap-5 p-2">
            <Image
              src="/buffalo-chicken-pizza.png"
              alt="pizza"
              width={90}
              height={90}
            />
            <p className="flex flex-col">
              <span className="font-bold">Classic Chicken</span>
              <span className="text-sm font-semibold">Size:Medium</span>
              <span className="text-sm text-gray-400">Extra Cheese $1</span>
              <span className="text-sm text-gray-400">Extra pepperoni $2</span>
            </p>
            <p className="font-bold">$12</p>
            <button
              type="button"
              className="flex items-center justify-center border w-10 h-10 rounded-lg transition-all hover:bg-red-300"
            >
              <Trash />
            </button>
          </div>
          <div className="text-right font-bold p-3">
            <span className="text-gray-400">Subtotal:</span>
            <span className="text-gray-900"> $29</span>
          </div>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg flex-1">
          <h4 className="font-bold">Checkout</h4>
          <form className="flex flex-col gap-3 flex-grow w-full">
            <div>
              <label htmlFor="phone" className="m-0 p-0 text-gray-400 text-sm">
                Phone number
              </label>
              <Input
                className="w-full bg-transparent font-semibold"
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="street" className="m-0 p-0 text-gray-400 text-sm">
                Street Address
              </label>
              <Input
                className="w-full bg-transparent font-semibold"
                id="street"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:gap-5">
              <div className="w-full bg-transparent font-semibold">
                <label
                  htmlFor="postalcode"
                  className="m-0 p-0 text-gray-400 text-sm"
                >
                  Postal code
                </label>
                <Input
                  className="w-full bg-transparent font-semibold"
                  type="text"
                  id="postalcode"
                  value={postalcode}
                  onChange={(e) => setPostalcode(e.target.value)}
                />
              </div>
              <div className="w-full bg-transparent font-semibold">
                <label htmlFor="city" className="m-0 p-0 text-gray-400 text-sm">
                  City
                </label>
                <Input
                  className="w-full bg-transparent font-semibold"
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="country"
                className="m-0 p-0 text-gray-400 text-sm"
              >
                Country
              </label>
              <Input
                className="w-full bg-transparent font-semibold"
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <Button type="submit" className="rounded-lg">
              Pay $29
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
