"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useUser } from "@/store";
import { updateUserAuthToken } from "@/services/auth";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [initialLoader, setInitialLoader] = useState<boolean>(true);

  const pathname = usePathname();
  const router = useRouter();
  const { setUser, logoutUser } = useUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(user);
      try {
        if (user) {
          const token = await user.getIdToken();
          await updateUserAuthToken(token);
          // await updateUserAuthToken(token);
          // const userRef = doc(db, "users", user.uid);
          // const userDoc = await getDoc(userRef);
          // if (userDoc.exists() && userDoc.data().texusId !== null) {
          //   const userData = userDoc.data();
          //   setUser({ ...userData, uid: user.uid } as FirebaseUser);
          // } else {
          //   router.push(
          //     `/register?email=${user.email}&uid=${userDoc.id}&displayName=${user.displayName}`
          //   );
          // }
          // const userData = userDoc.data();
          // setUser({ ...userData, uid: user.uid } as FirebaseUser);
        } else {
          logoutUser();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setInitialLoader(false);
      }
    });
    return () => unsubscribe();
  }, [logoutUser, pathname, router, setUser]);

  return (
    <AuthContext.Provider value={{}}>
      {initialLoader ? (
        <main className="w-full h-screen">
          <section className="w-full h-screen flex justify-center animate-pulse items-center">
            <p className="text-4xl">Cinkod</p>
          </section>
        </main>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
