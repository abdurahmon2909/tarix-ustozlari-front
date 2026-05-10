import { api } from (
  "../../services/api"
);

export async function getProfile(
  userId: number
) {
  const response = await api.get(
    `/users/${userId}`
  );

  return response.data;
}