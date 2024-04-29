import { FirebaseAdminAuth } from "@/firebase/firebaseAdmin";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

function verifyHeaderHasToken(req: Request) {
  const token = req.headers.get("Authorization")?.split("Bearer ")[1];
  if (!token) {
    throw new Error("No token found in Authorization header");
  }
  return token;
}

async function checkIfUserHasAccess(token: string) {
  const { uid } = await FirebaseAdminAuth.verifyIdToken(token)

  if (!uid) {
    throw new Error("User not found!");
  }

  const prisma = new PrismaClient();

  const user = await prisma.user.findFirst({
    where: {
      google_uid: uid,
    },
  });

  if (!user) {
    throw new Error("User not found!");
  }



}

export async function POST(request: Request) {
  try {
    const token = verifyHeaderHasToken(request);
    cookies().set("authToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    await checkIfUserHasAccess(token).then((user) => {
      console.log(user)
    }).catch((error) => {
      throw new Error(error);
    })

    return new NextResponse("Logged in", { status: 200 });
  } catch (error: any) {
    return new NextResponse("You don't have access to this website", { status: 401 });
  }
}
