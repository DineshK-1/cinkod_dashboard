import { FirebaseAdminAuth } from "@/firebase/firebaseAdmin";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

async function checkIfUserHasAccess(token: string) {
    const { uid } = await FirebaseAdminAuth.verifyIdToken(token);

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

function verifyHeaderHasToken(req: Request) {
    const token = req.headers.get("Authorization")?.split("Bearer ")[1];
    if (!token) {
        throw new Error("No token found in Authorization header");
    }
    return token;
}
export async function POST(req: Request) {
    try {
        const token = verifyHeaderHasToken(req);
        await checkIfUserHasAccess(token)
            .then((user) => {
                console.log(user);
            })
            .catch((error) => {
                throw new Error(error);
            });

        return new NextResponse("Logged in", { status: 200 });
    } catch (error: any) {
        return new NextResponse("You don't have access to this website", {
            status: 401
        });
    }
}