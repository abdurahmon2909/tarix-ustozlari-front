import { api } from (
  "../../services/api"
);

export async function getSessionQuestions(
  sessionId: number
) {
  const response = await api.get(
    `/tests/session/${sessionId}`
  );

  return response.data;
}