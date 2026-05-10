import { create } from "zustand";

interface ArenaState {
  roomId: string | null;

  connected: boolean;

  setRoom: (
    roomId: string
  ) => void;

  setConnected: (
    value: boolean
  ) => void;
}

export const useArenaStore =
  create<ArenaState>((set) => ({
    roomId: null,

    connected: false,

    setRoom: (roomId) =>
      set({ roomId }),

    setConnected: (
      connected
    ) => set({ connected }),
  }));