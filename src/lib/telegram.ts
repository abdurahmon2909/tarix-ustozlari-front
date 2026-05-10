declare global {
  interface Window {
    Telegram?: any;
  }
}

export const tg =
  window.Telegram?.WebApp;

export function initTelegram() {
  if (!tg) {
    return;
  }

  tg.ready();

  tg.expand();

  tg.enableClosingConfirmation();

  tg.setHeaderColor("#111827");

  tg.setBackgroundColor("#f5f7fb");
}

export function getTelegramUser() {
  return tg?.initDataUnsafe?.user;
}

export function hapticImpact() {
  tg?.HapticFeedback?.impactOccurred(
    "medium"
  );
}

export function showTelegramPopup(
  title: string,
  message: string
) {
  tg?.showPopup({
    title,

    message,

    buttons: [
      {
        type: "ok",
      },
    ],
  });
}