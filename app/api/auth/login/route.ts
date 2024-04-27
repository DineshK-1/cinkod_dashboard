import { cookies } from "next/headers";
import { NextResponse } from "next/server";

function verifyHeaderHasToken(req: Request) {
  const token = req.headers.get("Authorization")?.split("Bearer ")[1];
  if (!token) {
    throw new Error("No token found in Authorization header");
  }
  return token;
}
export async function POST(request: Request) {
  try {
    const token = verifyHeaderHasToken(request);
    cookies().set("authToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    return new NextResponse("Logged in", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 401 });
  }
}
