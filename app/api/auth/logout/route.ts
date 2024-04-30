import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  return new NextResponse("Logged Out", { status: 200 });
}
