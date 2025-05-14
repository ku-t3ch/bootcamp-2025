import { User } from "@/types/user";
import { create } from "zustand";

type Store = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const useUserStore = create<Store>()((set) => ({
  user: null,
  setUser: (user) =>
    set(() => ({
      user: user,
    })),
}));

export default useUserStore;
