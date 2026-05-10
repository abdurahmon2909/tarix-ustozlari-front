import { api } from (
  "../../services/api"
);

export async function submitAnswer(
  payload: {
    session_id: number;

    question_id: number;

    selected_answer: string;
  }
) {
  const response = await api.post(
    "/tests/submit-answer",
    payload
  );

  return response.data;
}