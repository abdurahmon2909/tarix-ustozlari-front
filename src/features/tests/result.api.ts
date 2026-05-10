import { api } from "../../services/api";

export async function getResult(
  sessionId: number
) {
  const response = await api.get(
    `/tests/result/${sessionId}`
  );

  return response.data;
}