interface Props {
  page: number;

  totalPages: number;

  onChange: (
    page: number
  ) => void;
}

export default function Pagination({
  page,
  totalPages,
  onChange,
}: Props) {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-3
      "
    >
      <button
        disabled={page <= 1}
        onClick={() =>
          onChange(page - 1)
        }
        className="
          rounded-xl
          bg-black
          px-4
          py-2
          text-white
          disabled:opacity-50
        "
      >
        Prev
      </button>

      <div
        className="
          text-sm
          font-semibold
        "
      >
        {page} / {totalPages}
      </div>

      <button
        disabled={
          page >= totalPages
        }
        onClick={() =>
          onChange(page + 1)
        }
        className="
          rounded-xl
          bg-black
          px-4
          py-2
          text-white
          disabled:opacity-50
        "
      >
        Next
      </button>
    </div>
  );
}