import connectDB from "@/app/utils/db";
import { NextResponse } from "next/server";
import User from "../../../../model/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function PUT(req) {
  const data = await req.json();

  await connectDB();
  const session = await getServerSession(authOptions);
  const email = session.user.email;

  const user = await User.findOne({ email });

  if ("name" in data) {
    await User.updateOne({ email }, { name: data.name });
  }

  return NextResponse.json({ message: "User updated successfully" });
}
