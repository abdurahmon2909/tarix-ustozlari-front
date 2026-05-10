import { ButtonHTMLAttributes } from "react";

interface Props
  extends ButtonHTMLAttributes<
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      className={`
        rounded-2xl
        bg-primary
        px-5
        py-3
        text-sm
        font-semibold
        text-white
        transition
        hover:opacity-90
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}