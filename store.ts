import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LoggedInCollegeAdmin } from "./@types";

interface UserState {
  user: LoggedInCollegeAdmin | null;
  setUser: (user: LoggedInCollegeAdmin) => void;
  logoutUser: () => void;
}
const initialUserState = { user: null };

export const useUser = create<UserState>()(
  persist<UserState>(
    (set, get) => ({
      ...initialUserState,
      setUser: (user) => {
        set(() => ({ user: user }));
      },
      logoutUser: () => {
        set(() => ({ ...initialUserState }));
      }
    }),
    { name: "userStore" }
  )
);
