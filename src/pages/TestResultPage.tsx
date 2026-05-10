import {
  useParams,
} from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import Card from "../components/ui/Card";

import Loading from "../components/ui/Loading";

export default function TestResultPage() {
  const { sessionId } = useParams();

  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: [
      "test-result",
      sessionId,
    ],

    queryFn: async () => {
      const module = await import(
        "../features/tests/result.api"
      );

      return module.getResult(
        Number(sessionId)
      );
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">
        Natija
      </h1>

      <Card>
        <p className="text-gray-500">
          To‘g‘ri javoblar
        </p>

        <h2 className="mt-2 text-5xl font-bold">
          {data.correct}
        </h2>
      </Card>

      <Card>
        <p className="text-gray-500">
          Foiz
        </p>

        <h2 className="mt-2 text-5xl font-bold">
          {data.percentage}%
        </h2>
      </Card>
    </div>
  );
}