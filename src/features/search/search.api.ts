import { api } from "../../services/api";

export async function searchQuestions(
  query: string
) {
  const response = await api.get(
    "/api/v1/search",
    {
      params: {
        q: query,
      },
    }
  );

  return response.data;
}