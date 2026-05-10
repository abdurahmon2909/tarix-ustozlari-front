interface Props {
  visible: boolean;
}

export default function OfflineBanner({
  visible,
}: Props) {
  if (!visible) {
    return null;
  }

  return (
    <div
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        bg-red-500
        px-4
        py-3
        text-center
        text-sm
        font-semibold
        text-white
      "
    >
      Internet mavjud emas
    </div>
  );
}