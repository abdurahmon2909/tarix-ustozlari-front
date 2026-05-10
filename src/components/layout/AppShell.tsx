import BottomNav from "./BottomNav";

interface Props {
  children: React.ReactNode;
}

export default function AppShell({
  children,
}: Props) {
  return (
    <div
      className="
      min-h-screen
      bg-[#050B16]
      text-white
      pb-28
    "
    >
      <main
        className="
        max-w-md
        mx-auto
        px-4
      "
      >
        {children}
      </main>

      <BottomNav />
    </div>
  );
}