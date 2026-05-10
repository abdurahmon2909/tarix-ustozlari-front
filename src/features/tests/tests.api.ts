import { api } from (
  "../../services/api"
);

export async function getTests() {
  const response = await api.get(
    "/tests"
  );

  return response.data;
}