import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import {
  useNavigate,
} from "react-router-dom";

import Empty from "../components/ui/Empty";

import PageHeader from "../components/ui/PageHeader";

import Pagination from "../components/ui/Pagination";

import TestCard from "../components/tests/TestCard";

import TestCardSkeleton from "../components/tests/TestCardSkeleton";

import { getTests } from "../features/tests/tests.api";

import {
  startTest,
} from "../features/tests/test-session.api";

import { useAuthStore } from "../store/auth.store";

export default function TestsPage() {
  const navigate = useNavigate();

  const [page, setPage] =
    useState(1);

  const user = useAuthStore(
    (state: any) => state.user
  );

  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: [
      "tests",
      page,
    ],

    queryFn: getTests,
  });

  async function handleStart(
    testId: number
  ) {
    const session = await startTest(
      testId,
      user?.id || 1
    );

    navigate(
      `/tests/${session.id}`
    );
  }

  return (
    <div className="space-y-4">
      <PageHeader
        title="Testlar"
        subtitle="Bilimingizni sinab ko‘ring"
      />

      {isLoading && (
        <>
          <TestCardSkeleton />
          <TestCardSkeleton />
          <TestCardSkeleton />
        </>
      )}

      {!isLoading &&
        !data?.length && (
          <Empty title="Testlar topilmadi" />
        )}

      {data?.map((test: any) => (
        <TestCard
          key={test.id}
          test={test}
          onStart={() =>
            handleStart(test.id)
          }
        />
      ))}

      <Pagination
        page={page}
        totalPages={10}
        onChange={setPage}
      />
    </div>
  );
}