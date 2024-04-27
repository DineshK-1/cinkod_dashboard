import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
export async function GET() {
    try {
        const colleges = await prisma.college.findMany({
            include: {
                members: true,
            },
        });
        return NextResponse.json({ colleges });
    } catch (error) {
        return NextResponse.error();
    }
}