import {
  Swords,
  Trophy,
  Flame,
  Users,
} from "lucide-react";

import { motion } from "framer-motion";

export default function ArenaPage() {
  return (
    <div className="relative pt-6 space-y-6 overflow-hidden min-h-screen">
      {/* GLOWS */}
      <div
        className="
        absolute
        top-0
        left-0
        w-72
        h-72
        rounded-full
        bg-red-500/20
        blur-[120px]
      "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-72
        h-72
        rounded-full
        bg-blue-500/20
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
          Real vaqt rejimida jang
        </p>

        <h1
          className="
          text-5xl
          font-bold
          mt-2
        "
        >
          Arena ⚔️
        </h1>
      </motion.div>

      {/* HERO CARD */}
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
        relative
        z-10
        overflow-hidden
        rounded-[32px]
        p-6
        bg-gradient-to-br
        from-[#2a1020]
        to-[#09111d]
        border
        border-red-500/20
        shadow-2xl
        shadow-red-500/10
      "
      >
        <div
          className="
          absolute
          -top-10
          -right-10
          w-40
          h-40
          rounded-full
          bg-red-500/20
          blur-[80px]
        "
        />

        <div className="relative z-10">
          <div
            className="
            flex
            items-center
            justify-between
          "
          >
            <div>
              <p className="text-red-300">
                Competitive mode
              </p>

              <h2
                className="
                text-4xl
                font-bold
                mt-2
              "
              >
                1v1 Battle
              </h2>
            </div>

            <div
              className="
              w-20
              h-20
              rounded-3xl
              bg-red-500/20
              flex
              items-center
              justify-center
            "
            >
              <Swords
                size={42}
                className="
                text-red-400
              "
              />
            </div>
          </div>

          <p
            className="
            mt-6
            text-gray-300
            leading-relaxed
          "
          >
            Random raqib bilan
            tarix savollarida
            duel qiling va
            reytingni oshiring.
          </p>

          <button
            className="
            mt-6
            w-full
            py-5
            rounded-3xl
            bg-red-500
            text-white
            text-lg
            font-bold
            shadow-2xl
            shadow-red-500/30
          "
          >
            Match topish
          </button>
        </div>
      </motion.div>

      {/* STATS */}
      <div
        className="
        relative
        z-10
        grid
        grid-cols-2
        gap-4
      "
      >
        <div
          className="
          rounded-3xl
          p-5
          bg-white/5
          border
          border-white/10
        "
        >
          <div
            className="
            flex
            items-center
            gap-2
            text-yellow-400
          "
          >
            <Trophy size={18} />
            G‘alabalar
          </div>

          <h2
            className="
            text-5xl
            font-bold
            mt-4
          "
          >
            48
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
          <div
            className="
            flex
            items-center
            gap-2
            text-orange-400
          "
          >
            <Flame size={18} />
            Win streak
          </div>

          <h2
            className="
            text-5xl
            font-bold
            mt-4
          "
          >
            9
          </h2>
        </div>
      </div>

      {/* ONLINE PLAYERS */}
      <div
        className="
        relative
        z-10
        rounded-3xl
        p-6
        bg-gradient-to-br
        from-[#132238]
        to-[#09111d]
        border
        border-blue-500/20
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
            <p className="text-blue-300">
              Online
            </p>

            <h2
              className="
              text-3xl
              font-bold
              mt-2
            "
            >
              1243 o‘yinchi
            </h2>
          </div>

          <div
            className="
            w-16
            h-16
            rounded-3xl
            bg-blue-500/20
            flex
            items-center
            justify-center
          "
          >
            <Users
              className="
              text-blue-400
            "
            />
          </div>
        </div>
      </div>

      {/* TOP PLAYERS */}
      <div
        className="
        relative
        z-10
      "
      >
        <div
          className="
          flex
          items-center
          justify-between
          mb-4
        "
        >
          <h2
            className="
            text-2xl
            font-bold
          "
          >
            Arena top
          </h2>

          <button className="text-red-400">
            Barchasi
          </button>
        </div>

        <div className="space-y-4">
          {[1, 2, 3].map(
            (item) => (
              <motion.div
                key={item}
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
                      from-red-500/30
                      to-red-700/20
                      flex
                      items-center
                      justify-center
                      font-bold
                      text-xl
                    "
                    >
                      {item}
                    </div>

                    <div>
                      <h3
                        className="
                        text-xl
                        font-bold
                      "
                      >
                        Player {item}
                      </h3>

                      <p className="text-gray-400">
                        120+ g‘alaba
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-gray-400">
                      Reyting
                    </p>

                    <h2
                      className="
                      text-2xl
                      font-bold
                      text-red-400
                    "
                    >
                      2480
                    </h2>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* BUTTON */}
      <div className="relative z-10 pb-24">
        <button
          className="
          w-full
          py-5
          rounded-3xl
          bg-gradient-to-r
          from-red-500
          to-red-700
          text-white
          text-lg
          font-bold
          shadow-2xl
          shadow-red-500/30
        "
        >
          Arena jangini boshlash
        </button>
      </div>
    </div>
  );
}