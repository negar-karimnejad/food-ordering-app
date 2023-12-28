import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { User } from "../../../../model/User";
import connectDB from "../../../app/utils/db";
import { authOptions } from "../auth/[...nextauth]/options";

export async function PUT(req) {
  await connectDB();
  const data = await req.json();
  const { _id } = data;

  let filter = {};
  if (_id) {
    filter = { _id };
  } else {
    const session = await getServerSession(authOptions);
    const email = session.user.email;
    filter = { email };
  }

  const updatedUser = await User.findOne(filter);
  await User.updateOne(filter, data);

  return NextResponse.json(true);
}

export async function GET(req, res) {
  await connectDB();
  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");

  let filterUser = {};
  if (_id) {
    filterUser = { _id };
  } else {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
      return NextResponse.json({});
    }
    filterUser = { email };
  }

  const user = await User.findOne(filterUser).lean();

  return NextResponse.json({ ...user });
}
