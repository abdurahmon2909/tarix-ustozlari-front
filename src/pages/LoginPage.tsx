import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { telegramLogin } from "../features/auth/auth.api";

import { useAuthStore } from "../store/auth.store";

import { useTelegram } from "../hooks/useTelegram";

import Button from "../components/ui/Button";

export default function LoginPage() {
  const navigate = useNavigate();

  const setAuth = useAuthStore(
    (state: any) => state.setAuth
  );

  const { telegramUser } =
    useTelegram();

  async function handleLogin() {
    try {
      console.log("BUTTON CLICKED");

      console.log(
        "Telegram user:",
        telegramUser
      );

      const data =
        await telegramLogin(
          telegramUser?.id || 123456,
          telegramUser?.username ||
            "telegram_user"
        );

      console.log(
        "LOGIN RESPONSE:",
        data
      );

      setAuth(
        data.user,
        data.access_token
      );


      navigate("/");
    } catch (error: any) {
      console.error(error);

      console.log(
        "ERROR RESPONSE:",
        error?.response?.data
      );

      console.log(
        "ERROR MESSAGE:",
        error?.message
      );

      alert(
        JSON.stringify(
          error?.response?.data ||
            error?.message
        )
      );
    }
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