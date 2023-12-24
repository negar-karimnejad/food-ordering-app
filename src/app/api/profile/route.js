import connectDB from "@/app/utils/db";
import { NextResponse } from "next/server";
import User from "../../../../model/User";

export async function PUT(req) {
  const { email, fullname, phone, street, postalcode, city, country, admin } =
    await req.json();

  await connectDB();

  const user = await User.findOne({email});
  console.log(user);
  if (user.email === email) {
    const newUser = new User({
      fullname,
      phone,
      email,
      street,
      postalcode,
      city,
      country,
      admin,
    });

    newUser.save();
  }

  return NextResponse.json(user);
}
