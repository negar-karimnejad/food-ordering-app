import { NextResponse } from "next/server";
import { User } from "../../../../../model/User";
import connectDB from "../../../utils/db";

export async function GET(_, res) {
  connectDB();
  const { id: _id } = await res.params;

  const user = await User.findOne({ _id });

  return NextResponse.json(user);
}

export async function PUT(req, res) {
  await connectDB();
  const data = await req.json();
  const { id: _id } = await res.params;

  const updatedUser = await User.updateOne({ _id }, data);

  return NextResponse.json(updatedUser);
}
