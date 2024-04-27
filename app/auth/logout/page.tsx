"use client";

import { useUser } from "@/store";
import { useEffect } from "react";

export default function LogoutPage() {
  const { logoutUser } = useUser();

  useEffect(() => {
    logoutUser();
  }, [logoutUser]);

  return (
    <main className="flex gap-4 min-h-screen flex-col items-center justify-center bg-background p-24">
      <div className="flex flex-col items-center justify-center w-fit p-8 bg-primary rounded-xl">
        <p className="text-center">You have been logged out</p>
      </div>
    </main>
  );
}
