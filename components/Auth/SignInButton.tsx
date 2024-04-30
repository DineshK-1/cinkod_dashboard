"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useUser } from "@/store";
import { useRouter } from "next/navigation";

export default function SignInButton() {
  const { user } = useUser();
  const router = useRouter();
  if (user) {
    router.replace("/members");
    return;
  }
  const provider = new GoogleAuthProvider();
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      className="mt-4 px-4 py-2 bg-white text-black font-medium rounded-md"
      onClick={handleLogin}
    >
      Sign in with Google
    </button>
  );
}
