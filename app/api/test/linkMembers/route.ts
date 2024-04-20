import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
export async function POST(request: Request) {
  try {
    const { userId, collegeId } = await request.json()
    const { user, college } = await linkUserToCollege(userId, collegeId);

    return NextResponse.json({ user, college });
  } catch (error) {
    console.log(error)
  }
}
const linkUserToCollege = async (userId: number, collegeId: number) => {
  try {
    // Find the user and college by their respective IDs
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const college = await prisma.college.findUnique({ where: { id: collegeId } });

    if (!user || !college) {
      console.error('User or college not found');
      return;
    }

    // Check if the user is already a member of the college
    const existingMembership = await prisma.user.findFirst({
      where: {
        id: userId,
        member_of_colleges: {
          some: {
            id: collegeId,
          },
        },
      },
    });

    if (existingMembership) {
      console.log('User is already a member of this college');
      return;
    }

    // Link the user to the college
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        member_of_colleges: {
          connect: { id: collegeId },
        },
      },
    });

    // Link the college to the user
    const updatedCollege = await prisma.college.update({
      where: { id: collegeId },
      data: {
        members: {
          connect: { id: userId },
        },
      },
    });

    console.log('User linked to college successfully');
    return { user: updatedUser, college: updatedCollege };
  } catch (error) {
    console.error('Error linking user to college:', error);
    throw error;
  }
};