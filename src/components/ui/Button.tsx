interface Props {
  children: React.ReactNode;

  onClick?: () => void;

  className?: string;
}

export default function Button({
  children,
  onClick,
  className = "",
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl bg-black px-4 py-2 text-white ${className}`}
    >
      {children}
    </button>
  );
}