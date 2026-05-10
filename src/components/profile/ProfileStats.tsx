interface Props {
  xp?: number;

  tests?: number;

  accuracy?: number;
}

export default function ProfileStats({
  xp = 0,
  tests = 0,
  accuracy = 0,
}: Props) {
  return (
    <div
      className="
        grid
        grid-cols-3
        gap-3
      "
    >
      <div
        className="
          rounded-3xl
          bg-white
          p-4
          text-center
          shadow-sm
        "
      >
        <p className="text-sm text-gray-500">
          XP
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          {xp}
        </h2>
      </div>

      <div
        className="
          rounded-3xl
          bg-white
          p-4
          text-center
          shadow-sm
        "
      >
        <p className="text-sm text-gray-500">
          Tests
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          {tests}
        </h2>
      </div>

      <div
        className="
          rounded-3xl
          bg-white
          p-4
          text-center
          shadow-sm
        "
      >
        <p className="text-sm text-gray-500">
          Accuracy
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          {accuracy}%
        </h2>
      </div>
    </div>
  );
}