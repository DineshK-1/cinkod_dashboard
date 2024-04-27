import prismaClient from "@/utils/db";
import { PrismaClient } from "@prisma/client";
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
export async function POST(req: Request) {
  const prisma = new PrismaClient();
  const { bannerImage, eventName, maxSlots, location, eventDescription, fromDateTime, toDateTime, tags, speakers, agenda, gallery } = await req.json() as FormData;

  const newEvent = await prisma.event.create({
    data: {
      banner_url: "https://via.placeholder.com/150",
      name: eventName,
      description: eventDescription,
      venue: location,
      from: new Date(fromDateTime),
      to: new Date(toDateTime),
      maxSlots: parseInt(maxSlots),
      college: { connect: { id: 1 } }
    }
  });
  console.log(newEvent)
  return new NextResponse(JSON.stringify(newEvent), { status: 200 });
}