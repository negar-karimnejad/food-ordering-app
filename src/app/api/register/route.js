import connectDB from "../../../app/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { User } from "../../../../model/User";

export async function POST(req) {
  await connectDB();
  const { email, password } = await req.json();

  if (!password?.length || password.length < 5) {
    new Error("password must be at least 5 characters");
  }

  const hashPassword = bcrypt.hashSync(password, 10);
  console.log("hashPassword", password);

  const newUser = await User.create({ email, password: hashPassword });
  return NextResponse.json(newUser, { status: 201 });
}
