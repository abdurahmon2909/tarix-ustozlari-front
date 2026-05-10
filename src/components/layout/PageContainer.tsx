import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageContainer({
  children,
}: Props) {
  return (
    <div
      className="
      max-w-md
      mx-auto
      min-h-screen
      pb-24
      px-4
    "
    >
      {children}
    </div>
  );
}