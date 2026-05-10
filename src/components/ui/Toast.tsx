interface Props {
  title: string;

  message: string;
}

export default function Toast({
  title,
  message,
}: Props) {
  return (
    <div
      className="
        rounded-2xl
        bg-black
        p-4
        text-white
        shadow-lg
      "
    >
      <h2 className="font-bold">
        {title}
      </h2>

      <p
        className="
          mt-1
          text-sm
          text-gray-300
        "
      >
        {message}
      </p>
    </div>
  );
}