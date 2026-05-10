interface Props {
  children: React.ReactNode;

  className?: string;
}

export default function Card({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`rounded-2xl bg-white p-4 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}