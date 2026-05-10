import { useState } from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import { useQuery } from (
  "@tanstack/react-query"
);

import Loading from (
  "../components/ui/Loading"
);

import QuestionCard from (
  "../components/tests/QuestionCard"
);

import { getSessionQuestions } from (
  "../features/tests/questions.api"
);

import { submitAnswer } from (
  "../features/tests/submit-answer.api"
);

export default function TestSessionPage() {
  const { sessionId } = useParams();

  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: [
      "test-session",
      sessionId,
    ],

    queryFn: () =>
      getSessionQuestions(
        Number(sessionId)
      ),
  });

  async function handleAnswer(
    answer: string
  ) {
    const question =
      data.questions[currentIndex];

    await submitAnswer({
      session_id: Number(
        sessionId
      ),

      question_id: question.id,

      selected_answer: answer,
    });

    const next =
      currentIndex + 1;

    if (
      next >= data.questions.length
    ) {
      navigate(
        `/tests/${sessionId}/result`
      );

      return;
    }

    setCurrentIndex(next);
  }

  if (isLoading) {
    return <Loading />;
  }

  const question =
    data.questions[currentIndex];

  return (
    <div className="space-y-4">
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <h1
          className="
            text-xl
            font-bold
          "
        >
          Savol
          {" "}
          {currentIndex + 1}
        </h1>

        <p className="text-gray-500">
          {
            currentIndex + 1
          }
          /
          {
            data.questions.length
          }
        </p>
      </div>

      <QuestionCard
        question={question}
        onAnswer={handleAnswer}
      />
    </div>
  );
}