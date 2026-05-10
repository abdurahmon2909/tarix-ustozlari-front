import { useState } from "react";

import {
  useQuery,
} from "@tanstack/react-query";

import Card from "../components/ui/Card";

import Loading from "../components/ui/Loading";

import Empty from "../components/ui/Empty";

import PageHeader from "../components/ui/PageHeader";

import {
  searchQuestions,
} from "../features/search/search.api";

export default function SearchPage() {
  const [query, setQuery] =
    useState("");

  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: [
      "search",
      query,
    ],

    queryFn: () =>
      searchQuestions(query),

    enabled:
      query.length > 1,
  });

  return (
    <div className="space-y-4">
      <PageHeader
        title="Qidiruv"
        subtitle="Savollarni qidiring"
      />

      <input
        value={query}
        onChange={(e) =>
          setQuery(
            e.target.value
          )
        }
        placeholder="Qidirish..."
        className="w-full rounded-2xl border bg-white p-4 outline-none"
      />

      {isLoading && <Loading />}

      {!isLoading &&
        query &&
        !data?.length && (
          <Empty title="Natija topilmadi" />
        )}

      <div className="space-y-3">
        {data?.map(
          (question: any) => (
            <Card
              key={question.id}
            >
              <h2 className="font-bold">
                {
                  question.question_text
                }
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {
                  question.topic
                }
              </p>
            </Card>
          )
        )}
      </div>
    </div>
  );
}