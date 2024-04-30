import { FirebaseAdminAuth } from "@/firebase/firebaseAdmin";
import { verifyHeaderHasToken } from "@/services/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const token = verifyHeaderHasToken(req);

  const { uid } = await FirebaseAdminAuth.verifyIdToken(token, true);

  if (!uid) {
    throw new Error("User not found!");
  }

  await FirebaseAdminAuth.revokeRefreshTokens(uid);

  return new NextResponse(null, { status: 200 });
}
