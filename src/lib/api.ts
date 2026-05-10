export async function loginTelegram(
  data: {
    telegram_id: number;
    full_name: string;
    username: string;
  }
) {
  const response =
    await fetch(
      "YOUR_BACKEND_URL/api/auth/telegram",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(
          data
        ),
      }
    );

  return response.json();
}