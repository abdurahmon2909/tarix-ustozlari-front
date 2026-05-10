import { api } from "../../services/api";

export async function getBookQuestions(
  bookId: number,
  chapterId?: number
) {
  let url =
    `/books/${bookId}/questions`;

  if (chapterId) {
    url += `?chapter_id=${chapterId}`;
  }

  const response = await api.get(
    url
  );

  return response.data;
}