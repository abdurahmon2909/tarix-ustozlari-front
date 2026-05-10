import {
  useParams,
} from "react-router-dom";

import { useQuery } from (
  "@tanstack/react-query"
);

import Loading from (
  "../components/ui/Loading"
);

import Empty from (
  "../components/ui/Empty"
);

import QuestionCard from (
  "../components/tests/QuestionCard"
);

import {
  getBookQuestions,
} from "../features/books/book-questions.api";

export default function BookChapterQuestionsPage() {
  const {
    bookId,
    chapterId,
  } = useParams();

  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: [
      "book-questions",
      bookId,
      chapterId,
    ],

    queryFn: () =>
      getBookQuestions(
        Number(bookId),
        Number(chapterId)
      ),
  });

  function handleAnswer() {}

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.length) {
    return (
      <Empty title="Savollar topilmadi" />
    );
  }

  return (
    <div className="space-y-4">
      {data.map(
        (question: any) => (
          <QuestionCard
            key={question.id}
            question={question}
            onAnswer={
              handleAnswer
            }
          />
        )
      )}
    </div>
  );
}