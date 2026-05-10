interface Props {
  username: string;

  xp: number;

  score: number;

  isCurrent?: boolean;
}

export default function BattlePlayerCard({
  username,
  xp,
  score,
  isCurrent = false,
}: Props) {
  return (
    <div
      className={`
        rounded-3xl
        p-4
        shadow-sm
        ${
          isCurrent
            ? "border-2 border-blue-500"
            : ""
        }
      `}
      style={{
        background:
          "var(--card)",
      }}
    >
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <div>
          <h2 className="font-bold">
            {username}
          </h2>

          <p
            className="
              text-sm
              text-gray-500
            "
          >
            {xp} XP
          </p>
        </div>

        <div
          className="
            text-3xl
            font-bold
          "
        >
          {score}
        </div>
      </div>
    </div>
  );
}