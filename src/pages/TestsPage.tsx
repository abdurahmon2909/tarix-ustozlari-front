import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import {
  useNavigate,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

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
    <div className="relative space-y-6 pt-6">
      {/* BACKGROUND GLOW */}
      <div
        className="
        absolute
        top-0
        left-0
        w-72
        h-72
        rounded-full
        bg-blue-500/20
        blur-[120px]
      "
      />

      {/* HEADER */}
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="relative z-10"
      >
        <PageHeader
          title="Testlar"
          subtitle="Bilimingizni sinab ko‘ring"
        />
      </motion.div>

      {/* LOADING */}
      {isLoading && (
        <div className="space-y-4 relative z-10">
          <TestCardSkeleton />
          <TestCardSkeleton />
          <TestCardSkeleton />
        </div>
      )}

      {/* EMPTY */}
      {!isLoading &&
        !data?.length && (
          <div className="relative z-10">
            <Empty title="Testlar topilmadi" />
          </div>
        )}

      {/* TESTS */}
      <div className="space-y-5 relative z-10">
        {data?.map(
          (
            test: any,
            index: number
          ) => (
            <motion.div
              key={test.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay:
                  index * 0.05,
              }}
              onClick={() =>
                handleStart(test.id)
              }
            >
              <TestCard
                title={
                  test.title ||
                  "Tarix testi"
                }
                questionsCount={
                  test.questions_count ||
                  test.questionsCount ||
                  20
                }
                difficulty={
                  test.difficulty ||
                  "O‘rta"
                }
                xp={
                  test.xp ||
                  test.reward_xp ||
                  100
                }
              />
            </motion.div>
          )
        )}
      </div>

      {/* PAGINATION */}
      <div className="relative z-10 pb-24">
        <Pagination
          page={page}
          totalPages={10}
          onChange={setPage}
        />
      </div>
    </div>
  );
}