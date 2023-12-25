import connectDB from "../../../app/utils/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { User } from "../../../../model/User";
import { revalidatePath } from "next/cache";

export async function PUT(req) {
  await connectDB();
  const data = await req.json();

  const session = await getServerSession(authOptions);
  const email = session.user.email;
  const user = await User.findOne({ email });
  await User.updateOne({ email }, data);
  revalidatePath("/profile");
  return NextResponse.json({ message: "User updated successfully" });
}

export async function GET() {
  await connectDB();

  const session = await getServerSession(authOptions);
  const email = session.user.email;
  const user = await User.findOne({ email }).lean();

  return NextResponse.json({ ...user });
}
