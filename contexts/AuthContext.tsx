"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useUser } from "@/store";
import axios from "axios";
import toast from "react-hot-toast";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [initialLoader, setInitialLoader] = useState<boolean>(true);

  const { setUser, logoutUser } = useUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const token = await user.getIdToken();

          const { data } = await axios
            .post(
              "/api/auth/login",
              {},
              {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }
            )
            .catch(() => {
              signOut(auth);
              logoutUser();
              toast.error("You are not authorized to access this website.");
              return {
                data: { user: null }
              };
            });
          if (!data.user) {
            return;
          }
          toast.success("Logged in successfully.");
          setUser(data.user);
        } else {
          logoutUser();
          toast.success("Logged out successfully.");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setInitialLoader(false);
      }
    });
    return () => unsubscribe();
  }, [logoutUser, setUser, setInitialLoader]);

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
