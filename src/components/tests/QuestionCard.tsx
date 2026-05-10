import Button from (
  "../ui/Button"
);

import Card from (
  "../ui/Card"
);

import AIExplanation from (
  "../ai/AIExplanation"
);

import {
  hapticImpact,
} from "../../lib/telegram";

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
  function handleClick(
    option: string
  ) {
    hapticImpact();

    onAnswer(option);
  }

  return (
    <div className="space-y-4">
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
                  handleClick(option)
                }
              >
                {option}
              </Button>
            )
          )}
        </div>
      </Card>

      <AIExplanation
        questionId={question.id}
      />
    </div>
  );
}