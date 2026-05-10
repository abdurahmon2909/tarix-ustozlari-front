import Card from "../ui/Card";

import Button from "../ui/Button";

interface Props {
  test: any;

  onStart: () => void;
}

export default function TestCard({
  test,
  onStart,
}: Props) {
  return (
    <Card>
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
        "
      >
        <div>
          <h2 className="font-bold">
            {test.title}
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-gray-500
            "
          >
            {test.topic}
          </p>
        </div>

        <Button onClick={onStart}>
          Boshlash
        </Button>
      </div>
    </Card>
  );
}