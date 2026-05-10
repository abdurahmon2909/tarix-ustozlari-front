import Card from (
  "../ui/Card"
);

import Button from (
  "../ui/Button"
);

interface Props {
  book: any;

  onOpen: () => void;
}

export default function BookCard({
  book,
  onOpen,
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
            {book.title}
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-gray-500
            "
          >
            {book.subject}
          </p>
        </div>

        <Button onClick={onOpen}>
          Ochish
        </Button>
      </div>
    </Card>
  );
}