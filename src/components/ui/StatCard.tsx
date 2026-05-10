interface Props {
  label: string;

  value: string | number;
}

export default function StatCard({
  label,
  value,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        p-4
        shadow-sm
      "
      style={{
        background:
          "var(--card)",

        border:
          "1px solid var(--border)",
      }}
    >
      <p className="text-sm text-gray-500">
        {label}
      </p>

      <h2
        className="
          mt-2
          text-3xl
          font-bold
        "
      >
        {value}
      </h2>
    </div>
  );
}