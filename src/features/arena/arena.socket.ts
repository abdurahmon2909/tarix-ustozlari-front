import { websocket } from "../../services/websocket";

export function connectArena() {
  websocket.connect(
    "/ws/battle"
  );
}

export function sendArenaMessage(
  message: string
) {
  websocket.send(message);
}

export function onArenaMessage(
  callback: (
    event: MessageEvent
  ) => void
) {
  websocket.onMessage(callback);
}