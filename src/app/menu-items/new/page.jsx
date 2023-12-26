import Image from "next/image";
import Link from "next/link";
import React from "react";
import RightArrow from "../../../components/ui/RightArrow";
import UserTabs from "../../../components/shared/UserTabs";
import Input from "../../../components/ui/Input";
import EditableImage from "../../../components/shared/EditableImage";

export default function page() {
  return (
    <>
      <UserTabs user={data} />
      <div className="w-[350px] md:w-[700px] mt-16 m-auto flex flex-col justify-center items-center">
        <Link
          href="menu-items/new"
          className="flex gap-3 font-bold border rounded-lg p-2 w-full items-center justify-center"
        >
          Create new menu item <RightArrow />
        </Link>
        <div className="mt-10">
          <div className="min-w-[350px] max-w-[600px]  mt-5 flex justify-between items-center sm:gap-5 flex-col sm:flex-row sm:items-start">
            <EditableImage image={image} setImage={setImage} />
            <form
              onSubmit={updateUser}
              className="flex flex-col gap-3 flex-grow w-full"
            >
              <Input
                type="text"
                placeholder="Fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Email"
                value={user?.email}
                onChange={() => {}}
                className="bg-gray-300 text-gray-500 cursor-not-allowed"
                disabled={true}
              />
              <Input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Street Address"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:gap-5">
                <Input
                  type="text"
                  placeholder="Postal code"
                  value={postalcode}
                  onChange={(e) => setPostalcode(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <Input
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
        </div>
      </div>
    </>
  );
}
