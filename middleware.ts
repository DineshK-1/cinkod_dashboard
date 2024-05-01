import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const token = cookies().get("accessToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const response = await fetch(
    "https://cinkod-dashboard.vercel.app/api/auth/verify",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  if (response.status != 200) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/profile", "/members", "/blog"]
};
