import { useQuery } from (
  "@tanstack/react-query"
);

import {
  useNavigate,
} from "react-router-dom";

import Loading from (
  "../components/ui/Loading"
);

import Empty from (
  "../components/ui/Empty"
);

import PageHeader from (
  "../components/ui/PageHeader"
);

import BookCard from (
  "../components/books/BookCard"
);

import { getBooks } from (
  "../features/books/books.api"
);

export default function BooksPage() {
  const navigate = useNavigate();

  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: ["books"],

    queryFn: getBooks,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.length) {
    return (
      <Empty title="Kitoblar topilmadi" />
    );
  }

  return (
    <div className="space-y-4">
      <PageHeader
        title="Kitoblar"
        subtitle="Tarix kitoblari"
      />

      {data.map((book: any) => (
        <BookCard
          key={book.id}
          book={book}
          onOpen={() =>
            navigate(
              `/books/${book.id}`
            )
          }
        />
      ))}
    </div>
  );
}