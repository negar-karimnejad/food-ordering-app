import { NextResponse } from "next/server";
import { User } from "../../../../model/User";
import connectDB from "../../utils/db";

export async function GET() {
  await connectDB();

  const users = await User.find({});
  return NextResponse.json(users);
}
