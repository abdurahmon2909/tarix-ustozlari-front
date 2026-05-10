import { useEffect } from "react";

import { useThemeStore } from (
  "../store/theme.store"
);

export function useTheme() {
  const theme = useThemeStore(
    (state) => state.theme
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);
}