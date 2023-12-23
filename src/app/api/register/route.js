import connectDB from "@/app/utils/db";
import User from "../../../../model/User";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req, res) {
  const { email, password } = await req.json();

  await connectDB();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse(JSON.stringify({ error: "User alredy exists." }), {
      status: 400,
    });
  }

  const newUser = new User({ email, password });

  try {
    await newUser.save();
    return new NextResponse("User successfully registered", { status: 201 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
  revalidatePath("")
}
