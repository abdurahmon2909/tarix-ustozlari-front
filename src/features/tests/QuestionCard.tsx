import Button from (
  "../ui/Button"
);

import Card from (
  "../ui/Card"
);

interface Props {
  question: any;

  onAnswer: (
    answer: string
  ) => void;
}

export default function QuestionCard({
  question,
  onAnswer,
}: Props) {
  return (
    <Card>
      <h2
        className="
          text-lg
          font-bold
        "
      >
        {question.question_text}
      </h2>

      <div className="mt-4 space-y-3">
        {question.options?.map(
          (option: string) => (
            <Button
              key={option}
              className="
                w-full
              "
              onClick={() =>
                onAnswer(option)
              }
            >
              {option}
            </Button>
          )
        )}
      </div>
    </Card>
  );
}