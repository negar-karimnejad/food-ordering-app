import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { User } from "../../../../model/User";
import connectDB from "../../../app/utils/db";
import { authOptions } from "../auth/[...nextauth]/options";

export async function PUT(req) {
  await connectDB();
  const data = await req.json();

  const session = await getServerSession(authOptions);
  const email = session.user.email;
  const user = await User.findOne({ email });
  await User.updateOne({ email }, data);

  return NextResponse.json({ message: "User updated successfully" });
}

export async function GET() {
  await connectDB();

  const session = await getServerSession(authOptions);
  const email = session.user.email;
  const user = await User.findOne({ email }).lean();

  return NextResponse.json({ ...user });
}
