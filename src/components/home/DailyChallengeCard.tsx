import Card from (
  "../ui/Card"
);

interface Props {
  title: string;

  xp: number;
}

export default function DailyChallengeCard({
  title,
  xp,
}: Props) {
  return (
    <Card>
      <p className="text-sm text-gray-500">
        Daily Challenge
      </p>

      <h2
        className="
          mt-2
          text-xl
          font-bold
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-2
          text-sm
          text-blue-600
        "
      >
        +{xp} XP
      </p>
    </Card>
  );
}