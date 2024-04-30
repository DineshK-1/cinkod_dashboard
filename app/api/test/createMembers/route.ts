// import { PrismaClient } from '@prisma/client';
// import { NextResponse } from 'next/server';

// const prisma = new PrismaClient();
// export async function POST() {
//     try {
//         // const sampleUsers = await createSampleUsers();
//         const sampleColleges = await createSampleColleges();

//         return NextResponse.json({ colleges: sampleColleges });
//     } catch (error) {
//         return NextResponse.error();
//     }
// }

// const createSampleUsers = async () => {
//     const sampleUsers = [];

//     for (let i = 0; i < 10; i++) {
//         const randomEmail = `sample${Math.random().toString(36).substring(2, 10)}@example.com`;
//         const randomUsername = `sampleuser${Math.random().toString(36).substring(2, 8)}`;
//         const randomGoogleUid = `google_uid_${Math.random().toString(36).substring(2, 12)}`;
//         const randomCollegeName = `Sample College ${Math.random().toString(36).substring(2, 10)}`;

//         const user = await prisma.user.create({
//             data: {
//                 email: randomEmail,
//                 name: `Sample User ${i}`,
//                 avatar_url: `https://example.com/avatar${i}.jpg`,
//                 user_name: randomUsername,
//                 google_uid: randomGoogleUid,
//                 college_name: randomCollegeName,
//                 phone: `555-555-${i}${i}${i}${i}`,
//                 bio: `This is a sample bio for user ${i}.`,
//                 socials: [`https://twitter.com/${randomUsername}`, `https://facebook.com/${randomUsername}`],
//             },
//         });

//         sampleUsers.push(user);
//     }

//     return sampleUsers;
// };

// const createSampleColleges = async () => {
//     const randomCollegeName = `Sample College ${Math.random().toString(36).substring(2, 10)}`;
//     const randomEmail = `college${Math.random().toString(36).substring(2, 10)}@example.com`;
//     try {
//         const college = await prisma.college.create({
//             data: {
//                 name: randomCollegeName,
//                 email: randomEmail,
//                 leadId: 51,
//                 description: `This is a sample description for ${randomCollegeName}.`,
//                 banner_url: `https://example.com/banner.jpg`,
//                 members_count: 0,
//                 region: `Sample Region`,
//                 photos: [`https://example.com/photo.jpg`],
//                 videos: [`https://example.com/video.mp4`],
//                 socials: [`https://twitter.com/${randomCollegeName}`, `https://facebook.com/${randomCollegeName}`],
//             },
//         });
//         return college;
//     }
//     catch (error) {
//         console.log(error);
//     }
// };