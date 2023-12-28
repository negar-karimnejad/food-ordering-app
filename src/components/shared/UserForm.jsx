"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import EditableImage from "./EditableImage";

export default function UserForm({ user, onSave }) {
  const [fullname, setFullname] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [street, setStreet] = useState(user?.street || "");
  const [postalcode, setPostalcode] = useState(user?.postalcode || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");
  const [image, setImage] = useState(user?.image || "");
  const [admin, setAdmin] = useState(user?.admin || true);

  return (
    <div className="min-w-[350px] max-w-[600px]  mt-5 flex justify-between items-center sm:gap-5 flex-col sm:flex-row sm:items-start">
      <EditableImage image={image} setImage={setImage} />
      <form
        onSubmit={(e) =>
          onSave(e, {
            name: fullname,
            phone,
            street,
            postalcode,
            city,
            country,
            image,
            admin,
          })
        }
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
          <div className="w-full">
            <label
              htmlFor="postalcode"
              className="m-0 p-0 text-gray-400 text-sm"
            >
              Postal code
            </label>
            <Input
              className="w-full"
              type="text"
              id="postalcode"
              placeholder="Postal code"
              value={postalcode}
              onChange={(e) => setPostalcode(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="city" className="m-0 p-0 text-gray-400 text-sm">
              City
            </label>
            <Input
              className="w-full"
              type="text"
              id="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="country" className="m-0 p-0 text-gray-400 text-sm">
            Country
          </label>
          <Input
            className="w-full"
            type="text"
            id="country"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <Button type="submit" className="rounded-lg">
          Save
        </Button>
      </form>
    </div>
  );
}
