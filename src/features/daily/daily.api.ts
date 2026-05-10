import { api } from "../../services/api";

export async function getDailyChallenge() {
  const response = await api.get(
    "/daily-challenges"
  );

  return response.data;
}