import { api } from "../../services/api";

export async function getLeaderboard() {
  const response = await api.get(
    "/leaderboard"
  );

  return response.data;
}