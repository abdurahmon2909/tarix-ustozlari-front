import { useQuery } from "@tanstack/react-query";

import Card from "../components/ui/Card";

import Loading from "../components/ui/Loading";

import Empty from "../components/ui/Empty";

import PageHeader from "../components/ui/PageHeader";

import { getLeaderboard } from "../features/leaderboard/leaderboard.api";

export default function LeaderboardPage() {
  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: getLeaderboard,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.length) {
    return (
      <Empty title="Leaderboard bo‘sh" />
    );
  }

  return (
    <div className="space-y-4">
      <PageHeader
        title="Leaderboard"
        subtitle="Eng kuchli tarixchilar"
      />

      {data.map(
        (user: any, index: number) => (
          <Card key={user.id}>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold">
                  #{index + 1}
                </p>

                <h2 className="text-lg font-bold">
                  {user.full_name}
                </h2>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500">
                  XP
                </p>

                <p className="font-bold">
                  {user.xp}
                </p>
              </div>
            </div>
          </Card>
        )
      )}
    </div>
  );
}