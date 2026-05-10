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
      className={`
        rounded-3xl
        p-5
        shadow-sm
        ${className}
      `}
      style={{
        background:
          "var(--card)",

        border:
          "1px solid var(--border)",
      }}
    >
      {children}
    </div>
  );
}