import { useEffect } from "react";

import { api } from (
  "../services/api"
);

import { useAuthStore } from (
  "../store/auth.store"
);

export function useOnline() {
  const user = useAuthStore(
    (state) => state.user
  );

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    api.post(
      "/online-status/online",
      {
        user_id: user.id,
      }
    );

    return () => {
      api.post(
        "/online-status/offline",
        {
          user_id: user.id,
        }
      );
    };
  }, [user]);
}