"use client";

import { auth } from "@/firebase/firebase";
import { useUser } from "@/store";
import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect } from "react";

export default function LogoutPage() {
  const { logoutUser } = useUser();

  useEffect(() => {
    logoutUser();
    signOut(auth);
    axios.post("/api/auth/logout");
  }, [logoutUser]);

  return (
    <main className="flex gap-4 min-h-screen flex-col items-center justify-center bg-background p-24">
      <div className="flex flex-col items-center justify-center w-fit p-8 bg-primary rounded-xl">
        <p className="text-center">You have been logged out</p>
      </div>
    </main>
  );
}
