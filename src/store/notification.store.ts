import { create } from "zustand";

interface Notification {
  id: number;

  title: string;

  message: string;
}

interface NotificationState {
  notifications: Notification[];

  addNotification: (
    notification: Notification
  ) => void;

  removeNotification: (
    id: number
  ) => void;
}

export const useNotificationStore =
  create<NotificationState>(
    (set) => ({
      notifications: [],

      addNotification: (
        notification
      ) =>
        set((state) => ({
          notifications: [
            notification,
            ...state.notifications,
          ],
        })),

      removeNotification: (id) =>
        set((state) => ({
          notifications:
            state.notifications.filter(
              (n) => n.id !== id
            ),
        })),
    })
  );