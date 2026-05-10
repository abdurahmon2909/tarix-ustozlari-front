import {
  useParams,
  useNavigate,
} from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import Card from "../components/ui/Card";

import Loading from "../components/ui/Loading";

import Button from "../components/ui/Button";

import PageHeader from "../components/ui/PageHeader";

import {
  getBookChapters,
} from "../features/books/book-chapters.api";

export default function BookDetailPage() {
  const { bookId } = useParams();

  const navigate = useNavigate();

  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: [
      "book-chapters",
      bookId,
    ],

    queryFn: () =>
      getBookChapters(
        Number(bookId)
      ),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-4">
      <PageHeader
        title="Boblar"
        subtitle="Kitob bo‘limlari"
      />

      <Card>
        <Button
          className="w-full"
          onClick={() =>
            navigate(
              `/books/${bookId}/test`
            )
          }
        >
          Butun kitob testi
        </Button>
      </Card>

      {data?.map(
        (chapter: any) => (
          <Card key={chapter.id}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold">
                  {
                    chapter.title
                  }
                </h2>
              </div>

              <Button
                onClick={() =>
                  navigate(
                    `/books/${bookId}/chapters/${chapter.id}`
                  )
                }
              >
                Test
              </Button>
            </div>
          </Card>
        )
      )}
    </div>
  );
}