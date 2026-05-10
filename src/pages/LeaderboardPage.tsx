import {
  Crown,
  Medal,
  Flame,
} from "lucide-react";

import { motion } from "framer-motion";

const leaders = [
  {
    id: 1,
    name: "Abdurahmon",
    xp: 12450,
    streak: 32,
  },
  {
    id: 2,
    name: "Zafar",
    xp: 11200,
    streak: 27,
  },
  {
    id: 3,
    name: "Sardor",
    xp: 10340,
    streak: 19,
  },
  {
    id: 4,
    name: "Aziz",
    xp: 9840,
    streak: 18,
  },
];

export default function LeaderboardPage() {
  return (
    <div className="relative pt-6 space-y-6 overflow-hidden">
      {/* GLOWS */}
      <div
        className="
        absolute
        top-0
        left-0
        w-72
        h-72
        rounded-full
        bg-yellow-500/20
        blur-[120px]
      "
      />

      <div
        className="
        absolute
        top-40
        right-0
        w-72
        h-72
        rounded-full
        bg-orange-500/20
        blur-[120px]
      "
      />

      {/* HEADER */}
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
        relative
        z-10
      "
      >
        <p className="text-gray-400">
          Eng kuchli tarixchilar
        </p>

        <h1
          className="
          text-4xl
          font-bold
          mt-2
        "
        >
          Leaderboard 🏆
        </h1>
      </motion.div>

      {/* TOP 3 */}
      <div
        className="
        relative
        z-10
        grid
        grid-cols-3
        gap-3
        items-end
      "
      >
        {/* 2 */}
        <div
          className="
          rounded-3xl
          p-4
          bg-white/5
          border
          border-white/10
          text-center
          h-[170px]
          flex
          flex-col
          justify-end
        "
        >
          <div
            className="
            w-16
            h-16
            rounded-full
            bg-gray-300
            mx-auto
            mb-3
          "
          />

          <h3 className="font-bold">
            Zafar
          </h3>

          <p className="text-gray-400 text-sm">
            11 200 XP
          </p>

          <div
            className="
            mt-3
            text-3xl
          "
          >
            🥈
          </div>
        </div>

        {/* 1 */}
        <div
          className="
          rounded-3xl
          p-4
          bg-gradient-to-br
          from-yellow-500/20
          to-yellow-700/10
          border
          border-yellow-500/20
          text-center
          h-[220px]
          flex
          flex-col
          justify-end
          shadow-2xl
          shadow-yellow-500/20
        "
        >
          <div
            className="
            w-20
            h-20
            rounded-full
            bg-yellow-400
            mx-auto
            mb-3
            flex
            items-center
            justify-center
          "
          >
            <Crown
              className="
              text-black
            "
            />
          </div>

          <h3
            className="
            font-bold
            text-xl
          "
          >
            Abdurahmon
          </h3>

          <p className="text-yellow-300 text-sm">
            12 450 XP
          </p>

          <div
            className="
            mt-3
            text-4xl
          "
          >
            🥇
          </div>
        </div>

        {/* 3 */}
        <div
          className="
          rounded-3xl
          p-4
          bg-white/5
          border
          border-white/10
          text-center
          h-[150px]
          flex
          flex-col
          justify-end
        "
        >
          <div
            className="
            w-14
            h-14
            rounded-full
            bg-orange-400
            mx-auto
            mb-3
          "
          />

          <h3 className="font-bold">
            Sardor
          </h3>

          <p className="text-gray-400 text-sm">
            10 340 XP
          </p>

          <div
            className="
            mt-3
            text-3xl
          "
          >
            🥉
          </div>
        </div>
      </div>

      {/* LIST */}
      <div className="relative z-10 space-y-4">
        {leaders.map(
          (
            user,
            index
          ) => (
            <motion.div
              key={user.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay:
                  index * 0.05,
              }}
              className="
              rounded-3xl
              p-5
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
            "
            >
              <div
                className="
                flex
                items-center
                justify-between
              "
              >
                <div
                  className="
                  flex
                  items-center
                  gap-4
                "
                >
                  <div
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#1a2d4a]
                    to-[#0b1523]
                    flex
                    items-center
                    justify-center
                    text-xl
                    font-bold
                  "
                  >
                    {index + 1}
                  </div>

                  <div>
                    <h3
                      className="
                      text-xl
                      font-bold
                    "
                    >
                      {user.name}
                    </h3>

                    <div
                      className="
                      flex
                      items-center
                      gap-2
                      text-gray-400
                      mt-1
                    "
                    >
                      <Flame
                        size={16}
                        className="
                        text-orange-400
                      "
                      />

                      {user.streak} kunlik streak
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-gray-400">
                    XP
                  </p>

                  <h2
                    className="
                    text-2xl
                    font-bold
                    text-yellow-400
                  "
                  >
                    {user.xp}
                  </h2>
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>

      {/* MOTIVATION */}
      <div
        className="
        relative
        z-10
        rounded-3xl
        p-6
        bg-gradient-to-r
        from-[#132238]
        to-[#0b1523]
        border
        border-yellow-500/10
      "
      >
        <div
          className="
          flex
          items-center
          gap-3
        "
        >
          <Medal
            className="
            text-yellow-400
          "
          />

          <h2
            className="
            text-2xl
            font-bold
          "
          >
            Top 10 ga kiring
          </h2>
        </div>

        <p
          className="
          mt-4
          text-gray-300
          leading-relaxed
        "
        >
          Har kuni test ishlang,
          streakni saqlang va
          leaderboardda yuqoriga
          ko‘tariling.
        </p>
      </div>
    </div>
  );
}