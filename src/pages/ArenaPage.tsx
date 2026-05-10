import {
  Swords,
  Trophy,
  Flame,
  Crown,
  Users,
  ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";

const leaderboard = [
  {
    name: "Temur",
    xp: 12450,
    rank: 1,
  },

  {
    name: "Jaloliddin",
    xp: 11890,
    rank: 2,
  },

  {
    name: "Bobur",
    xp: 10920,
    rank: 3,
  },
];

export default function ArenaPage() {
  return (
    <div className="relative pb-10">
      {/* BG */}
      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-80
        h-80
        rounded-full
        bg-red-500/10
        blur-[120px]
      "
      />

      {/* HERO */}
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
        <div
          className="
          overflow-hidden
          rounded-[36px]
          border
          border-red-500/20
          bg-gradient-to-br
          from-[#1f1620]
          via-[#181522]
          to-[#0b1018]
          p-6
          shadow-2xl
          shadow-red-500/10
        "
        >
          {/* GLOW */}
          <div
            className="
            absolute
            top-0
            right-0
            w-40
            h-40
            rounded-full
            bg-red-500/10
            blur-[80px]
          "
          />

          {/* TITLE */}
          <div className="relative z-10">
            <div
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-red-500/10
              px-4
              py-2
              text-red-300
              text-sm
              font-semibold
            "
            >
              <Swords size={16} />

              SARKARDALAR JANGI
            </div>

            <h1
              className="
              mt-5
              text-4xl
              font-black
              leading-tight
            "
            >
              Real vaqt
              tarixiy duel
            </h1>

            <p
              className="
              mt-4
              text-gray-400
              leading-relaxed
            "
            >
              Butun O‘zbekiston
              bo‘ylab tarixchilar
              bilan bellashing
            </p>

            {/* STATS */}
            <div
              className="
              mt-6
              flex
              items-center
              gap-4
            "
            >
              <div
                className="
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-3
              "
              >
                <Users
                  size={18}
                  className="
                  text-green-400
                "
                />

                <span
                  className="
                  text-sm
                  font-semibold
                "
                >
                  248 online
                </span>
              </div>

              <div
                className="
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-3
              "
              >
                <Flame
                  size={18}
                  className="
                  text-yellow-400
                "
                />

                <span
                  className="
                  text-sm
                  font-semibold
                "
                >
                  x2 XP
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <button
              className="
              mt-8
              w-full
              h-16
              rounded-2xl
              bg-gradient-to-r
              from-red-500
              to-orange-500
              text-white
              text-lg
              font-black
              shadow-xl
              shadow-red-500/20
            "
            >
              ⚔️ Duel boshlash
            </button>
          </div>
        </div>
      </motion.div>

      {/* RANK */}
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
        relative
        z-10
        mt-6
      "
      >
        <div
          className="
          rounded-[32px]
          border
          border-yellow-500/20
          bg-gradient-to-br
          from-[#1a1820]
          to-[#111827]
          p-6
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
              <p
                className="
                text-gray-400
                text-sm
              "
              >
                Sizning rankingiz
              </p>

              <h2
                className="
                mt-2
                text-4xl
                font-black
                text-yellow-400
              "
              >
                #18
              </h2>
            </div>

            <div
              className="
              w-20
              h-20
              rounded-3xl
              bg-yellow-500/10
              flex
              items-center
              justify-center
            "
            >
              <Crown
                size={40}
                className="
                text-yellow-400
              "
              />
            </div>
          </div>

          {/* XP */}
          <div className="mt-6">
            <div
              className="
              flex
              items-center
              justify-between
              mb-3
            "
            >
              <p
                className="
                text-sm
                text-gray-400
              "
              >
                Gladiator League
              </p>

              <p
                className="
                text-sm
                text-yellow-300
              "
              >
                7800 XP
              </p>
            </div>

            <div
              className="
              w-full
              h-3
              rounded-full
              bg-white/10
              overflow-hidden
            "
            >
              <div
                className="
                h-full
                w-[78%]
                rounded-full
                bg-gradient-to-r
                from-yellow-400
                to-orange-500
              "
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* LEADERBOARD */}
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
          delay: 0.2,
        }}
        className="
        relative
        z-10
        mt-8
      "
      >
        {/* TITLE */}
        <div
          className="
          flex
          items-center
          justify-between
        "
        >
          <h2
            className="
            text-2xl
            font-black
          "
          >
            Leaderboard
          </h2>

          <button
            className="
            text-sm
            text-yellow-300
          "
          >
            Full ranking
          </button>
        </div>

        {/* LIST */}
        <div
          className="
          mt-4
          space-y-4
        "
        >
          {leaderboard.map(
            (
              player,
              index
            ) => (
              <motion.div
                key={index}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                p-5
              "
              >
                <div
                  className="
                  flex
                  items-center
                  justify-between
                "
                >
                  {/* LEFT */}
                  <div
                    className="
                    flex
                    items-center
                    gap-4
                  "
                  >
                    {/* RANK */}
                    <div
                      className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-gradient-to-br
                      from-yellow-400
                      to-orange-500
                      flex
                      items-center
                      justify-center
                      text-black
                      text-xl
                      font-black
                    "
                    >
                      {
                        player.rank
                      }
                    </div>

                    {/* INFO */}
                    <div>
                      <h3
                        className="
                        text-lg
                        font-semibold
                      "
                      >
                        {
                          player.name
                        }
                      </h3>

                      <p
                        className="
                        mt-1
                        text-sm
                        text-gray-400
                      "
                      >
                        {
                          player.xp
                        }{" "}
                        XP
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <ChevronRight
                    className="
                    text-gray-500
                  "
                  />
                </div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
}