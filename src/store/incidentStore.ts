import { create } from "zustand";

export const useIncidentStore = create<{
  count: number;
  increment: () => void;
}>((set) => ({
  count: 1, // initial (1 incident already hai)
  increment: () =>
    set((state) => ({
      count: state.count + 1
    }))
}));