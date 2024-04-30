"use client";

import { useUser } from "@/store";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ProfileHeader() {
  const { user } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    axios.post(
      "/api/auth/logout",
      {},
      {
        headers: {
          Authorization: "Bearer " + user?.accessToken
        }
      }
    );
    signOut(auth).finally(() => {
      router.replace("/");
    });
  };
  return (
    <div className="flex w-full justify-between">
      <h1 className="text-primary font-semibold text-2xl">
        Hello, {user?.name}
      </h1>
      <button
        className="bg-red-600 px-6 py-2 rounded-lg"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
