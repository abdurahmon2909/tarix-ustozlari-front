import { api } from (
  "../../services/api"
);

export async function getHomeData() {
  const response = await api.get(
    "/home"
  );

  return response.data;
}