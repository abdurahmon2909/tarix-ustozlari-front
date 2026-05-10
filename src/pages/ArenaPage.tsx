import { useEffect } from "react";

import Card from "../components/ui/Card";

import Button from "../components/ui/Button";

import {
  connectArena,
  sendArenaMessage,
  onArenaMessage,
} from "../features/arena/arena.socket";

export default function ArenaPage() {
  useEffect(() => {
    connectArena();

    onArenaMessage((event: MessageEvent) => {
      console.log(event.data);
    });
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">
        Arena
      </h1>

      <Card>
        <p className="text-gray-500">
          Real-time battle tizimi
        </p>

        <Button
          className="mt-4 w-full"
          onClick={() =>
            sendArenaMessage(
              "Battle Join"
            )
          }
        >
          Battle Join
        </Button>
      </Card>
    </div>
  );
}