import connectDB from "@/app/utils/db";
import { NextResponse } from "next/server";
import User from "../../../../model/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function PUT(req) {
  await connectDB();
  const { name, image, ...otherUserInfo } = await req.json();

  const session = await getServerSession(authOptions);
  const email = session.user.email;
  const user = await User.findOne({ email });
  console.log("-----------------------", user);
  await User.updateOne({ email }, { name });

  return NextResponse.json({ message: "User updated successfully" });
}
