import { getUserUID } from "@/firebase/firebaseAdmin";
import { verifyHeaderHasToken } from "@/services/auth";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(
  req: Request,
  { params }: { params: { eventID: string } }
) {
  try {
    const token = verifyHeaderHasToken(req);
    if (!token) {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
        status: 401
      });
    }

    const uid = await getUserUID(token);
    const isAdmin = await prisma.collegeAdmin.findFirst({
      where: { google_uid: uid }
    });
    if (!isAdmin) {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
        status: 401
      });
    }

    const eventID = params.eventID;
    const updatedEventData = await req.json();

    const updatedEvent = await prisma.event.update({
      where: { id: eventID },
      data: updatedEventData
    });

    return new NextResponse(JSON.stringify({ updatedEvent }), { status: 200 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Failed to update event" }),
      { status: 500 }
    );
  }
}
