import { create } from "zustand";

import { persist } from "zustand/middleware";

interface User {
  id: number;

  telegram_id: number;

  username?: string;

  full_name?: string;

  subject?: string;

  region?: string;

  school?: string;

  xp: number;

  sharaf: number;

  level: number;

  streak: number;

  onboarding_completed: boolean;

  role: string;
}

interface AuthState {
  user: User | null;

  accessToken: string | null;

  refreshToken: string | null;

  isAuthenticated: boolean;

  isLoading: boolean;

  setLoading: (
    loading: boolean
  ) => void;

  setAuth: (
    user: User,
    accessToken: string,
    refreshToken: string
  ) => void;

  updateUser: (
    user: User
  ) => void;

  logout: () => void;
}

export const useAuthStore =
  create<AuthState>()(
    persist(
      (set) => ({
        user: null,

        accessToken: null,

        refreshToken: null,

        isAuthenticated: false,

        isLoading: true,

        setLoading: (
          loading
        ) => {
          set({
            isLoading: loading,
          });
        },

        setAuth: (
          user,
          accessToken,
          refreshToken
        ) => {
          localStorage.setItem(
            "access_token",
            accessToken
          );

          localStorage.setItem(
            "refresh_token",
            refreshToken
          );

          set({
            user,
            accessToken,
            refreshToken,
            isAuthenticated: true,
            isLoading: false,
          });
        },

        updateUser: (user) => {
          set({
            user,
          });
        },

        logout: () => {
          localStorage.removeItem(
            "access_token"
          );

          localStorage.removeItem(
            "refresh_token"
          );

          set({
            user: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
            isLoading: false,
          });
        },
      }),

      {
        name: "auth-storage",
      }
    )
  );