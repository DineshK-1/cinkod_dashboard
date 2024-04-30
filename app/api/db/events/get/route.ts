import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const token = cookies().get("authToken")?.value;

        if (!token) {
            throw new Error("No Authorization Found!");
        }

        const prisma = new PrismaClient();

        const user = await prisma.collegeAdmin.findFirst({
            where: {
                google_uid: token
            }
        });

        const events = await prisma.event.findMany({
            where: {
                collegeId: user?.collegeId
            }
        });


        return new NextResponse(JSON.stringify({
            events: events
        }), { status: 200 });
    } catch (error: any) {
        console.log(error)
    }
}