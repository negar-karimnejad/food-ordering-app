import connectDB from "@/app/utils/db";
import { User } from "model/User";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  const users = await User.find({});
  return NextResponse.json(users);
}
