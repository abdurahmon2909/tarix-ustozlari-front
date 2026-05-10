import {
  useEffect,
  useState,
} from "react";

import { api } from "../services/api";

import { useAuthStore } from "../store/auth.store";

interface Props {
  children: React.ReactNode;
}

export default function AuthProvider({
  children,
}: Props) {
  const {
    accessToken,
    updateUser,
    logout,
    setLoading,
  } = useAuthStore();

  const [ready, setReady] =
    useState(false);

  useEffect(() => {
    async function init() {
      try {
        if (!accessToken) {
          setLoading(false);

          setReady(true);

          return;
        }

        const response =
          await api.get("/auth/me");

        updateUser(response.data);

        setLoading(false);

        setReady(true);
      } catch (error) {
        console.error(error);

        logout();

        setReady(true);
      }
    }

    init();
  }, []);

  if (!ready) {
    return (
      <div
        className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#050B16]
        text-white
      "
      >
        <div
          className="
          w-14
          h-14
          border-4
          border-yellow-400/30
          border-t-yellow-400
          rounded-full
          animate-spin
        "
        />
      </div>
    );
  }

  return children;
}