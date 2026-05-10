interface Props {
  title: string;

  subtitle?: string;
}

export default function PageHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-4">
      <h1
        className="
          text-3xl
          font-bold
        "
      >
        {title}
      </h1>

      {subtitle && (
        <p className="mt-1 text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}