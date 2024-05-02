import { getUserUID } from "@/firebase/firebaseAdmin";
import { verifyHeaderHasToken } from "@/services/auth";
import { PrismaClient } from "@prisma/client/extension";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { eventID: string } }
) {
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

    const eventID = params.eventID;

    const event = await prisma.event.findFirst({
      where: {
        id: eventID
      }
    });

    return new NextResponse(
      JSON.stringify({
        event: event
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
  }
}
