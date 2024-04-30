import { getUserUID } from "@/firebase/firebaseAdmin";
import { verifyHeaderHasToken } from "@/services/auth";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
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

  const { blogTitle, blogContent, blogAuthor, tags } = await req.json();
  const newBlog = await prisma.blog.create({
    data: {
      title: blogTitle,
      description: blogContent,
      banner_url: "https://source.unsplash.com/random",
      college: {
        connect: {
          id: isAdmin.collegeId
        }
      },
      upvotes: 0,
      shares: 0,
      views: 0
    }
  });

  return new NextResponse(
    JSON.stringify({
      blog: newBlog
    }),
    { status: 200 }
  );
}
