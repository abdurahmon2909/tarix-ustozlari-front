import { api } from "../../services/api";

export async function getAIExplanation(
  questionId: number
) {
  const response = await api.get(
    `/ai/explanation/${questionId}`
  );

  return response.data;
}