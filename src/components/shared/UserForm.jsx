"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../ui/Button";
import Input from "../ui/Input";
import EditableImage from "./EditableImage";

export default function UserForm({ user }) {
  const [fullname, setFullname] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [street, setStreet] = useState(user?.street || "");
  const [postalcode, setPostalcode] = useState(user?.postalcode || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");
  const [image, setImage] = useState(user?.image || "");
  const [admin, setAdmin] = useState(user?.admin || false);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullname,
          email: user?.email,
          phone,
          street,
          postalcode,
          city,
          country,
          image,
          admin,
        }),
      });
      if (res.ok) {
        toast.success("User updated successfully.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-w-[350px] max-w-[600px]  mt-5 flex justify-between items-center sm:gap-5 flex-col sm:flex-row sm:items-start">
      <EditableImage image={image} setImage={setImage} />
      <form
        onSubmit={updateUser}
        className="flex flex-col gap-3 flex-grow w-full"
      >
        <div>
          <label htmlFor="fullname" className="m-0 p-0 text-gray-400 text-sm">
            Fullname
          </label>
          <Input
            type="text"
            id="fullname"
            placeholder="Fullname"
            className="w-full"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="m-0 p-0 text-gray-400 text-sm">
            Email
          </label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            value={user?.email}
            onChange={() => {}}
            className="w-full bg-gray-300 text-gray-500 cursor-not-allowed"
            disabled={true}
          />
        </div>
        <div>
          <label htmlFor="phone" className="m-0 p-0 text-gray-400 text-sm">
            Phone number
          </label>
          <Input
            className="w-full"
            type="tel"
            id="phone"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address" className="m-0 p-0 text-gray-400 text-sm">
            Street Address
          </label>
          <Input
            className="w-full"
            id="address"
            type="text"
            placeholder="Street Address"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:gap-5">
          <div>
            <label htmlFor="title" className="m-0 p-0 text-gray-400 text-sm">
              Item name
            </label>
            <Input
              className="w-full"
              type="text"
              placeholder="Postal code"
              value={postalcode}
              onChange={(e) => setPostalcode(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="title" className="m-0 p-0 text-gray-400 text-sm">
              Item name
            </label>
            <Input
              className="w-full"
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <label htmlFor="title" className="m-0 p-0 text-gray-400 text-sm">
          Item name
        </label>
        <Input
          className="w-full"
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Button type="submit" className="rounded-lg">
          Save
        </Button>
      </form>
    </div>
  );
}
