interface Props {
  children: React.ReactNode;
}

export default function PageContainer({
  children,
}: Props) {
  return (
    <div
      className="
        mx-auto
        w-full
        max-w-md
      "
    >
      {children}
    </div>
  );
}