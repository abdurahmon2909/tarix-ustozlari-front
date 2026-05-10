import { api } from (
  "../../services/api"
);

export async function getStatistics(
  userId: number
) {
  const response = await api.get(
    `/statistics/${userId}`
  );

  return response.data;
}