import { api } from "../../services/api";

export async function findBattle() {
  const response = await api.post(
    "/arena/find"
  );

  return response.data;
}