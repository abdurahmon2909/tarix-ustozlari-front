import Skeleton from "../ui/Skeleton";

export default function TestCardSkeleton() {
  return (
    <div
      className="
        rounded-3xl
        bg-white
        p-5
        shadow-sm
      "
    >
      <Skeleton
        className="
          h-6
          w-40
        "
      />

      <Skeleton
        className="
          mt-3
          h-4
          w-24
        "
      />
    </div>
  );
}