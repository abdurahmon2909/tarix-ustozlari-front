import { api } from "../../services/api";

export async function telegramLogin(
  telegram_id: number,
  username: string
) {
  const response = await api.post(
    "/api/v1/auth/telegram",
    {
      telegram_id,
      username,
    }
  );

  return response.data;
}