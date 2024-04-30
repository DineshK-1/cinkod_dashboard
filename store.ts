import { create } from "zustand";
import { FirebaseUser } from "./@types";
import { persist } from "zustand/middleware";

interface UserState {
  user: any | null;
  setUser: (user: FirebaseUser) => void;
  logoutUser: () => void;
}
const initialUserState = { user: null };

export const useUser = create<UserState>()(
  persist<UserState>(
    (set) => ({
      ...initialUserState,
      setUser: (user) => {
        set(() => ({ user: user }));
      },
      logoutUser: () => {
        set(() => ({ ...initialUserState }));
      },
    }),
    { name: "userStore" }
  )
);
