import { ENV } from (
  "../config/env"
);

class WebSocketService {
  socket: WebSocket | null = null;

  connect(path: string) {
    if (this.socket) {
      this.socket.close();
    }

    this.socket = new WebSocket(
      `${ENV.WS_URL}${path}`
    );
  }

  send(message: string) {
    this.socket?.send(message);
  }

  onMessage(
    callback: (
      message: MessageEvent
    ) => void
  ) {
    this.socket?.addEventListener(
      "message",
      callback
    );
  }

  disconnect() {
    this.socket?.close();
  }
}

export const websocket =
  new WebSocketService();