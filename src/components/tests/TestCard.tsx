import {
  Clock3,
  Star,
  ChevronRight,
} from "lucide-react";

type Props = {
  title: string;
  questionsCount: number;
  difficulty: string;
  xp: number;
};

export default function TestCard({
  title,
  questionsCount,
  difficulty,
  xp,
}: Props) {
  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      p-5
      bg-gradient-to-br
      from-[#132238]
      to-[#09111d]
      border
      border-white/10
      shadow-xl
      shadow-blue-500/10
    "
    >
      {/* GLOW */}
      <div
        className="
        absolute
        -top-10
        -right-10
        w-32
        h-32
        rounded-full
        bg-blue-500/20
        blur-[70px]
      "
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <div
          className="
          flex
          items-start
          justify-between
        "
        >
          <div>
            <p
              className="
              text-sm
              text-yellow-400
              flex
              items-center
              gap-1
            "
            >
              <Star size={14} />
              Premium test
            </p>

            <h2
              className="
              text-2xl
              font-bold
              mt-2
              leading-tight
            "
            >
              {title}
            </h2>
          </div>

          <div
            className="
            w-12
            h-12
            rounded-2xl
            bg-white/5
            border
            border-white/10
            flex
            items-center
            justify-center
          "
          >
            📚
          </div>
        </div>

        {/* INFO */}
        <div
          className="
          flex
          items-center
          gap-4
          mt-5
          text-sm
          text-gray-400
        "
        >
          <div
            className="
            flex
            items-center
            gap-1
          "
          >
            <Clock3 size={15} />
            {questionsCount} savol
          </div>

          <div>
            {difficulty}
          </div>
        </div>

        {/* FOOTER */}
        <div
          className="
          flex
          items-center
          justify-between
          mt-6
        "
        >
          <div>
            <p className="text-gray-400 text-sm">
              Mukofot
            </p>

            <h3
              className="
              text-yellow-400
              text-xl
              font-bold
            "
            >
              +{xp} XP
            </h3>
          </div>

          <button
            className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-2xl
            bg-yellow-400
            text-black
            font-bold
            transition
            hover:scale-[1.03]
          "
          >
            Boshlash

            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}