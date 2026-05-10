import { useQuery } from "@tanstack/react-query";

import PageHeader from "../components/ui/PageHeader";

import Loading from "../components/ui/Loading";

import Card from "../components/ui/Card";

import AnalyticsChart from "../components/charts/AnalyticsChart";

import ProfileStats from "../components/profile/ProfileStats";

import { useAuthStore } from "../store/auth.store";

import { getProfile } from "../features/profile/profile.api";

import { getStatistics } from "../features/statistics/statistics.api";

export default function ProfilePage() {
  const user = useAuthStore(
    (state: any) => state.user
  );

  const {
    data: profile,
    isLoading,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: () =>
      getProfile(user?.id || 1),
  });

  const {
    data: statistics,
  } = useQuery({
    queryKey: ["statistics"],
    queryFn: () =>
      getStatistics(user?.id || 1),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-4">
      <PageHeader
        title="Profil"
        subtitle="Shaxsiy ma’lumotlar"
      />

      <Card>
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl font-bold text-white">
            {profile?.full_name?.[0] || "U"}
          </div>

          <div>
            <h2 className="text-xl font-bold">
              {profile?.full_name}
            </h2>

            <p className="text-gray-500">
              @{profile?.username}
            </p>
          </div>
        </div>
      </Card>

      <ProfileStats
        xp={statistics?.xp}
        tests={statistics?.tests}
        accuracy={
          statistics?.accuracy
        }
      />

      <AnalyticsChart />
    </div>
  );
}