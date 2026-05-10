import { useEffect } from "react";

import { telegramLogin } from "../features/auth/auth.api";

import { useAuthStore } from "../store/auth.store";

import { useTelegram } from "../hooks/useTelegram";

import Button from "../components/ui/Button";

export default function LoginPage() {
  const setAuth = useAuthStore(
    (state: any) => state.setAuth
  );

  const { telegramUser } =
    useTelegram();

  async function handleLogin() {
    const data = await telegramLogin(
      telegramUser?.id || 123456,
      telegramUser?.username ||
        "telegram_user"
    );

    setAuth(
      data.user,
      data.access_token
    );
  }

  useEffect(() => {
    if (telegramUser) {
      handleLogin();
    }
  }, [telegramUser]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">
          Tarix Ustozlari
        </h1>

        <p className="mt-2 text-gray-500">
          Telegram orqali kirish
        </p>

        <Button
          className="mt-6 w-full"
          onClick={handleLogin}
        >
          Telegram Login
        </Button>
      </div>
    </div>
  );
}