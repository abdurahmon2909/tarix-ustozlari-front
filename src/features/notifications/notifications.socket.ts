import { websocket } from "../../services/websocket";

export function connectNotifications() {
  websocket.connect(
    "/ws/notifications"
  );
}

export function onNotification(
  callback: (
    event: MessageEvent
  ) => void
) {
  websocket.onMessage(callback);
}