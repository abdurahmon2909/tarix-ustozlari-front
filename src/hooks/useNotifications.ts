import { useEffect } from "react";

import {
  connectNotifications,
  onNotification,
} from (
  "../features/notifications/notifications.socket"
);

import { useNotificationStore } from (
  "../store/notification.store"
);

export function useNotifications() {
  const addNotification =
    useNotificationStore(
      (state) =>
        state.addNotification
    );

  useEffect(() => {
    connectNotifications();

    onNotification((event) => {
      addNotification({
        id: Date.now(),

        title: "Yangi xabar",

        message: event.data,
      });
    });
  }, []);
}