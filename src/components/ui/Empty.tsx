interface Props {
  title: string;
}

export default function Empty({
  title,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        bg-white
        p-8
        text-center
        shadow-sm
      "
    >
      <p className="text-gray-500">
        {title}
      </p>
    </div>
  );
}