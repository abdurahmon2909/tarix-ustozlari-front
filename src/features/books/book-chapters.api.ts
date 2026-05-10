import { api } from "../../services/api";

export async function getBookChapters(
  bookId: number
) {
  const response = await api.get(
    `/books/${bookId}/chapters`
  );

  return response.data;
}