import { FirebaseAdminAuth } from "@/firebase/firebaseAdmin";
import { verifyHeaderHasToken } from "@/services/auth";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { verify } from "crypto";
import { NextResponse } from "next/server";

interface FormData {
  bannerImage: string;
  eventName: string;
  maxSlots: string;
  location: string;
  eventDescription: string;
  fromDateTime: string;
  toDateTime: string;
  tags: string[];
  speakers: string[];
  agenda: string[];
  gallery: string[];
}

async function checkIfUserHasAccess(token: string) {
  const { uid } = await FirebaseAdminAuth.verifyIdToken(token, true);

  if (!uid) {
    throw new Error("User not found!");
  }
  const prisma = new PrismaClient();
  const user = await prisma.collegeAdmin.findFirst({
    where: {
      google_uid: uid
    }
  });

  if (!user) {
    throw new Error("User not found!");
  }

  return user;
}

export async function POST(req: Request) {
  try {
    const token = verifyHeaderHasToken(req);

    const user = await checkIfUserHasAccess(token).catch((error) => {
      throw new Error(error);
    });

    const prisma = new PrismaClient();
    const {
      bannerImage,
      eventName,
      maxSlots,
      location,
      eventDescription,
      fromDateTime,
      toDateTime,
      tags,
      speakers,
      agenda,
      gallery
    } = (await req.json()) as FormData;

    const newEvent = await prisma.event.create({
      data: {
        banner_url: "https://via.placeholder.com/150",
        name: eventName,
        description: eventDescription,
        venue: location,
        from: new Date(fromDateTime),
        to: new Date(toDateTime),
        maxSlots: parseInt(maxSlots),
        college: { connect: { id: user.collegeId } }
      }
    });
    console.log(newEvent);
    return new NextResponse(JSON.stringify(newEvent), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error Creating Blog", {
      status: 401
    });
  }
}
