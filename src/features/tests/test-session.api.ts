import { api } from (
  "../../services/api"
);

export async function startTest(
  testId: number,
  userId: number
) {
  const response = await api.post(
    "/tests/start",
    {
      test_id: testId,
      user_id: userId,
    }
  );

  return response.data;
}