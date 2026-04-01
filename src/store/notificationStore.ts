import { create } from "zustand";

interface Notification {
  id: number;
  message: string;
}

export const useNotificationStore = create<{
  notifications: Notification[];
  addNotification: (msg: string) => void;
}>((set) => ({
  notifications: [],

  addNotification: (msg) =>
    set((state) => ({
      notifications: [
        { id: Date.now(), message: msg },
        ...state.notifications
      ]
    }))
}));