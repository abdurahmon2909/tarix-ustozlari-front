import {
  Bell,
  Flame,
  Trophy,
} from "lucide-react";

import {
  motion
} from "framer-motion";

export default function HomePage() {
  return (
    <div className="pt-6 space-y-6">
      {/* HEADER */}
      <div
        className="
        flex
        items-center
        justify-between
      "
      >
        <div>
          <p className="text-gray-400 text-sm">
            Assalomu alaykum
          </p>

          <h1
            className="
            text-3xl
            font-bold
          "
          >
            Abdurahmon
          </h1>
        </div>

        <button
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
          <Bell size={22} />
        </button>
      </div>

      {/* XP CARD */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
        rounded-3xl
        p-5
        bg-gradient-to-br
        from-[#132238]
        to-[#09111d]
        border
        border-yellow-500/20
      "
      >
        <div
          className="
          flex
          items-center
          justify-between
        "
        >
          <div>
            <p className="text-gray-400">
              Level 12
            </p>

            <h2
              className="
              text-4xl
              font-bold
              mt-1
            "
            >
              1840 XP
            </h2>
          </div>

          <div
            className="
            w-16
            h-16
            rounded-2xl
            bg-yellow-500/20
            flex
            items-center
            justify-center
          "
          >
            <Trophy
              size={32}
              className="text-yellow-400"
            />
          </div>
        </div>

        <div
          className="
          w-full
          h-3
          bg-white/10
          rounded-full
          mt-5
          overflow-hidden
        "
        >
          <div
            className="
            h-full
            w-[70%]
            bg-gradient-to-r
            from-yellow-400
            to-yellow-600
            rounded-full
          "
          />
        </div>
      </motion.div>

      {/* DAILY CHALLENGE */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
        className="
        rounded-3xl
        p-5
        bg-gradient-to-br
        from-[#10233c]
        to-[#08111d]
        border
        border-white/10
      "
      >
        <div
          className="
          flex
          items-center
          gap-3
        "
        >
          <div
            className="
            w-14
            h-14
            rounded-2xl
            bg-orange-500/20
            flex
            items-center
            justify-center
          "
          >
            <Flame
              className="
              text-orange-400
            "
            />
          </div>

          <div>
            <p className="text-gray-400">
              Daily Challenge
            </p>

            <h2
              className="
              text-2xl
              font-bold
            "
            >
              Jadidlar davri
            </h2>
          </div>
        </div>

        <button
          className="
          mt-5
          w-full
          py-4
          rounded-2xl
          bg-yellow-400
          text-black
          font-bold
          text-lg
        "
        >
          Boshlash
        </button>
      </motion.div>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4">
        <div
          className="
          rounded-3xl
          p-5
          bg-white/5
          border
          border-white/10
        "
        >
          <p className="text-gray-400">
            Reyting
          </p>

          <h2
            className="
            text-4xl
            font-bold
            mt-3
          "
          >
            #12
          </h2>
        </div>

        <div
          className="
          rounded-3xl
          p-5
          bg-white/5
          border
          border-white/10
        "
        >
          <p className="text-gray-400">
            Streak
          </p>

          <h2
            className="
            text-4xl
            font-bold
            mt-3
          "
          >
            12 🔥
          </h2>
        </div>
      </div>

      {/* QUOTE */}
      <div
        className="
        rounded-3xl
        p-6
        bg-gradient-to-r
        from-[#0f1d31]
        to-[#08111d]
        border
        border-yellow-500/10
      "
      >
        <p
          className="
          text-xl
          leading-relaxed
          font-medium
        "
        >
          “Tarixni bilmagan xalqning
          kelajagi yo‘q.”
        </p>

        <p
          className="
          text-yellow-400
          mt-4
        "
        >
          — Mirzo Ulug‘bek
        </p>
      </div>
    </div>
  );
}