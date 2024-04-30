import { getUserUID } from "@/firebase/firebaseAdmin";
import { verifyHeaderHasToken } from "@/services/auth";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const token = verifyHeaderHasToken(req);
    if (!token) {
      return new NextResponse(
        JSON.stringify({
          message: "Unauthorized"
        }),
        { status: 401 }
      );
    }
    const uid = await getUserUID(token);
    const prisma = new PrismaClient();
    const isAdmin = await prisma.collegeAdmin.findFirst({
      where: {
        google_uid: uid
      }
    });
    if (!isAdmin) {
      return new NextResponse(
        JSON.stringify({
          message: "Unauthorized"
        }),
        { status: 401 }
      );
    }
    const user = await prisma.collegeAdmin.findFirst({
      where: {
        google_uid: token
      }
    });
    const blogs = await prisma.blog.findMany({
      where: {
        collegeId: user?.collegeId
      }
    });
    return new NextResponse(
      JSON.stringify({
        blogs: blogs
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        message: "Error fetching blogs."
      }),
      { status: 500 }
    );
  }
}
