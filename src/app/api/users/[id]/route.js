import { User } from "../../../../../model/User";
import { NextResponse } from "next/server";
import connectDB from "../../../utils/db";

export async function GET(_, res) {
  connectDB();
  const { id: _id } = await res.params;

  const user = await User.findOne({ _id });
  console.log(user);
  return NextResponse.json(user);
}
