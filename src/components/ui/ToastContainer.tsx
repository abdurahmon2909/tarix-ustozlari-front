import Toast from "./Toast";

import { useNotificationStore } from (
  "../../store/notification.store"
);

export default function ToastContainer() {
  const notifications =
    useNotificationStore(
      (state) =>
        state.notifications
    );

  return (
    <div
      className="
        fixed
        right-4
        top-4
        z-50
        space-y-3
      "
    >
      {notifications.map(
        (notification) => (
          <Toast
            key={notification.id}
            title={
              notification.title
            }
            message={
              notification.message
            }
          />
        )
      )}
    </div>
  );
}