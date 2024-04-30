import { create } from "zustand";
import { LoggedInCollegeAdmin } from "./@types";
import { persist } from "zustand/middleware";

interface UserState {
  user: LoggedInCollegeAdmin | null;
  setUser: (user: LoggedInCollegeAdmin) => void;
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
      }
    }),
    { name: "userStore" }
  )
);
