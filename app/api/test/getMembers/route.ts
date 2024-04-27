
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
export async function GET() {
    try {
        const colleges = await prisma.user.findMany({
            include: {
                member_of_colleges: true,
            },
        });
        return NextResponse.json({ colleges });
    } catch (error) {
        return NextResponse.error();
    }
}