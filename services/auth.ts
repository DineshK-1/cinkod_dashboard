export const verifyHeaderHasToken = (req: Request): string => {
  const token = req.headers.get("Authorization")?.split("Bearer ")[1];
  if (!token) {
    throw new Error("No token found in Authorization header");
  }
  return token;
};

// export const fetchAdminDetails = async (token: string): Promise<CollegeAdmin> => {

//   const { uid } = await FirebaseAdminAuth.verifyIdToken(token, true);

//   if (!uid) {
//     throw new Error("User not found!");
//   }
//   const prisma = new PrismaClient();
//   const user = await prisma.collegeAdmin.findFirst({
//     where: {
//       google_uid: uid
//     },
//     include: {
//       college: true
//     }
//   });
//   console.log(user)

//   if (!user) {
//     throw new Error("User not found!");
//   }

//   return user;
// }
