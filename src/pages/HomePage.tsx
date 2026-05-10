import { useQuery } from "@tanstack/react-query";

import Card from "../components/ui/Card";

import PageHeader from "../components/ui/PageHeader";

import StatCard from "../components/ui/StatCard";

import DailyChallengeCard from "../components/home/DailyChallengeCard";

import { getHomeData } from "../features/home/home.api";

import { getDailyChallenge } from "../features/daily/daily.api";

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ["home"],
    queryFn: getHomeData,
  });

  const { data: daily } = useQuery({
    queryKey: ["daily"],
    queryFn: getDailyChallenge,
  });

  return (
    <div className="space-y-4">
      <PageHeader
        title="Tarix Ustozlari"
        subtitle="Tarixni zamonaviy o‘rganing"
      />

      <Card>
        <p className="text-sm text-gray-500">
          Bugungi motivatsiya
        </p>

        <h2 className="mt-2 text-xl font-bold">
          {data?.quote || "Ilm — kuchdir"}
        </h2>
      </Card>

      <DailyChallengeCard
        title={
          daily?.title || "10 ta savol yeching"
        }
        xp={daily?.xp || 50}
      />

      <div className="grid grid-cols-2 gap-4">
        <StatCard
          label="XP"
          value={data?.xp || 0}
        />

        <StatCard
          label="Reyting"
          value={`#${data?.rank || 0}`}
        />
      </div>
    </div>
  );
}