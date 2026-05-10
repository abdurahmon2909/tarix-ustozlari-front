interface Props {
  seconds: number;
}

export default function BattleTimer({
  seconds,
}: Props) {
  return (
    <div className="text-center text-2xl font-bold">
      {seconds}s
    </div>
  );
}