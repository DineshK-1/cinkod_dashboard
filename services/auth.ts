import { CollegeAdmin } from "@/@types";
import { FirebaseAdminAuth } from "@/firebase/firebaseAdmin";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

export const updateUserAuthToken = (token: string): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      await axios.post(
        "/api/auth/login",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

// export const fetchAdminDetails = async (token: string): Promise<CollegeAdmin> => {

//   const { uid } = await FirebaseAdminAuth.verifyIdToken(token);

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