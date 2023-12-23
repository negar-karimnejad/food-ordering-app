import connectDB from "@/app/utils/db";
import { NextResponse } from "next/server";
import User from "../../../../model/User";


export async function POST(req) {
  const { email, password } = await req.json();

  await connectDB();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return NextResponse.json(
      { error: "User alredy exists." },
      {
        status: 400,
      }
    );
  }

  const newUser = new User({ email, password });

  try {
    await newUser.save();
    return new NextResponse("User successfully registered", { status: 201 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
}
