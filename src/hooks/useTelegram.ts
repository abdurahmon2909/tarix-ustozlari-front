import { useEffect } from "react";

import {
  getTelegramUser,
  initTelegram,
} from "../lib/telegram";

export function useTelegram() {
  useEffect(() => {
    initTelegram();
  }, []);

  const telegramUser =
    getTelegramUser();

  return {
    telegramUser,
  };
}