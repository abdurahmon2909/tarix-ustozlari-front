import { useQuery } from (
  "@tanstack/react-query"
);

import Card from (
  "../ui/Card"
);

import Loading from (
  "../ui/Loading"
);

import {
  getAIExplanation,
} from "../../features/ai/ai.api";

interface Props {
  questionId: number;
}

export default function AIExplanation({
  questionId,
}: Props) {
  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: [
      "ai-explanation",
      questionId,
    ],

    queryFn: () =>
      getAIExplanation(
        questionId
      ),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Card>
      <p className="text-sm text-gray-500">
        AI Tushuntirish
      </p>

      <p className="mt-3">
        {data?.explanation}
      </p>
    </Card>
  );
}