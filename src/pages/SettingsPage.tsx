import Card from (
  "../components/ui/Card"
);

import Button from (
  "../components/ui/Button"
);

import PageHeader from (
  "../components/ui/PageHeader"
);

import { useThemeStore } from (
  "../store/theme.store"
);

export default function SettingsPage() {
  const {
    theme,
    toggleTheme,
  } = useThemeStore();

  return (
    <div className="space-y-4">
      <PageHeader
        title="Sozlamalar"
        subtitle="Ilova sozlamalari"
      />

      <Card>
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <div>
            <h2 className="font-bold">
              Theme
            </h2>

            <p className="text-sm text-gray-500">
              {theme}
            </p>
          </div>

          <Button
            onClick={toggleTheme}
          >
            O‘zgartirish
          </Button>
        </div>
      </Card>
    </div>
  );
}